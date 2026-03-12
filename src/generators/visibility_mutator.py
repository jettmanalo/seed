import os
import re
import random

# Updated Pattern: Supports standard opacity, arbitrary decimal/percentage opacity,
# visibility states, and extended display types.
# NOTE: inline-block must appear before inline so the longer token matches first
#       (both share the 'inline' prefix and \b matches at the '-' boundary).
VISIBILITY_PATTERN = r'\b(?:opacity-(?:\d+|\[[\d.]+%?\])|visible|invisible|hidden|block|inline-block|inline|flex|grid|contents)\b'


def apply_visibility_mutation(utility):
    """
    Breaks visibility, contrast, or display logic and returns (new_utility, label).
    Produces high-contrast, research-grade defects with guaranteed visual impact.
    """

    # Threshold-breaking output pool for CONTRAST_DROP (hard cap at opacity-20)
    low_opacity_pool = ["opacity-0", "opacity-5", "opacity-10", "opacity-20"]

    # Full pool used to source RANDOM_OPACITY_SWAP candidates
    full_opacity_pool = [
        "opacity-0", "opacity-5", "opacity-10", "opacity-20", "opacity-25",
        "opacity-30", "opacity-40", "opacity-50", "opacity-60", "opacity-75", "opacity-90"
    ]

    def parse_opacity_value(u):
        """Return the numeric opacity on a 0–100 scale, or None if unparseable."""
        m = re.match(r'^opacity-(\d+)$', u)
        if m:
            return int(m.group(1))
        # Arbitrary values: opacity-[0.5] treated as fraction (×100); opacity-[50%] as integer
        m = re.match(r'^opacity-\[([\d.]+)%?\]$', u)
        if m:
            val = float(m.group(1))
            return int(val * 100) if val <= 1.0 else int(val)
        return None

    # ── Group 1: ARBITRARY OPACITY (e.g. opacity-[0.5], opacity-[85%]) ────────
    # Sabotage: force to near-zero to guarantee a stark contrast loss.
    if re.match(r'^opacity-\[[\d.]+%?\]$', utility):
        return random.choice(["opacity-[0]", "opacity-[0.05]"]), "CONTRAST_DROP"

    # ── Group 2: STANDARD OPACITY UTILITIES ──────────────────────────────────
    if utility.startswith('opacity-'):
        orig_val = parse_opacity_value(utility)
        behavior = random.choice(['CONTRAST_DROP', 'FULL_FADE', 'RANDOM_OPACITY_SWAP'])

        if behavior == 'CONTRAST_DROP':
            # Guard: if the original is already at or below the threshold (≤ 20),
            # a "contrast drop" would be imperceptible — escalate to FULL_FADE.
            if orig_val is not None and orig_val <= 20:
                return "opacity-0", "FULL_FADE"
            # Hard output cap: never above opacity-20, never identical to original.
            candidates = [c for c in low_opacity_pool if c != utility]
            return random.choice(candidates), "CONTRAST_DROP"

        elif behavior == 'FULL_FADE':
            # Absolute, unambiguous fade — always opacity-0.
            return "opacity-0", "FULL_FADE"

        elif behavior == 'RANDOM_OPACITY_SWAP':
            # Only accept a swap when the delta is ≥ 70 points (0–100 scale).
            # This ensures the visual difference is impossible to miss.
            if orig_val is not None:
                valid_swaps = [
                    c for c in full_opacity_pool
                    if c != utility and abs(parse_opacity_value(c) - orig_val) >= 70
                ]
                if valid_swaps:
                    return random.choice(valid_swaps), "RANDOM_OPACITY_SWAP"
            # No qualifying swap exists → fall back to maximum guaranteed change.
            return "opacity-0", "FULL_FADE"

    # ── Group 3: VISIBILITY STATES ────────────────────────────────────────────
    elif utility in ['visible', 'invisible']:
        behavior = random.choice(['STATE_FLIP', 'FORCE_HIDDEN'])

        if behavior == 'STATE_FLIP':
            # Direct, definitive state inversion.
            new_val = 'invisible' if utility == 'visible' else 'visible'
            return new_val, "STATE_FLIP"

        else:  # FORCE_HIDDEN
            # 'hidden' sets display:none — immune to any opacity overrides and
            # removes the element entirely from the visual flow.
            return "hidden", "FORCE_HIDDEN"

    # ── Group 4: DISPLAY TYPE UTILITIES ──────────────────────────────────────
    elif utility in ['block', 'inline', 'inline-block', 'flex', 'grid', 'contents', 'hidden']:
        if utility == 'hidden':
            # The only meaningful mutations for an already-hidden element.
            behavior = random.choice(['REVEAL_BUG', 'LAYOUT_BREAK'])
        else:
            # SUDDEN_HIDDEN (→ display:none) is the highest-impact defect;
            # weight it more heavily to prioritise complete visual removal.
            behavior = random.choices(
                ['SUDDEN_HIDDEN', 'LAYOUT_BREAK'],
                weights=[0.55, 0.45]
            )[0]

        if behavior == 'SUDDEN_HIDDEN':
            # Label only applied here — utility is guaranteed not to be 'hidden'.
            return "hidden", "SUDDEN_HIDDEN"

        elif behavior == 'REVEAL_BUG':
            # Force a hidden element visible — deliberate reveal defect.
            return "block", "REVEAL_BUG"

        else:  # LAYOUT_BREAK
            if utility in ['flex', 'grid']:
                # Switching a flex/grid container to inline or contents causes
                # all children to lose their layout context — maximum visual collapse.
                new_val = random.choice(['inline', 'contents'])
            elif utility == 'hidden':
                # For LAYOUT_BREAK on hidden: surface it with a non-default type
                # to distinguish from REVEAL_BUG (which always returns 'block').
                new_val = random.choice(['flex', 'inline-block'])
            else:
                display_types = ['block', 'inline', 'inline-block', 'flex', 'grid', 'contents']
                new_val = random.choice([c for c in display_types if c != utility])
            return new_val, "LAYOUT_BREAK"

    return utility, "NO_CHANGE"


