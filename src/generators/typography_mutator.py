import os
import re
import random

# CORRECTED PATTERN: Added lg, xl, and specifically 2xl-9xl
TYPO_PATTERN = r'\b(?:text-(?:xs|sm|base|lg|xl|[2-9]xl)|font-(?:thin|extralight|light|normal|medium|semibold|bold|extrabold|black)|uppercase|lowercase|capitalize|normal-case)\b'

# Define Comprehensive Mutation Families
FAMILIES = {
    "size": [
        "text-xs", "text-sm", "text-base", "text-lg", "text-xl",
        "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl",
        "text-7xl", "text-8xl", "text-9xl"
    ],
    "weight": [
        "font-thin", "font-extralight", "font-light", "font-normal",
        "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black"
    ],
    "case": [
        "uppercase", "lowercase", "capitalize", "normal-case"
    ]
}

LAST_STRATEGY = "unknown"


def apply_typo_mutation(original_class):
    """
    Applies a single typography bug using a strategy-based approach:
    1. Subtle: Shifts to the immediate neighbor (e.g., text-sm -> text-base).
    2. Extreme: Swaps to the opposite end (e.g., text-xs -> text-9xl).
    3. Chaos: Randomly picks any other member in the family.
    """
    global LAST_STRATEGY

    current_family = None
    members = []
    for family_name, family_members in FAMILIES.items():
        if original_class in family_members:
            current_family = family_name
            members = family_members
            break

    if not current_family:
        return original_class

    # Strategy weights to ensure diversity in the hybrid dataset [cite: 683, 684]
    choice = random.choices(
        ['subtle', 'extreme', 'chaos'],
        weights=[40, 20, 40],  # Favoring subtle and chaos for harder retrieval tests
        k=1
    )[0]

    LAST_STRATEGY = choice
    idx = members.index(original_class)

    if choice == 'subtle':
        # Shift index by 1 (up or down) to test fine-grained perception [cite: 22, 156]
        shift = random.choice([-1, 1])
        new_idx = max(0, min(len(members) - 1, idx + shift))
        if new_idx == idx:  # Handle edges
            new_idx = idx - shift
        return members[new_idx]

    elif choice == 'extreme':
        # Swap to opposite end to simulate obvious layout defects [cite: 87]
        return members[0] if idx > (len(members) / 2) else members[-1]

    else:  # 'chaos'
        alternatives = [m for m in members if m != original_class]
        return random.choice(alternatives)


def mutate_typography_library(input_file, output_dir, num_files):
    """
    Implements a single-point mutation per component to create Training Triplets[cite: 705, 721].
    """
    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found.")
        return

    with open(input_file, 'r') as f:
        full_content = f.read()

    parts = re.split(r'(export const )', full_content)
    header = parts[0]
    component_blocks = []
    for i in range(1, len(parts), 2):
        component_blocks.append(parts[i] + parts[i + 1])

    for batch_idx in range(1, num_files + 1):
        mutated_blocks = []
        for block in component_blocks:
            matches = list(re.finditer(TYPO_PATTERN, block))
            if matches:
                target = random.choice(matches)
                start, end = target.span()
                original_val = target.group(0)
                mutated_val = apply_typo_mutation(original_val)

                block = block[:start] + mutated_val + block[end:]

                name_match = re.search(r'const\s+(\w+)', block)
                comp_name = name_match.group(1) if name_match else "Unknown"
                print(f"🔹 [{comp_name:50}] {LAST_STRATEGY.upper():10} | {original_val} -> {mutated_val}")

            mutated_blocks.append(block)

        file_id = f"Typography_Batch_{batch_idx:02}"
        with open(os.path.join(output_dir, f"{file_id}.jsx"), 'w') as f:
            f.write(header + "".join(mutated_blocks))

    print(f"✅ Generated {num_files} mutated files in {output_dir}")


if __name__ == "__main__":
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    SEED_PATH = os.path.join(BASE_DIR, "data", "01_raw_seeds", "typography.jsx")
    OUT_DIR = os.path.join(BASE_DIR, "data", "02_mutated_code", "typography")
    os.makedirs(OUT_DIR, exist_ok=True)
    mutate_typography_library(SEED_PATH, OUT_DIR, num_files=50)
