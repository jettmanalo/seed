import os
import json
import random
import time

import requests
import base64
import re

# --- CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MANIFEST_PATH = os.path.join(BASE_DIR, "data", "spacing_v1.json")
SEED_DIR = os.path.join(BASE_DIR, "data", "01_raw_seeds")
IMAGE_DIR = os.path.join(BASE_DIR, "data", "03_screenshots")
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llava"


def get_original_node(category, comp_name, mutated_node):
    """
    Finds the unmutated version of the node in the seed file.
    """
    seed_file = os.path.join(SEED_DIR, f"{category}.jsx")
    if not os.path.exists(seed_file):
        return None

    with open(seed_file, 'r', encoding="utf-8") as f:
        content = f.read()

    # Locate the specific component block
    pattern = rf"export const {comp_name}\s*=\s*\(\)\s*=>\s*\((.*?)\)(?=\s*export|;|\s*$)"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        return None

    comp_code = match.group(1)

    # Logic: The original node is the one that looks most like the mutated one
    # but has different Tailwind classes.
    # We find the node that shares the same tag and properties (excluding className).
    tag_match = re.search(r'<([a-zA-Z0-9]+)', mutated_node)
    if not tag_match: return None
    tag = tag_match.group(1)

    # Extract non-className props for matching (like type="button" or aria-label)
    props = re.findall(r'(\w+)=["\']([^"\']+)["\']', mutated_node)
    search_props = [f'{p[0]}="{p[1]}"' for p in props if p[0] != "className"]

    # Look for this tag in the original seed component
    all_tags = re.findall(rf'<{tag}[^>]*>', comp_code)
    for t in all_tags:
        if all(p in t for p in search_props):
            return t
    return None


def get_human_label(node_string):
    tag_match = re.search(r'<([a-zA-Z0-9-]+)', node_string)
    tag_raw = tag_match.group(1).lower() if tag_match else "div"

    multi_map = {
        "button": ["thing to click", "interactive part", "Action Button", "Clickable Button", "Interactive Trigger",
                   "Command Element"],
        "input": ["typing area", "empty slot", "Input Box", "Text Field", "Data Entry Module", "Form Input Component"],
        "div": ["section", "block", "Container Box", "Content Area", "Layout Wrapper", "Structural Division"],
        "p": ["writing", "words", "Text Paragraph", "Body Text", "Typography Element", "Content String"],
        "span": ["small bit", "detail", "Badge Label", "Inline Text", "Text Fragment", "Inline Descriptor"],
        "label": ["tag", "name", "Form Label", "Input Header", "Field Descriptor", "Caption Identifier"],
        "h1": ["big text", "main part", "Page Title", "Main Heading", "Primary Headline", "Top-level Header"],
        "h2": ["header", "title", "Section Header", "Sub-title", "Secondary Headline", "Category Identifier"],
        "a": ["blue text", "clickable text", "Navigation Link", "Hyperlink", "Anchor Element", "Directional Reference"],
        "img": ["picture", "visual", "Graphic Image", "Photo Asset", "Visual Illustration", "Media Resource"],
        "svg": ["icon", "symbol", "Vector Graphic", "Interface Icon", "Scalable Glyph", "Vector Illustration"],
        "form": ["box", "set of inputs", "Data Form", "Input Group", "Interaction Module", "Submission Container"]
    }

    options = multi_map.get(tag_raw, ["UI Piece", "Interface Part", "Component"])
    return random.choice(options)


