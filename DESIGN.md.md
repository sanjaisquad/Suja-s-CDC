# Design System: Suja's Child Development Centre

> Adapted from `DESIGN-ecolevision-com.md` for **Suja's Child Development Centre** (`sujaschilddevelopmentcenter.in`), Perumbakkam, Chennai — expanded from a narrow single-accent palette into a multi-hue pediatric care system aligned with the centre's logo and therapy icons.

## 1. Visual Theme & Atmosphere

Warm, approachable, high-trust pediatric healthcare design built on soft rounded surfaces (`20px`–`100px` radii), generous whitespace, and clear visual hierarchy.

**Key Characteristics:**
- Clean sans-serif typography (`Plus Jakarta Sans` / `Inter` with `Labil Grotesk` fallback) for crisp readability across clinical and family-facing copy
- Crisp white (`#FFFFFF`) primary canvas paired with warm cream (`#FAF8F3`) and soft pastel tint surfaces (`#F0F9FF`, `#FFF0F7`, `#F2FAEC`, `#FFF9EB`)
- Multi-accent brand system anchored by **Sky Blue (`#0095DA`)** as primary brand/CTA color and **Vibrant Magenta (`#E91E8C`)**, **Leaf Green (`#5E9E2A`)**, and **Warm Gold (`#E08E00`)** for category highlights, tags, and interactive accents
- Soft tinted elevation shadows and accessible text contrast (`>= 4.5:1` for body copy and buttons)

---

## 2. Color Palette & Roles

### Core Brand & Surface Tokens
- **Primary Brand / CTA (`#0095DA`)** · `--color-primary`: Primary action buttons, active navigation indicators, links, and core brand highlights.
- **Secondary Accent (`#E91E8C`)** · `--color-accent-magenta`: Heart/care highlights, secondary CTAs, and behavioral/autism care accents.
- **Growth Accent (`#5E9E2A`)** · `--color-accent-green`: Occupational therapy, fine motor/sensory highlights, and WhatsApp/positive states.
- **Warmth Accent (`#E08E00`)** · `--color-accent-gold`: Early intervention badges, star highlights, and milestone callouts.
- **Background Primary (`#FFFFFF`)** · `--color-bg`: Main page canvas and card surfaces.
- **Background Warm (`#FAF8F3`)** · `--color-bg-warm`: Alternating page sections, form containers, and soft surface bands.

### Pastel Surface Tints (For Cards, Chips & Category Blocks)
- **Sky Tint (`#EBF7FD`)** · `--surface-sky`: Speech & communication cards and info callouts.
- **Rose Tint (`#FFF0F7`)** · `--surface-rose`: Care/support highlights and gentle notices.
- **Mint Tint (`#EEF8E6`)** · `--surface-mint`: Sensory, motor, and growth section cards.
- **Honey Tint (`#FFF7E6`)** · `--surface-honey`: Early intervention and milestone highlights.

### Text & Borders
- **Text Primary (`#0F2942`)** · `--color-text`: Deep navy-slate headings and primary body copy.
- **Text Muted (`#4A5D73`)** · `--color-text-secondary`: Subtitles, descriptions, and secondary labels.
- **Border Soft (`#E2E8F0`)** · `--color-border`: Input outlines, subtle dividers, and card borders.
- **Border Warm (`#EADFC8`)** · `--color-border-warm`: Borders on warm/cream surfaces.

### Full Expanded Palette

