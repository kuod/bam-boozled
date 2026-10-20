# bam-boozled

A single-file, offline SAM FLAG explainer, in case the Broad's Picard
[flag explainer](https://broadinstitute.github.io/picard/explain-flags.html) ever goes down.

**Live page: <https://kuod.github.io/bam-boozled/>**

## Usage

Use the [live page](https://kuod.github.io/bam-boozled/), or open `index.html` in a
browser (no build step, no dependencies).

- Type a flag as decimal (`83`) or hex (`0x53`), or tick the checkboxes.
- Valid range is 0 to 65535 (0xFFFF); anything else is shown as invalid. Empty or
  whitespace-only input counts as 0. Bits above 0x800 (up to 0xFFFF) are accepted but
  have no defined flag, and are dropped as soon as a checkbox is toggled.
- "Switch to Mate" swaps the read/mate bits (0x4/0x8, 0x10/0x20, 0x40/0x80). The button
  label previews the swapped value (e.g. "Switch to Mate (83)") and the button is
  disabled while the input is invalid.
- Warnings cover contradictory combinations (e.g. proper pair + mate unmapped) and
  dependent bits set without "Read paired" (0x1): 0x2, 0x8, 0x20, 0x40, 0x80.

Spec: [SAMv1](https://samtools.github.io/hts-specs/SAMv1.pdf).

## Tests

Tested on Node 24; no npm install needed:

```
node --test
```
