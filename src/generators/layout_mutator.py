import os
import re
import random

# Expanded Pattern: Captures Display, Direction, Wrap, Alignment, Distribution, Grid Structure, Spans, and Gaps
LAYOUT_PATTERN = r'\b(?:flex|inline-flex|grid|block|flex-row(?:-reverse)?|flex-col(?:-reverse)?|flex-(?:no)?wrap(?:-reverse)?|items-(?:start|end|center|baseline|stretch)|justify-(?:start|end|center|between|around|evenly)|content-(?:start|end|center|between|around|evenly)|grid-cols-(?:\d+|none)|grid-rows-(?:\d+|none)|col-span-(?:\d+|full)|row-span-(?:\d+|full)|gap(?:-[xy])?-(?:\d+))\b'


def apply_layout_mutation(utility):
    """
    Applies a HIGH-CONTRAST structural layout bug based on the detected utility category.
    Prioritises opposition-based and extreme mutations to guarantee visually detectable defects.
    Returns (new_utility, label). The mutated value is guaranteed never equal to the original.
    """

    # 1. Alignment Flip (Cross Axis) — strict opposition
    if utility.startswith('items-'):
        opposites = {
            'items-start': 'items-end',
            'items-end': 'items-start',
            'items-center': 'items-stretch',
            'items-baseline': 'items-end',
            'items-stretch': 'items-start',
        }
        new_val = opposites.get(utility, 'items-end')
        return new_val, "ALIGNMENT_FLIP"

    # 2. Distribution Collapsing (Main Axis)
    #    Space-distributing values → clump at start; clumping values → flip to opposite end
    elif utility.startswith('justify-'):
        collapsers = {
            'justify-between': 'justify-start',
            'justify-around': 'justify-start',
            'justify-evenly': 'justify-center',
        }
        if utility in collapsers:
            return collapsers[utility], "DISTRIBUTION_COLLAPSE"
        opposites = {
            'justify-start': 'justify-end',
            'justify-end': 'justify-start',
            'justify-center': 'justify-between',
        }
        new_val = opposites.get(utility, 'justify-start')
        return new_val, "DISTRIBUTION_ERROR"

    # 3. Direction Flip (Flex) — row ↔ col, preserving reverse modifier
    elif utility.startswith('flex-row') or utility.startswith('flex-col'):
        opposites = {
            'flex-row': 'flex-col',
            'flex-col': 'flex-row',
            'flex-row-reverse': 'flex-col-reverse',
            'flex-col-reverse': 'flex-row-reverse',
        }
        new_val = opposites.get(utility, 'flex-col')
        return new_val, "DIRECTION_FLIP"

    # 4. Wrap Breaking — force nowrap to cause overflow; reverse wrapping if already nowrap
    elif utility.startswith('flex-wrap') or utility == 'flex-nowrap':
        if utility == 'flex-nowrap':
            return 'flex-wrap', "WRAP_FORCED"
        # flex-wrap or flex-wrap-reverse → enforce overflow-causing nowrap
        return 'flex-nowrap', "WRAP_BREAK"

    # 5. Display Type Swap — structural context change
    elif utility in ['flex', 'inline-flex', 'grid', 'block']:
        opposites = {
            'flex': 'block',
            'block': 'flex',
            'inline-flex': 'grid',
            'grid': 'flex',
        }
        new_val = opposites.get(utility, 'block')
        return new_val, "DISPLAY_SWAP"

    # 6. Multi-line Content Distribution Collapsing
    elif utility.startswith('content-'):
        collapsers = {
            'content-between': 'content-start',
            'content-around': 'content-start',
            'content-evenly': 'content-center',
        }
        if utility in collapsers:
            return collapsers[utility], "CONTENT_COLLAPSE"
        opposites = {
            'content-start': 'content-end',
            'content-end': 'content-start',
            'content-center': 'content-between',
        }
        new_val = opposites.get(utility, 'content-start')
        return new_val, "CONTENT_DISTRIBUTION_ERROR"

    # 7. Grid Structure Sabotage — collapse to 1 column (stacking) or explode to 12 (extreme shrink)
    elif utility.startswith('grid-cols-') or utility.startswith('grid-rows-'):
        prefix = 'grid-cols-' if 'cols' in utility else 'grid-rows-'
        extremes = [f'{prefix}1', f'{prefix}12']
        candidates = [v for v in extremes if v != utility]
        new_val = random.choice(candidates)
        return new_val, "GRID_STRUCTURE_SABOTAGE"

    # 8. Grid Span Bugs — collapse to 1 or overflow to full
    elif utility.startswith('col-span-') or utility.startswith('row-span-'):
        prefix = 'col-span-' if 'col' in utility else 'row-span-'
        if utility == f'{prefix}full':
            return f'{prefix}1', "SPAN_COLLAPSE"
        if utility == f'{prefix}1':
            return f'{prefix}full', "SPAN_OVERFLOW"
        # Any other value collapses to 1 for a clearly visible defect
        return f'{prefix}1', "SPAN_COLLAPSE"

    # 9. Extreme Gap Shifts — zero-gap or massive-gap, never an adjacent step
    elif utility.startswith('gap'):
        if utility.startswith('gap-x-'):
            extremes = ['gap-x-0', 'gap-x-16']
        elif utility.startswith('gap-y-'):
            extremes = ['gap-y-0', 'gap-y-16']
        else:
            extremes = ['gap-0', 'gap-16']
        candidates = [v for v in extremes if v != utility]
        new_val = random.choice(candidates)
        return new_val, "SPACING_BREAK"

    return utility, "NO_CHANGE"


