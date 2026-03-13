import json
import os

def combine_and_sort_json_arrays():
    # 1. Define the exact 5 input files based strictly on our manuscript's scope
    input_files = [
        'layering_manifest.json',
        'layout_manifest.json',
        'spacing_manifest.json',
        'typography_manifest.json',
        'visibility_manifest.json'
    ]

    output_file = 'training_manifest.json'
    combined_data = []

    print("🚀 Starting the merging process for the strictly defined M-S2C master dataset...")

    # 2. Iterate through each file and combine
    for file_path in input_files:
        if not os.path.exists(file_path):
            print(f"⚠️ Warning: '{file_path}' not found in the directory. Skipping.")
            continue

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)

                # Defensive check: Ensure it is actually an array (list)
                if isinstance(data, list):
                    combined_data.extend(data)
                    print(f"✅ Successfully loaded {len(data)} entries from '{file_path}'.")
                else:
                    print(f"⚠️ Warning: '{file_path}' does not contain a JSON array. Skipping.")

        except json.JSONDecodeError as e:
            print(f"❌ JSON Formatting Error in '{file_path}': Line {e.lineno}, Column {e.colno}")

    # 3. Arrange the JSON alphabetically by the 'id' key
    print("\n🔤 Sorting the combined dataset alphabetically by 'id'...")
    # The lambda function extracts the 'id' string from each entry and converts it to lowercase for reliable A-Z sorting
    combined_data.sort(key=lambda x: x.get('id', '').lower())

    # 4. Save the combined data into our master file
    print(f"💾 Saving sorted dataset to '{output_file}'...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(combined_data, f, indent=2)

    print(f"🎉 Success! Master dataset created with a total of {len(combined_data)} sorted Triplet entries.")


if __name__ == "__main__":
    combine_and_sort_json_arrays()