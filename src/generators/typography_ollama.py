import os
import json
import time
import requests
import base64
import re
import random

# --- CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MANIFEST_PATH = os.path.join(BASE_DIR, "data", "typography_v1.json")
IMAGE_DIR = os.path.join(BASE_DIR, "data", "03_screenshots")
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llava"


def get_actual_text(node_string, entry_id):
    """
    Extracts the REAL text content from JSX/HTML.
    """
    clean = re.sub(r'<[^>]*>', '', node_string)
    clean = re.sub(r'\{|\}', '', clean).strip()
    if clean and len(clean) > 1:
        return clean
    parts = entry_id.split("_")
    return parts[-1] if len(parts) > 1 else "UI Element"


def analyze_mutation_intensity(node_string):
    """
    Maps Tailwind classes to semantic descriptors.
    """
    intensity_map = {
        r"text-(xs|sm)": ["microscopic", "tiny", "shrunken", "unreadable"],
        r"text-(7xl|8xl|9xl)": ["massive", "colossal", "overbearing", "huge"],
        r"font-(thin|extralight|light)": ["skeletal", "faint", "faded", "flimsy"],
        r"font-(bold|extrabold|black)": ["obscene", "heavy", "thick", "intense"],
        r"lowercase": ["small-case", "un-capitalized", "small-letters"],
        r"uppercase": ["all-caps", "shouting", "capitalized"]
    }
    suggested_words = []
    for pattern, words in intensity_map.items():
        if re.search(pattern, node_string):
            suggested_words.extend(words)
    return suggested_words if suggested_words else ["distinct", "noticeable", "specific"]


def generate_description(image_path, pos_node, category_info, entry_id):
    """
    Generates high-contrast diagnostic tones comparing screenshot to code.
    """
    if not os.path.exists(image_path): return None

    with open(image_path, "rb") as img_file:
        img_base64 = base64.b64encode(img_file.read()).decode('utf-8')

    real_text = get_actual_text(pos_node, entry_id)
    keywords = analyze_mutation_intensity(pos_node)

    # NEW PUNCHY PROMPT: Strictly Intent vs. Actual
    prompt = f"""
        [SYSTEM]
        You are a Senior UI Auditor. Use short, simple sentences. 
        Focus: Intended Design (Code) vs. Actual Bug (Screenshot).
        Target: "{real_text}".
        Code: {pos_node}.

        [TASK]
        Contrast the BUG against the DESIGN. Use these keywords: {', '.join(keywords)}.
        Return JSON with 5 keys. Each value MUST be 10-20 words.

        - "critical": The design intended "{real_text}" to be prominent, but it appeared {keywords[0]}. This "{real_text}" mismatch breaks the intended hierarchy completely.

        - "frustrated": The user expects "{real_text}" to look like the stable headers nearby, but it looks {keywords[1]}. This visual conflict makes "{real_text}" confusing.

        - "descriptive": "{real_text}" is visually {keywords[1]} in the screenshot. The code intended a standard look, but the pixels are {keywords[0]} instead.

        - "comparative": Nearby elements are correct, but "{real_text}" is {keywords[2]}. It has lost its intended size and weight compared to the stable layout.

        - "concise": "{real_text}" appeared {keywords[2]} instead of the intended design.

        [RULES]
        1. NO generic terms ("visible label", "specific text", "placeholder").
        2. NO filler ("deviation", "discrepancy", " envisioned").
        3. NO code syntax.
        4. MUST use "{real_text}" in every key.
        """

    try:
        response = requests.post(OLLAMA_URL, json={
            "model": MODEL, "prompt": prompt, "format": "json", "stream": False, "images": [img_base64]
        }, timeout=150)
        return json.loads(response.json().get("response", "{}"))
    except:
        return None


def run_enrichment():
    """ Orchestrates dataset repair without overriding valid past results. """
    if not os.path.exists(MANIFEST_PATH):
        print("❌ Manifest not found.")
        return

    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    # Count for logging
    processed = 0

    for entry in manifest:
        # LOGIC CHANGE: ONLY process entries marked as ready.
        # Skip 'completed' to avoid overriding/re-running valid work.
        if entry.get("status") != "ready_for_ollama":
            continue

        real_content = get_actual_text(entry["positive_node"], entry["id"])
        print(f"🛠️  Processing {entry['id']} | Grounding: '{real_content}'")

        img_path = os.path.join(IMAGE_DIR, entry["image_anchor"])
        sub_cat = "size and scaling"
        if "weight" in entry["id"].lower(): sub_cat = "boldness/weight"
        if "case" in entry["id"].lower(): sub_cat = "casing/capitalization"

        tones = generate_description(img_path, entry["positive_node"], sub_cat, entry["id"])

        required_keys = ["critical", "frustrated", "descriptive", "comparative", "concise"]

        if isinstance(tones, dict) and all(k in tones for k in required_keys):
            all_text = str(tones).lower()

            # STRICTOR VALIDATOR
            forbidden_filler = ["deviation", "discrepancy", "envisioned", "visible label", "specific text"]
            hallucinated = any(x in all_text for x in forbidden_filler)
            missing_ground = real_content.lower() not in all_text

            if missing_ground or hallucinated:
                print(f"❌ Failed validation for '{real_content}'. skipping...")
                continue

            entry["text_anchor"] = tones
            entry["status"] = "completed"
            processed += 1

            # Atomic Save: Save after every success to prevent massive data loss on crash
            with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
                json.dump(manifest, f, indent=4)
            print(f"✅ Success! Progress saved.")
        else:
            print(f"⚠️  Incomplete JSON for {entry['id']}.")

    print(f"🏁 Enrichment cycle finished. Total newly processed: {processed}")


if __name__ == "__main__":
    run_enrichment()
