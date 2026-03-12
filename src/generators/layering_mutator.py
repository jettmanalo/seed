import os
import re
import random

# Updated Pattern: Now captures standard z-index (z-10) and arbitrary values (z-[999], z-[-1])
LAYERING_PATTERN = r'\b(?:z-(?:\d+|\[-?\d+\])|relative|absolute|fixed|sticky)\b'


def apply_layering_mutation(utility):
    """
    Breaks the stacking order and returns (new_utility, mutation_label).
    Expands z-index mutation space for diverse UI stacking-order bugs.
    """

    # Expanded Z-index Pool for diverse mutation behaviors
    z_pool = [
        "z-[-10]", "z-[-1]", "z-0",
        "z-10", "z-20", "z-30", "z-40", "z-50",
        "z-[1]", "z-[5]", "z-[100]", "z-[999]"
    ]

    # Mutation Group 1: Z-INDEX UTILITIES
    if utility.startswith('z-'):
        behavior = random.choice(['LOWER_LAYER', 'EXTREME_LAYER', 'RANDOM_LAYER_SWAP'])

        if behavior == 'LOWER_LAYER':
            # Force element behind others (0 or negative)
            choices = ["z-[-10]", "z-[-1]", "z-0"]
            new_val = random.choice([c for c in choices if c != utility])
            return new_val, "Z_INDEX_LOWER"

        elif behavior == 'EXTREME_LAYER':
            # Push element excessively high
            choices = ["z-[100]", "z-[999]"]
            new_val = random.choice([c for c in choices if c != utility])
            return new_val, "Z_INDEX_EXTREME"

        elif behavior == 'RANDOM_LAYER_SWAP':
            # Swap with any random value from the expanded pool
            new_val = random.choice([c for c in z_pool if c != utility])
            return new_val, "RANDOM_LAYER_SWAP"

    # Mutation Group 2: POSITION_BREAK
    elif utility in ['relative', 'absolute', 'fixed', 'sticky']:
        # Swapping position utilities breaks stacking contexts and layout flow
        choices = ['relative', 'static', 'absolute']
        new_val = random.choice([c for c in choices if c != utility])
        return new_val, "POSITION_BREAK"

    return utility, "NO_CHANGE"


def mutate_layering_batch(input_file, output_dir, num_files=25):
    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found.")
        return

    # Added encoding="utf-8" to handle special characters during read
    with open(input_file, 'r', encoding="utf-8") as f:
        full_content = f.read()

    # Split by component using framework standard
    parts = re.split(r'(export const )', full_content)
    header = parts[0]
    component_blocks = []
    for i in range(1, len(parts), 2):
        component_blocks.append(parts[i] + parts[i + 1])

    print(f"🔍 Found {len(component_blocks)} layering components. Generating {num_files} batches...\n")

    for batch_idx in range(1, num_files + 1):
        mutated_blocks = []
        print(f"--- Processing Batch {batch_idx:02} ---")

        for block in component_blocks:
            comp_match = re.search(r'export const (\w+)', block)
            comp_name = comp_match.group(1) if comp_match else "Unknown"

            matches = list(re.finditer(LAYERING_PATTERN, block))

            if matches:
                # Select exactly one target for single-point mutation
                target = random.choice(matches)
                original_val = target.group(0)
                start, end = target.span()

                # Apply mutation and retrieve descriptive label
                mutated_val, mutation_label = apply_layering_mutation(original_val)

                block = block[:start] + mutated_val + block[end:]
                # Research-standard Logger Output
                print(f"  ✅ {comp_name:25} | {mutation_label:20} | {original_val} -> {mutated_val}")
            else:
                print(f"  ⚠️ {comp_name:25} | NO_LAYERING_FOUND    | -")

            mutated_blocks.append(block)

        file_id = f"Layering_Batch_{batch_idx:02}"
        output_path = os.path.join(output_dir, f"{file_id}.jsx")

        # Added encoding="utf-8" to handle special characters during write
        with open(output_path, 'w', encoding="utf-8") as f:
            f.write(header + "".join(mutated_blocks))
        print(f"💾 Saved to: {output_path}\n")


if __name__ == "__main__":
    # Setup paths based on M-S2C-Framework structure [cite: 1, 4]
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    SEED_PATH = os.path.join(BASE_DIR, "data", "01_raw_seeds", "layering.jsx")
    OUT_DIR = os.path.join(BASE_DIR, "data", "02_mutated_code", "layering")

    os.makedirs(OUT_DIR, exist_ok=True)
    # Target batch count updated to 25
    mutate_layering_batch(SEED_PATH, OUT_DIR, num_files=50)