def generate_description(image_path, pos_node, orig_node, category):
    img_base64 = base64.b64encode(open(image_path, "rb").read()).decode('utf-8')

    # 1. Clean the nodes: Remove brackets, className, and props entirely
    # This stops the AI from seeing the code it is forbidden to use
    clean_mut = re.sub(r'<[^>]+>', '', pos_node).strip()
    clean_orig = re.sub(r'<[^>]+>', '', orig_node).strip() if orig_node else "Standard Layout"

    # 2. Extract inner text for the AI's "Search Term"
    inner_text = clean_mut if clean_mut else "visible content"
    human_label = get_human_label(pos_node)

    # 3. Use the human_label and clean text in the prompt
    prompt = f"""
        [SYSTEM]
        You are a Senior UI Designer performing a visual audit. 
        You are looking at a screenshot where the "{human_label}" (showing text: "{inner_text}") has a spacing error.

        [CONTEXT]
        Expected Content: "{clean_orig}"
        Current Visible Display: "{clean_mut}"

        [TASK]
        Describe the spatial relationship between the "{human_label}" and its immediate neighbors.
        Return a JSON object with 5 EXACT keys. Each value must be 15-35 words of specific detail.

        - "critical": Describe how the layout is physically broken (e.g. "The {human_label} is literally colliding with the border...").
        - "frustrated": A human complaint (e.g. "I hate how this {human_label} is smashed into the left corner!").
        - "descriptive": A literal observation of pixels and directions (e.g. "There is a massive void on the right of the {human_label}...").
        - "comparative": Compare the broken space to the stable elements around it.
        - "concise": A 5-8 word punchy summary.

        [STRICT FORBIDDEN LIST]
        Do NOT use any of these words or characters: "<", ">", "div", "svg", "span", "button", "input", "element", "P", "node", "structural", "placeholder", "N/A", "user complaint", "intended".
        """

    try:
        response = requests.post(OLLAMA_URL, json={
            "model": MODEL, "prompt": prompt, "format": "json", "stream": False, "images": [img_base64]
        }, timeout=90)
        return json.loads(response.json().get("response", "{}"))
    except:
        return None


def run_enrichment():
    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    # Track the last processed batch to trigger cooldowns
    # last_batch = None

    for entry in manifest:
        if entry.get("status") != "ready_for_ollama": continue

        # Extract current batch ID (e.g., '01' from 'spacing_01_SuccessAlert')
        # current_batch = entry["id"].split("_")[1]

        # COOLDOWN LOGIC: If the batch number changes, pause for 1 minute
        # if last_batch is not None and current_batch != last_batch:
        #     print(f"❄️ Batch {last_batch} finished. Cooling down for 30 seconds...")
        #     time.sleep(30)

        # last_batch = current_batch

        parts = entry["id"].split("_")
        category, comp_name = parts[0], parts[2]
        img_path = os.path.join(IMAGE_DIR, entry["image_anchor"])

        # --- ENHANCED PROCESSING ---
        tones = generate_description(img_path, entry["positive_node"], "N/A", category)

        # --- STEP 3: THE SANITIZER ---
        required_keys = ["critical", "frustrated", "descriptive", "comparative", "concise"]
        forbidden_patterns = [
            r'<', r'>',  # Any angle brackets (JSX)
            r'className',  # React specific props
            r'div\b', r'svg\b',  # Isolated tag names
            r'\btarget\b',  # Specific technical terms
            r'\{', r'\}'  # Curly braces
        ]

        has_keys = isinstance(tones, dict) and all(k in tones for k in required_keys)
        has_quality = has_keys and all(len(str(v)) > 15 for v in tones.values() if v != "concise")
        leaked_code = has_keys and any(
            re.search(pat, str(v).lower()) for pat in forbidden_patterns for v in tones.values())

        if has_keys and has_quality and not leaked_code:
            entry["text_anchor"] = tones
            entry["status"] = "completed"

            # Atomic Save to prevent corruption during sudden pauses
            temp_manifest = MANIFEST_PATH + ".tmp"
            with open(temp_manifest, "w", encoding="utf-8") as f:
                json.dump(manifest, f, indent=4, ensure_ascii=False)
            os.replace(temp_manifest, MANIFEST_PATH)
            print(f"✅ [{entry['id']}] Enriched & Sanitized.")
        else:
            reason = "Leaked Code" if leaked_code else "Low Quality/Missing Keys"
            print(f"⚠️ [{entry['id']}] Rejected: {reason}. Retrying next session.")


if __name__ == "__main__":
    run_enrichment()
