import os
import json
import requests
import base64
import re

# --- CONFIGURATION ---
# We use standard paths to keep the repository organized across your Mac, MSI, and HP laptops.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# Pointing to the layout manifest. Make sure you create this file structure!
MANIFEST_PATH = os.path.join(BASE_DIR, "data", "layout_v1.json")
IMAGE_DIR = os.path.join(BASE_DIR, "data", "03_screenshots")
# Default Ollama local endpoint. Ensure Ollama is running in your terminal!
OLLAMA_URL = "http://localhost:11434/api/generate"
# 'llava' is our multimodal model of choice for this step because it can "see" the image.
MODEL = "llava"


def get_actual_text(node_string, entry_id):
    """
    Extracts the REAL text content or identifier from JSX/HTML.
    Why? So the AI grounds its description in the actual UI element (e.g., "Submit Button")
    rather than saying "the element".
    """
    clean = re.sub(r'<[^>]*>', '', node_string)
    clean = re.sub(r'\{|\}', '', clean).strip()
    if clean and len(clean) > 1:
        return clean
    parts = entry_id.split("_")
    return parts[-1] if len(parts) > 1 else "UI Container"


def analyze_layout_mutation(node_string):
    """
    Maps Tailwind layout classes to semantic spatial descriptors.
    This is crucial for the "Cross-Modal Attention" mechanism later, as it gives
    the text stream specific spatial keywords to look for.
    """
    layout_map = {
        r"flex-col(?:-reverse)?": ["stacked vertically", "column-based", "crushed vertically"],
        r"flex-row(?:-reverse)?": ["side-by-side", "horizontal", "stretched out"],
        r"flex-(?:no)?wrap(?:-reverse)?": ["forced wrap", "spilling out", "overflowing container"],
        r"items-(start|end|center|baseline|stretch)": ["misaligned cross-axis", "off-center", "awkwardly aligned"],
        r"justify-(start|end|center|between|around|evenly)": ["badly distributed", "clumped together",
                                                              "pushed to edges"],
        r"content-(start|end|center|between|around|evenly)": ["multi-line spacing broken", "content collapsed",
                                                              "vertical distribution error"],
        r"grid": ["broken grid", "overlapping cells", "grid collapse"],
        r"grid-cols-(?:\d+|none)": ["wrong column count", "squished grid", "exploded columns"],
        r"grid-rows-(?:\d+|none)": ["wrong row count", "compressed vertically", "expanded rows"],
        r"col-span-(?:\d+|full)": ["wrong width", "spilling over", "column mismatch"],
        r"row-span-(?:\d+|full)": ["wrong height", "vertical overflow", "row mismatch"],
        r"gap(?:-[xy])?-(?:\d+)": ["extreme spacing", "zero gap", "massive gap", "spacing broken"],
        r"(?<!-)block|inline-flex": ["display swapped", "structural context changed", "broken flow"]
    }
    suggested_words = []
    for pattern, words in layout_map.items():
        if re.search(pattern, node_string):
            suggested_words.extend(words)
    return suggested_words if suggested_words else ["misaligned", "spatially broken", "shifted"]


def generate_description(image_path, pos_node, entry_id):
    """
    Generates high-contrast diagnostic tones comparing the screenshot to the code.
    We pass the image (as base64) and our prompt to Ollama.
    """
    if not os.path.exists(image_path):
        print(f"❌ Image missing: {image_path}")
        return None

    # Convert the image to base64 so we can send it via HTTP to Ollama
    with open(image_path, "rb") as img_file:
        img_base64 = base64.b64encode(img_file.read()).decode('utf-8')

    real_text = get_actual_text(pos_node, entry_id)
    keywords = analyze_layout_mutation(pos_node)

    # NEW PUNCHY PROMPT: Strictly Intent vs. Actual Layout
    prompt = f"""
        [SYSTEM]
        You are a Senior UI Auditor. Use short, simple sentences. 
        Focus: Intended Layout Design (Code) vs. Actual Broken Layout (Screenshot).
        Target Element: "{real_text}".
        Code snippet: {pos_node}.

        [TASK]
        Contrast the BUG against the DESIGN. Use these layout keywords: {', '.join(keywords)}.
        Return JSON with 5 keys. Each value MUST be exactly 10-20 words.

        - "critical": The design intended a structured layout, but "{real_text}" appeared {keywords[0]}. This structural failure breaks the entire component flow.

        - "frustrated": The user expects "{real_text}" to align with its container, but it looks {keywords[-1]}. This chaotic spacing makes the UI unusable.

        - "descriptive": "{real_text}" is visually {keywords[-1]} in the screenshot. The Flexbox/Grid code intended a neat arrangement, but the positioning failed.

        - "comparative": The surrounding containers hold their shape, but "{real_text}" is {keywords[0]}. It defies the expected spatial distribution of the page.

        - "concise": "{real_text}" suffered a layout collapse, appearing {keywords[-1]} instead of properly aligned.

        [RULES]
        1. NO generic terms ("visible element", "this container").
        2. NO filler ("deviation", "discrepancy", "envisioned").
        3. NO code syntax in the output values.
        4. MUST use "{real_text}" in every key.
        5. MUST output ONLY valid JSON.
        """

    try:
        # Send the request to your local Ollama instance
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
    """
    Orchestrates dataset repair without overriding valid past results.
    This is designed to be stoppable and resumable—perfect for long processing runs.
    """
    if not os.path.exists(MANIFEST_PATH):
        print(f"❌ Manifest not found at {MANIFEST_PATH}.")
        return

    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    processed = 0

    for entry in manifest:
        # LOGIC CHANGE: ONLY process entries marked as ready.
        # This acts as our save-state mechanism.
        if entry.get("status") != "ready_for_ollama":
            continue

        real_content = get_actual_text(entry["positive_node"], entry["id"])
        print(f"🛠️  Processing {entry['id']} | Grounding: '{real_content}'")

        img_path = os.path.join(IMAGE_DIR, entry["image_anchor"])

        # Generate the 5-key JSON via Ollama
        tones = generate_description(img_path, entry["positive_node"], entry["id"])

        # Define our required JSON keys
        required_keys = ["critical", "frustrated", "descriptive", "comparative", "concise"]

        # Validate the response
        if isinstance(tones, dict) and all(k in tones for k in required_keys):
            all_text = str(tones).lower()

            # STRICT VALIDATOR: Prevent LLM Hallucinations
            forbidden_filler = ["deviation", "discrepancy", "envisioned", "visible element", "specific component"]
            hallucinated = any(x in all_text for x in forbidden_filler)
            missing_ground = real_content.lower() not in all_text

            if missing_ground or hallucinated:
                print(f"❌ Failed validation for '{real_content}'. Hallucinated or missing ground text. Skipping...")
                continue

            # Update the entry if it passes validation
            entry["text_anchor"] = tones
            entry["status"] = "completed"
            processed += 1

            # Atomic Save: Save after every single success.
            # If your laptop battery dies or you hit Ctrl+C, you lose zero work.
            with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
                json.dump(manifest, f, indent=4)
            print(f"✅ Success! Progress saved.")
        else:
            print(f"⚠️  Incomplete or malformed JSON for {entry['id']}.")

    print(f"🏁 Layout enrichment cycle finished. Total newly processed: {processed}")


if __name__ == "__main__":
    run_enrichment()
