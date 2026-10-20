# bam-boozled

A single-file, offline SAM FLAG explainer, in case the Broad's Picard
[flag explainer](https://broadinstitute.github.io/picard/explain-flags.html) ever goes down.

**Live page: <https://kuod.github.io/bam-boozled/>**

## Usage

Use the [live page](https://kuod.github.io/bam-boozled/), or open `index.html` in a
browser (no build step, no dependencies).

- Type a flag as decimal (`83`) or hex (`0x53`), or tick the checkboxes.
- Valid range is 0 to 65535 (0xFFFF); anything else is shown as invalid.
- "Switch to Mate" swaps the read/mate bits (0x4/0x8, 0x10/0x20, 0x40/0x80).
- Contradictory combinations (e.g. proper pair + mate unmapped) show warnings.

Spec: [SAMv1](https://samtools.github.io/hts-specs/SAMv1.pdf).

## Tests

Requires Node 18+ (no npm install needed):

```
node --test
```