def mutate_layout_batch(input_file, output_dir, num_files=25):
    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found.")
        return

    # Use encoding utf-8 for cross-platform research compatibility
    with open(input_file, 'r', encoding='utf-8') as f:
        full_content = f.read()

    # Split components by the export statement
    parts = re.split(r'(export const )', full_content)
    header = parts[0]
    component_blocks = []
    for i in range(1, len(parts), 2):
        component_blocks.append(parts[i] + parts[i + 1])

    print(f"🔍 Found {len(component_blocks)} components. Mutating for {num_files} batches...\n")

    for batch_idx in range(1, num_files + 1):
        mutated_blocks = []
        print(f"--- Processing Batch {batch_idx:02} ---")

        for block in component_blocks:
            comp_match = re.search(r'export const (\w+)', block)
            comp_name = comp_match.group(1) if comp_match else "Unknown"

            # Find all available layout utilities in the current component
            matches = list(re.finditer(LAYOUT_PATTERN, block))

            if matches:
                # Select a random single point of failure
                target = random.choice(matches)
                original_val = target.group(0)
                start, end = target.span()

                # Apply mutation logic
                mutated_val, mutation_label = apply_layout_mutation(original_val)

                # Reconstruct the component block with the mutation
                block = block[:start] + mutated_val + block[end:]
                # Log using the requested research format
                print(f"  ✅ {comp_name:20} | {mutation_label:25} | {original_val} -> {mutated_val}")
            else:
                print(f"  ⚠️ {comp_name:20} | NO_LAYOUT_CLASSES        | -")

            mutated_blocks.append(block)

        file_id = f"Layout_Batch_{batch_idx:02}"
        output_path = os.path.join(output_dir, f"{file_id}.jsx")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(header + "".join(mutated_blocks))
        print(f"💾 Saved to: {output_path}\n")


if __name__ == "__main__":
    # Standard Framework Pathing
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    SEED_PATH = os.path.join(BASE_DIR, "data", "01_raw_seeds", "layout.jsx")
    OUT_DIR = os.path.join(BASE_DIR, "data", "02_mutated_code", "layout")

    os.makedirs(OUT_DIR, exist_ok=True)
    # Generate 25 batches of mutated code
    mutate_layout_batch(SEED_PATH, OUT_DIR, num_files=50)