def mutate_visibility_batch(input_file, output_dir, num_files=25):
    if not os.path.exists(input_file):
        print(f"❌ Error: {input_file} not found.")
        return

    # Use encoding="utf-8" to handle special characters in seed files
    with open(input_file, 'r', encoding="utf-8") as f:
        full_content = f.read()

    # Split by component using 'export const ' as the boundary
    parts = re.split(r'(export const )', full_content)
    header = parts[0]
    component_blocks = []
    for i in range(1, len(parts), 2):
        component_blocks.append(parts[i] + parts[i + 1])

    print(f"🔍 Found {len(component_blocks)} visibility components. Generating {num_files} batches...\n")

    for batch_idx in range(1, num_files + 1):
        mutated_blocks = []
        print(f"--- Processing Batch {batch_idx:02} ---")

        for block in component_blocks:
            comp_match = re.search(r'export const (\w+)', block)
            comp_name = comp_match.group(1) if comp_match else "Unknown"

            matches = list(re.finditer(VISIBILITY_PATTERN, block))
            if matches:
                # Target exactly one utility for a single-point failure
                target = random.choice(matches)
                original_val = target.group(0)
                start, end = target.span()

                mutated_val, mutation_label = apply_visibility_mutation(original_val)

                # Update the block with the mutated utility
                block = block[:start] + mutated_val + block[end:]
                # Log the mutation details in the required format
                print(f"  ✅ {comp_name:20} | {mutation_label:20} | {original_val} -> {mutated_val}")
            else:
                print(f"  ⚠️ {comp_name:20} | NO_VIS_CLASSES      | -")

            mutated_blocks.append(block)

        file_id = f"Visibility_Batch_{batch_idx:02}"
        output_path = os.path.join(output_dir, f"{file_id}.jsx")

        # Save mutated batch with utf-8 encoding
        with open(output_path, 'w', encoding="utf-8") as f:
            f.write(header + "".join(mutated_blocks))
        print(f"💾 Saved to: {output_path}\n")


if __name__ == "__main__":
    # Base directory and path setup
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    SEED_PATH = os.path.join(BASE_DIR, "data", "01_raw_seeds", "visibility.jsx")
    OUT_DIR = os.path.join(BASE_DIR, "data", "02_mutated_code", "visibility")

    os.makedirs(OUT_DIR, exist_ok=True)
    # Generate 25 batches as requested
    mutate_visibility_batch(SEED_PATH, OUT_DIR, num_files=50)