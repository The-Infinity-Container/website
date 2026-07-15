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

**Styling (enforced by component):**
- Font: Gordon (uppercase)
- Size: 28px
- Letter spacing: 0.42px
- Color: text-tic-dark-grey
- Margin bottom: 60px

Do NOT manually style section labels with inline styles or classes — use this component.

### Body Paragraph Text
All body paragraphs (Noto Serif, regular text) should be:
- Size: 28px
- Font: Noto Serif (font-[family-name:var(--font-noto-serif)])
- Line height: 1.8 or 1.85 depending on context

**Exception:** Italic text and small text (in boxes, captions, etc.) may have different sizes.

### Dive Deeper Links
All "Dive Deeper" links should be:
- Size: 24px
- Font: Gordon (uppercase)
- Letter spacing: tracking-[0.12em]
- Color: text-tic-cobalt
- Underline: `<span className="border-b-[1.5px] border-tic-cobalt pb-[3px] inline-block">text →</span>` 
  - The span with `inline-block` ensures the underline only extends as far as the content, not beyond the arrow
