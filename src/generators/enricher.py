import os
import json
import re
import random

# --- CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MANIFEST_PATH = os.path.join(BASE_DIR, "data", "layering_v1.json")
SEED_DIR = os.path.join(BASE_DIR, "data", "01_raw_seeds")
MUTATED_DIR = os.path.join(BASE_DIR, "data", "02_mutated_code")

# Improved Regex: Handles more flexible spacing and multi-line bodies
COMPONENT_REGEX = r"export\s+const\s+{comp_name}\s*=\s*\(\)\s*=>\s*\(([\s\S]*?)\);?\s*$"


def clean_tag(tag):
    """Collapses newlines and multiple spaces into a single space."""
    return re.sub(r'\s+', ' ', tag.strip())


def extract_tags(jsx_content):
    """Extracts all opening tags and cleans them."""
    tags = re.findall(r"<[a-z0-9]+[^>]*>", jsx_content, re.IGNORECASE)
    return [clean_tag(t) for t in tags]


def find_faulty_tag(seed_tags, mut_tags):
    """Compares seed tags vs mutated tags to find the one that changed."""
    # Find tags in mutated that do not exist in the seed
    diff = [t for t in mut_tags if t not in seed_tags]
    return diff[0] if diff else None


def select_smart_negative(potential_anchors):
    """Selects an anchor, prioritizing tags with classes over bare tags."""
    if not potential_anchors:
        return "FALLBACK_ANCHOR"

    # Priority 1: Tags with 'class' or 'className'
    classed_tags = [t for t in potential_anchors if "class" in t.lower()]

    if classed_tags:
        return random.choice(classed_tags)

    # Priority 2: Bare tags (last resort)
    return random.choice(potential_anchors)


def enrich_manifest():
    if not os.path.exists(MANIFEST_PATH):
        print(f"❌ Manifest not found at {MANIFEST_PATH}")
        return

    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    print(f"🚀 Starting Smart Enrichment...")

    for entry in manifest:
        if entry.get("status") != "pending_code_extraction":
            continue

        try:
            category, batch, component = entry["id"].split("_", 2)
        except ValueError:
            continue

        seed_path = os.path.join(SEED_DIR, f"{category}.jsx")
        mut_file_name = f"Layering_Batch_{batch}.jsx"
        mutated_path = os.path.join(MUTATED_DIR, category, mut_file_name)

        if not os.path.exists(mutated_path) or not os.path.exists(seed_path):
            continue

        # Load both files to find the diff
        with open(seed_path, "r", encoding="utf-8") as f:
            seed_text = f.read()
        with open(mutated_path, "r", encoding="utf-8") as f:
            mut_text = f.read()

        # Extract bodies
        seed_match = re.search(COMPONENT_REGEX.format(comp_name=component), seed_text, re.MULTILINE)
        mut_match = re.search(COMPONENT_REGEX.format(comp_name=component), mut_text, re.MULTILINE)

        if not seed_match or not mut_match:
            print(f"⚠️ Regex failed to find component {component} in {mut_file_name}")
            continue

        seed_tags = extract_tags(seed_match.group(1))
        mut_tags = extract_tags(mut_match.group(1))

        # 1. POSITIVE NODE: Use diffing to be 100% sure we have the mutated tag
        positive_node = find_faulty_tag(seed_tags, mut_tags)

        if not positive_node:
            print(f"⚠️ No diff found for {entry['id']} - check if mutation was applied.")
            continue

        # 2. NEGATIVE NODE: Weighted random selection
        potential_anchors = [t for t in mut_tags if t != positive_node]
        negative_node = select_smart_negative(potential_anchors)

        # 3. Update and Atomic Save
        entry["positive_node"] = positive_node
        entry["negative_node"] = negative_node
        entry["status"] = "ready_for_ollama"

        with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=4, ensure_ascii=False)

        print(f"✅ Enriched {entry['id']}")


if __name__ == "__main__":
    enrich_manifest()