| # | Hex | CSS Variable | Role | Contrast / Usage |
|---|---|---|---|---|
| 1 | `#FFFFFF` | `--color-bg` | Primary Canvas | Main background; pair with `#0F2942` text |
| 2 | `#FAF8F3` | `--color-bg-warm` | Secondary Surface | Alternating bands & form panels; pair with `#0F2942` |
| 3 | `#0F2942` | `--color-text` | Primary Ink | High-contrast headings, body text, and dark pill buttons |
| 4 | `#4A5D73` | `--color-text-secondary` | Secondary Ink | Captions, subheadings, and supporting copy |
| 5 | `#0095DA` | `--color-primary` | Primary Accent | Main CTAs, active tabs, and links (use white `#FFFFFF` text) |
| 6 | `#E91E8C` | `--color-accent-magenta` | Care Accent | Secondary highlights & family-care accents |
| 7 | `#5E9E2A` | `--color-accent-green` | Growth Accent | Therapy/motor accents & WhatsApp CTA (`#25D366` / `#1E8E3E`) |
| 8 | `#E08E00` | `--color-accent-gold` | Warmth Accent | Star/milestone accents & early intervention highlights |
| 9 | `#EBF7FD` | `--surface-sky` | Soft Blue Tint | Light card fill; pair with `#0F2942` or `#006FA3` |
| 10 | `#FFF0F7` | `--surface-rose` | Soft Pink Tint | Light card fill; pair with `#0F2942` or `#A80D62` |
| 11 | `#EEF8E6` | `--surface-mint` | Soft Green Tint | Light card fill; pair with `#0F2942` or `#3E6B1B` |
| 12 | `#FFF7E6` | `--surface-honey` | Soft Gold Tint | Light card fill; pair with `#0F2942` or `#8A5600` |
| 13 | `#E2E8F0` | `--color-border` | Neutral Border | Form inputs, dividers, and hairline borders |

---

## 3. Typography Rules

- **Primary Font Stack:** `'Plus Jakarta Sans', 'Inter', 'Labil Grotesk', system-ui, -apple-system, sans-serif`
- **Display / Hero Accent:** Bold weight (`700`–`800`) with tight display tracking (`-0.02em`) and readable line heights (`1.15`–`1.6`).

### Type Scale

| Token | Size | Weight | Line Height | Suggested Usage |
|---|---|---|---|---|
| Display | `56px` (desktop) / `36px` (mobile) | `800` | `1.12` | Hero headline |
| H1 | `42px` | `700` | `1.2` | Page title |
| H2 | `32px` | `700` | `1.25` | Major section headings |
| H3 | `22px` | `700` | `1.35` | Service card & sub-section titles |
| H4 | `18px` | `600` | `1.4` | Sub-item titles & group headers |
| Body L | `18px` | `400` | `1.6` | Hero subtitle & lead paragraphs |
| Body | `16px` | `400` | `1.6` | Standard paragraphs & form labels |
| Small / Caption | `14px` | `500` | `1.5` | Pills, helper text, badges, and footer notes |

---

## 4. Component Stylings

```css
:root {
  --color-bg: #FFFFFF;
  --color-bg-warm: #FAF8F3;
  --color-text: #0F2942;
  --color-text-secondary: #4A5D73;
  --color-primary: #0095DA;
  --color-primary-hover: #007BB5;
  --color-accent-magenta: #E91E8C;
  --color-accent-green: #5E9E2A;
  --color-accent-gold: #E08E00;
  --surface-sky: #EBF7FD;
  --surface-rose: #FFF0F7;
  --surface-mint: #EEF8E6;
  --surface-honey: #FFF7E6;
  --color-border: #E2E8F0;
  --color-border-warm: #EADFC8;
  --radius-card: 28px;
  --radius-sm: 16px;
  --radius-pill: 9999px;
  --shadow-card: 0 10px 30px rgba(15, 41, 66, 0.06);
  --shadow-soft: 0 4px 16px rgba(15, 41, 66, 0.05);
}

.btn-primary {
  background: var(--color-primary);
  color: #FFFFFF;
  border-radius: var(--radius-pill);
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-secondary-magenta {
  background: var(--color-accent-magenta);
  color: #FFFFFF;
  border-radius: var(--radius-pill);
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.btn-outline {
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-pill);
  padding: 13px 26px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn-outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 28px;
  box-shadow: var(--shadow-card);
}