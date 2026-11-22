# Suja's Child Development Centre — Official Website

Responsive, modern, and compassionate static website for **Suja's Child Development Centre (SCDC)**, Perumbakkam, Chennai, led by **Dr. J. Jansirani, B.O.T.**

Built following the design principles of **Ecolevision School** (`ecolevision.com`) — incorporating fluid responsive grids, generous rounded surfaces (`28px` / `9999px`), bold high-contrast typography, playful multi-accent color palette, subtle organic floating shapes, rotated card layouts, and zero-backend consultation redirection via WhatsApp & Email.

---

## 🎨 Design System & Palette

- **Primary Brand / CTA:** Sky Blue (`#0095DA`)
- **Secondary Accent:** Vibrant Magenta (`#E91E8C`)
- **Growth Accent:** Leaf Green (`#5E9E2A`)
- **Warmth Accent:** Warm Gold (`#E08E00`)
- **Surfaces:** Crisp White (`#FFFFFF`) & Warm Cream (`#FAF8F3`)
- **Pastel Tints:** `--surface-sky` (`#EBF7FD`), `--surface-rose` (`#FFF0F7`), `--surface-mint` (`#EEF8E6`), `--surface-honey` (`#FFF7E6`)
- **Text & Ink:** Deep Navy-Slate (`#0F2942`) and Secondary Muted (`#4A5D73`)
- **Font Stack:** `'Plus Jakarta Sans', system-ui, sans-serif`

---

## 🚀 Key Features

1. **Sticky Top Navbar & Mobile Action Bar:**
   - Desktop: Blurred floating glass header with logo, active link indicators, Contact Us outline button, and solid Book Consultation button.
   - Mobile: Fullscreen curtain menu (`clip-path` animation) + 4-tab sticky bottom action bar (Book, WhatsApp, Call, Locate).

2. **Ecolevision-Style Hero Section:**
   - Oversized headline with multi-hue brand highlights.
   - Doctor credentials eyebrow badge.
   - 3 Playful angled cards (`rotate(-3.5deg)`, `rotate(2deg)`, `rotate(-2deg)`) with interactive hover spring physics (`cubic-bezier(0.34, 1.56, 0.61, 1.41)`).

3. **Alternating 2-Column Core Service Sections:**
   - **Section A:** Occupational Therapy & Sensory Integration
   - **Section B:** Speech & Language Therapy
   - **Section C:** Early Intervention & Neuro Developmental Therapy (0–6 years)
   - **Section D:** Behavioural Modification & Special Education

4. **Complete Care Overview (3-Column Grid):**
   - Specialized Therapies & Services (10 items)
   - Conditions We Support (10 items)
   - Signs to Reach Us (8 items)

5. **Official Centre Board Showcase:**
   - Authentic clinic board with interactive lightbox modal zoom.

6. **Zero-Backend WhatsApp & Email Consultation Engine:**
   - Client-side validation for required fields.
   - **WhatsApp (`#25D366`):** Auto-compiles patient name, contact, and child requirements into formatted WhatsApp text and opens `wa.me/918682870313`.
   - **Email (`#0F2942`):** Compiles subject and plain-text body into a pre-filled `mailto:sujascdc0313@gmail.com` link.

7. **Embedded Location & Google Maps:**
   - Responsive Google Map embed centered on Radha Nagar, Perumbakkam, Chennai - 600100 + direct "Open in Google Maps" link.

8. **Multi-Column Footer:**
   - Complete contact, timing, clinic credentials, quick links, therapies, and copyright notice.

---

## 📁 Project Structure

```text
Suja's Child Dev Center/
├── index.html               # Main single-page static application
├── README.md                # Documentation and hosting guide
├── css/
│   ├── tokens.css           # CSS custom properties, colors, radii, motion easing
│   └── styles.css           # Full semantic stylesheet and responsive media queries
├── js/
│   └── main.js              # Scroll reveal, mobile nav, smooth scroll, form compilers
└── assets/
    ├── logo.jpg             # High-res official centre logo
    ├── logo-tagline.jpg     # Logo with 4 therapy circle icons & tagline
    ├── brochure-banner.jpg  # Official clinic banner / board
    ├── hero-sensory.svg     # Hero sensory play illustration
    ├── hero-care.svg        # Hero doctor & care philosophy illustration
    ├── hero-speech.svg      # Hero speech & language illustration
    ├── therapy-ot.svg       # Occupational Therapy & Sensory gym SVG
    ├── therapy-speech.svg   # Speech & Language therapy SVG
    ├── therapy-ei.svg       # Early Intervention milestone SVG
    └── therapy-se.svg       # Behavioural & Special Education SVG
```

---

## 🌐 How to Host on GitHub Pages

1. Initialize git (if not already done) and push to your GitHub repository:
   ```bash
echo "# Suja-s-CDC" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sanjaisquad/Suja-s-CDC.git
git push -u origin main
   ```

2. Go to your repository on GitHub:
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**
   - Select branch **`main`** and folder **`/ (root)`**
   - Click **Save**

3. Your website will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`
