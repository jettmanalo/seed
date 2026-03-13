import json
import os


def transform_manifest_strict():
    input_file = 'manifests/layout_v1.json'
    output_file = '00_dataset/layout_manifest.json'

    # The 5 strict variations we expect per entry to hit exactly 5000
    EXPECTED_TONES = ["critical", "frustrated", "descriptive", "comparative", "concise"]

    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found.")
        return

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    transformed_data = []
    print(f"🚀 Processing {len(data)} original entries... Enforcing 5x multiplier.")

    # Iterate through the 1000 original entries
    for entry in data:
        text_anchors = entry.get('text_anchor', {})
        entry_id = entry.get("id", "unknown_id")

        # Force exactly 5 iterations for EVERY entry
        for tone_key in EXPECTED_TONES:
            tone_text = ""  # Default fallback

            # If it's a properly formatted dictionary, try to get the specific tone
            if isinstance(text_anchors, dict):
                tone_text = text_anchors.get(tone_key, "")

            # If the original entry was just a flat string, reuse that string for all 5
            elif isinstance(text_anchors, str):
                tone_text = text_anchors

            # Create the Triplet ensuring the ID is unique
            transformed_data.append({
                "id": f"{entry_id}_{tone_key}",
                "image_anchor": entry.get("image_anchor"),
                "text_anchor": tone_text,
                "positive_node": entry.get("positive_node"),
                "negative_node": entry.get("negative_node")
            })

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(transformed_data, f, indent=2)

    print(f"✅ Success! Enforced strict generation of {len(transformed_data)} flattened entries.")


if __name__ == "__main__":
    transform_manifest_strict()