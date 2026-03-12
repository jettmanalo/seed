import os
import re
import random

# Pattern for Tailwind spacing (focus on Padding/Margin only)
SPACING_PATTERN = r'\b(?:p|px|py|pt|pb|pl|pr|ps|pe|m|mx|my|mt|mb|ml|mr|ms|me)-(?!auto)(\d+(?:\.\d+)?)\b'
LAST_STRATEGY = "unknown"


def format_value(val):
    """
    Normalizes any float to a whole-number string for Tailwind compatibility.
    Example: 2.5 -> '3', 20.0 -> '20', 18.65 -> '19'
    """
    return str(int(round(float(val))))


def apply_mutation(utility_string):
    """
    Applies a single visual bug based on weighted probabilities.
    Weighted Order: 1. directional_swap (40%), 2. swap_type (30%), 3. scale (20%), 4. zero (10%)

    Sample Variations:
    - directional_swap: 'pt-4' -> 'pb-4', 'ml-2' -> 'mt-2'
    - swap_type: 'p-4' -> 'm-4', 'mx-2' -> 'px-2'
    - scale: 'p-2' -> 'p-16', 'mt-10' -> 'mt-1'
    - zero: 'mb-4' -> 'mb-0', 'pl-2' -> 'pl-0'
    """
    global LAST_STRATEGY
    match = re.match(r'([a-z-]+)(\d+(?:\.\d+)?)', utility_string)
    if not match: return utility_string

    prefix, value = match.groups()

    # Handle 'auto' cases safely
    if value == 'auto':
        v = 0.0  # Default to 0 for math, or handle as a string
    else:
        v = float(value)

    # Probability weighting to favor complex directional/type swaps
    choice = random.choices(
        ['directional_swap', 'scale', 'zero'],
        weights=[50, 35, 15],
        k=1
    )[0]

    LAST_STRATEGY = choice

    if choice == 'zero':
        return f"{prefix}0"

    elif choice == 'scale':
        # Scale: multiplier is now a whole number (5-10)
        multiplier = random.randint(5, 10)
        base_v = v if v > 0 else 1
        new_val = base_v * multiplier if v < 8 else 1
        return f"{prefix}{format_value(new_val)}"


    elif choice == 'directional_swap':
        directions = ['t', 'b', 'r', 'l', 's', 'e', 'x', 'y']
        # Define directional "families" to prevent redundant swaps
        horizontal = {'x', 'r', 'l', 's', 'e'}
        vertical = {'y', 't', 'b'}

        # Basic opposites
        forbidden_map = {'r': 'e', 'e': 'r', 'l': 's', 's': 'l'}

        # 1. Handle generic p- and m-
        if prefix in ['p-', 'm-']:
            new_dir = random.choice(directions)
            new_prefix = prefix[0] + new_dir + '-'
            return f"{new_prefix}{format_value(v)}"

        # 2. Identify current direction
        current_dir = None
        for d in directions:
            if prefix.endswith(f"{d}-") or f"-{d}-" in prefix:
                current_dir = d
                break

        if current_dir:
            # Build the set of invalid directions
            invalid_swaps = {current_dir}
            # Add the logical opposite (e.g., if 'r', add 'e')
            if current_dir in forbidden_map:
                invalid_swaps.add(forbidden_map[current_dir])

            # NEW: Prevent Axis-Redundancy
            # If current is x, r, l, s, or e -> block all of them
            if current_dir in horizontal:
                invalid_swaps.update(horizontal)
            # If current is y, t, or b -> block all of them
            elif current_dir in vertical:
                invalid_swaps.update(vertical)
            # Filter the possible new directions
            possible_new = [d for d in directions if d not in invalid_swaps]

            if not possible_new:
                return f"{prefix}0"  # Safety fallback

            new_dir = random.choice(possible_new)
            new_prefix = prefix.replace(f"{current_dir}-", f"{new_dir}-")

            return f"{new_prefix}{format_value(v)}"

        return f"{prefix}0"

    return utility_string


def mutate_library_batch(input_file, output_dir, num_files):
    """
    Iterates through JSX components and performs a single-point mutation per component.
    Saves results into individual batch files for visual rendering.
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
            matches = list(re.finditer(SPACING_PATTERN, block))
            if matches:
                target = random.choice(matches)
                start, end = target.span()
                mutated_val = apply_mutation(target.group(0))
                block = block[:start] + mutated_val + block[end:]

                # For logging
                name_match = re.search(r'const\s+(\w+)', block)
                comp_name = name_match.group(1) if name_match else "Unknown"
                original_val = target.group(0)
                strategy_label = LAST_STRATEGY
                if mutated_val.endswith('-0') and LAST_STRATEGY != 'zero':
                    strategy_label = f"{LAST_STRATEGY} (FALLBACK TO 0)"

                print(f"🔹 [{comp_name:30}] {strategy_label.upper():25} | {original_val} -> {mutated_val}")
            mutated_blocks.append(block)

        file_id = f"Mut_Batch_{batch_idx:02}"
        with open(os.path.join(output_dir, f"{file_id}.jsx"), 'w') as f:
            f.write(header + "".join(mutated_blocks))

        print(f"✅ Generated {file_id}.jsx with weighted probabilities.")


if __name__ == "__main__":
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    SEED_PATH = os.path.join(BASE_DIR, "data", "01_raw_seeds", "spacing.jsx")
    OUT_DIR = os.path.join(BASE_DIR, "data", "02_mutated_code", "spacing")
    os.makedirs(OUT_DIR, exist_ok=True)
    mutate_library_batch(SEED_PATH, OUT_DIR, num_files=50)
