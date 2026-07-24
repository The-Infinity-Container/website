@AGENTS.md

## Component Standards

### SectionLabel
Use `<SectionLabel>` (`@/components/SectionLabel`) for every section header (e.g., "The work", "The gap", "Why capacities", etc.) — import it, don't hand-copy the styling.

**Usage:**
```tsx
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";

<section>
  <SectionLabel>Section name here</SectionLabel>
  <SectionHeading>Heading</SectionHeading>
  {/* ... */}
</section>
```

**Styling (baked into the component):**
- Font: Gordon (uppercase)
- Size: 25px
- Letter spacing: 0.42px
- Color: text-tic-dark-grey by default — pass `color="text-tic-yellow"` (or another single color class) on dark/saturated backgrounds where contrast requires it. Never size/spacing overrides.
- Margin bottom: 60px

### Section Heading (h2)
Use `<SectionHeading>` (`@/components/SectionHeading`) for the heading directly under a section label:
- Font: Gordon, uppercase, `font-normal`
- Size: `clamp(21px, 3.24vw, 34px)`
- Letter spacing: `tracking-[0.02em]`
- Line height: `leading-[1.4]`
- Margin bottom: 28px (override via the `marginBottom` prop, not a `mb-*` class, so it doesn't fight Tailwind's class-order specificity)
- `color` prop works the same single-slot way as SectionLabel's; `className` is for pure layout additions (e.g. `max-w-[820px]`) that don't collide with the recipe

This component always renders an `<h2>` — even for sections that previously used `<h3>`, for visual consistency.

### Body Paragraph Text
Use `<BodyText>` (`@/components/BodyText`) for body paragraphs (Noto Serif, regular text):
- Size: 23px
- Font: Noto Serif (font-[family-name:var(--font-noto-serif)])
- Line height: 37px
- Color and margin are intentionally left out of the component — pass them via `className` (e.g. `className="text-[#222] mb-6"`)

**Exception:** Italic text and small text (in boxes, captions, etc.) may have different sizes — don't use `BodyText` for those, keep them hand-styled as before.

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
