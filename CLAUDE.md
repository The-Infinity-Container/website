@AGENTS.md

## Component Standards

### SectionLabel
Use `<SectionLabel>` for all section headers (e.g., "The work", "The gap", "Why capacities", etc.)

**Usage:**
```tsx
import SectionLabel from "@/components/SectionLabel";

<section>
  <SectionLabel>Section name here</SectionLabel>
  <h2>Heading</h2>
  {/* ... */}
</section>
```

**Styling:**
- Font: Gordon (uppercase)
- Size: 25px
- Letter spacing: 0.42px
- Color: text-tic-dark-grey (override the color, not the size/spacing, on dark or saturated backgrounds where contrast requires it)
- Margin bottom: 60px

In practice, pages replicate this styling manually (`style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}` + `font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase`) rather than importing the component — match these exact values whichever way you apply them.

### Section Heading (h2)
The heading directly under a section label should be:
- Font: Gordon, uppercase, `font-normal`
- Size: `clamp(21px, 3.24vw, 34px)`
- Letter spacing: `tracking-[0.02em]`
- Line height: `leading-[1.4]`
- Margin bottom: 28px

### Body Paragraph Text
All body paragraphs (Noto Serif, regular text) should be:
- Size: 23px
- Font: Noto Serif (font-[family-name:var(--font-noto-serif)])
- Line height: 37px

**Exception:** Italic text and small text (in boxes, captions, etc.) may have different sizes.

### Section Content Alignment
A section's label, heading, and any intro paragraph must sit flush against the same left edge as the content below them (a list, card grid, testimonial row, etc.) — never center them independently or leave them flush against a wider outer container while the content below is narrower/centered. Wrap the label + heading (+ intro paragraph, if any) in the same `max-w-[...] mx-auto` block used for the content beneath, so both share one left edge.

### Content Container Width
Default section content wrappers to `max-w-[1290px] mx-auto` (matching what-is-integration's dominant width) rather than narrower widths like 1080px or 680px — this keeps side margins consistent and minimal across pages. Narrower measures (e.g. for a single block of prose) should still nest inside this outer width rather than replacing it.

### Dive Deeper Links
All "Dive Deeper" links should be:
- Size: 24px
- Font: Gordon (uppercase)
- Letter spacing: tracking-[0.12em]
- Color: text-tic-cobalt
- Underline: `<span className="border-b-[1.5px] border-tic-cobalt pb-[3px] inline-block">text →</span>` 
  - The span with `inline-block` ensures the underline only extends as far as the content, not beyond the arrow
