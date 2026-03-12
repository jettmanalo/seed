import json
import os


def transform_manifest():
    input_file = 'typography_v1.json'
    output_file = 'typography_manifest.json'

    # 1. Check if the source file exists
    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found in this directory.")
        return

    # 2. Load the original data
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    transformed_data = []

    print(f"🚀 Processing {len(data)} entries...")

    # 3. Iterate and Flatten
    for entry in data:
        # Extract the dictionary of tones
        text_anchors = entry.get('text_anchor', {})

        # Loop through each tone (critical, frustrated, etc.)
        for tone_key, tone_text in text_anchors.items():
            # Create a new dictionary for this specific tone
            new_entry = {
                "id": entry.get("id"),
                "image_anchor": entry.get("image_anchor"),
                "text_anchor": tone_text,  # Now a string, not a dict
                "positive_node": entry.get("positive_node"),
                "negative_node": entry.get("negative_node")
            }
            transformed_data.append(new_entry)

    # 4. Save the new file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(transformed_data, f, indent=2)

    print(f"✅ Success! Created {output_file} with {len(transformed_data)} entries.")


if __name__ == "__main__":
    transform_manifest()
