# layering_ollama.py
import os
import json
import requests
import base64
import re

# --- CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# Target the layering manifest specifically
MANIFEST_PATH = os.path.join(BASE_DIR, "data", "temp_layering.json")
IMAGE_DIR = os.path.join(BASE_DIR, "data", "03_screenshots")
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llava"


def get_actual_text(node_string, entry_id):
    """
    Extracts the REAL text content from JSX/HTML to ground the LLM's description.
    """
    clean = re.sub(r'<[^>]*>', '', node_string)
    clean = re.sub(r'\{|\}', '', clean).strip()
    if clean and len(clean) > 1:
        return clean
    parts = entry_id.split("_")
    return parts[-1] if len(parts) > 1 else "UI Element"


def analyze_layering_mutation(node_string):
    """
    Exhaustively maps Tailwind layering/positioning classes to semantic depth descriptors.
    This provides the text stream with critical depth-based context (Z-axis).
    """
    layering_map = {
        # Negative or Zero Z-Index (Element pushed backward)
        r"z-\[-\d+\]": ["hidden behind", "buried under", "completely covered", "sent to background"],
        r"z-0": ["lost stacking priority", "flattened", "pushed behind active elements"],

        # Positive / Extreme Z-Index (Element pulled forward inappropriately)
        r"z-(?:[1-9]\d*|\[\d+\])": ["overlapping inappropriately", "piercing through", "floating above", "obstructing"],

        # Position Swapping (Breaking stacking context or document flow)
        r"\babsolute\b": ["detached from flow", "floating out of place", "overlapping standard content"],
        r"\bfixed|sticky\b": ["glued to the screen", "scrolling incorrectly", "stuck over content"],
        r"\bstatic|relative\b": ["lost its floating position", "trapped in normal flow", "pushed inline forcefully"]
    }

    suggested_words = []
    for pattern, words in layering_map.items():
        if re.search(pattern, node_string):
            suggested_words.extend(words)

    return suggested_words if suggested_words else ["occluded", "stacking incorrectly", "depth broken"]


def generate_description(image_path, pos_node, entry_id):
    """
    Generates high-contrast diagnostic tones comparing screenshot to intended layering.
    """
    if not os.path.exists(image_path):
        print(f"❌ Image missing: {image_path}")
        return None

    with open(image_path, "rb") as img_file:
        img_base64 = base64.b64encode(img_file.read()).decode('utf-8')

    real_text = get_actual_text(pos_node, entry_id)
    keywords = analyze_layering_mutation(pos_node)

    # STRICT PROMPT: Focus entirely on depth (Z-axis), occlusion, and positioning.
    prompt = f"""
        [SYSTEM]
        You are a Senior UI Auditor. Use short, simple sentences. 
        Focus: Intended Stacking Order (Code) vs. Actual Depth Bug (Screenshot).
        Target Element: "{real_text}".
        Code snippet: {pos_node}.

        [TASK]
        Contrast the BUG against the DESIGN using these Z-axis/depth keywords: {', '.join(keywords)}.
        Return JSON with 5 keys. Each value MUST be exactly 10-20 words.

        - "critical": The design intended a specific depth, but "{real_text}" appeared {keywords[0]}. This stacking failure completely ruins the component visibility.

        - "frustrated": The user expects to interact with "{real_text}", but it looks {keywords[-1]}. This depth conflict makes the element unusable.

        - "descriptive": "{real_text}" is visually {keywords[-1]} in the screenshot. The positioning code failed, causing a severe z-axis intersection.

        - "comparative": The surrounding layers are correct, but "{real_text}" is {keywords[0]}. It defies the expected background-to-foreground hierarchy.

        - "concise": "{real_text}" suffered a stacking collapse, appearing {keywords[-1]} instead of its intended depth layer.

        [RULES]
        1. NO generic terms ("visible element", "this container").
        2. NO filler ("deviation", "discrepancy", "envisioned").
        3. NO code syntax in the output values.
        4. MUST use "{real_text}" in every key.
        5. MUST output ONLY valid JSON.
        """

    try:
        response = requests.post(OLLAMA_URL, json={
            "model": MODEL,
            "prompt": prompt,
            "format": "json",
            "stream": False,
            "images": [img_base64]
        }, timeout=150)
        return json.loads(response.json().get("response", "{}"))
    except Exception as e:
        print(f"⚠️ Request failed: {e}")
        return None


def run_enrichment():
    """ Orchestrates dataset repair with stop/resume functionality. """
    if not os.path.exists(MANIFEST_PATH):
        print(f"❌ Manifest not found at {MANIFEST_PATH}.")
        return

    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    processed = 0

    for entry in manifest:
        # Check status to allow stopping/resuming
        if entry.get("status") != "ready_for_ollama":
            continue

        real_content = get_actual_text(entry["positive_node"], entry["id"])
        print(f"🛠️  Processing {entry['id']} | Grounding: '{real_content}'")

        img_path = os.path.join(IMAGE_DIR, entry["image_anchor"])

        tones = generate_description(img_path, entry["positive_node"], entry["id"])
        required_keys = ["critical", "frustrated", "descriptive", "comparative", "concise"]

        if isinstance(tones, dict) and all(k in tones for k in required_keys):
            all_text = str(tones).lower()

            # STRICTOR VALIDATOR: Block hallucinations
            forbidden_filler = ["deviation", "discrepancy", "envisioned", "visible element", "stacking discrepancy"]
            hallucinated = any(x in all_text for x in forbidden_filler)
            missing_ground = real_content.lower() not in all_text

            if missing_ground or hallucinated:
                print(f"❌ Failed validation for '{real_content}'. Hallucinated or missing ground text. Skipping...")
                continue

            entry["text_anchor"] = tones
            entry["status"] = "completed"
            processed += 1

            # Atomic Save
            with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
                json.dump(manifest, f, indent=4)
            print(f"✅ Success! Progress saved.")
        else:
            print(f"⚠️  Incomplete or malformed JSON for {entry['id']}.")

    print(f"🏁 Layering enrichment cycle finished. Total newly processed: {processed}")


if __name__ == "__main__":
    run_enrichment()
