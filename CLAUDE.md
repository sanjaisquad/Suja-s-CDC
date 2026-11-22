# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Suja's Child Development Centre (SCDC), a pediatric therapy center in Chennai, India. Pure HTML/CSS/JS with no build tools or backend. Design follows Ecolevision.com aesthetic with the center's logo color palette.

## Development

**Run locally:** Open `index.html` directly in a browser, or use any static server:
```bash
npx serve .
# or
python -m http.server 8000
```

**Deploy:** Push to GitHub and enable GitHub Pages (Settings > Pages > Deploy from main branch).

## Architecture

Single-page static site with semantic HTML5:
- `index.html` - Complete page with all sections (hero, services, overview, contact, footer)
- `css/tokens.css` - Design system: colors, spacing, typography, radii, motion tokens
- `css/styles.css` - Component styles, layouts, and responsive media queries
- `js/main.js` - Scroll reveals, parallax shapes, mobile nav, contact form, lightbox
- `assets/` - Logo, therapy illustrations (SVG), brochure banner

### Zero-Backend Contact Form

The contact form (`#contact-section`) compiles user input into pre-formatted messages and redirects to:
- **WhatsApp:** `wa.me/918682870313?text={encodedMessage}` - opens WhatsApp with draft
- **Email:** `mailto:sujascdc0313@gmail.com?subject={}&body={}` - opens default mail client

No server-side processing; validation is client-side only.

## Design System (Ecolevision-inspired)

Based on Ecolevision.com aesthetic adapted with the center's logo colors.

### Color Palette (from logo)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0095DA` | CTAs, links, active states (blue child figure) |
| `--color-magenta` | `#E91E8C` | Speech therapy, secondary accent (pink heart) |
| `--color-green` | `#5E9E2A` | OT/Sensory, WhatsApp (green hands) |
| `--color-gold` | `#F9A825` | Early intervention (orange child/star) |
| `--color-text` | `#0F2942` | Primary text (navy from logo) |
| `--color-bg-cream` | `#F4F0E2` | Main background (Ecolevision ecru) |

### Radii (Ecolevision generous curves)

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-md` | `2rem` | Cards |
| `--radius-lg` | `2.5rem` | Large cards |
| `--radius-xl` | `3rem` | Hero cards, images |
| `--radius-full` | `10rem` | Buttons, pills |

### Motion (Ecolevision signature)

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-smooth` | `cubic-bezier(0.77, 0, 0.175, 1)` | Page transitions |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Interactive hover, cards |
| `--ease-snap` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scroll reveals |
| `--duration-medium` | `400ms` | Hover transitions |
| `--duration-reveal` | `800ms` | Scroll animations |

Full token definitions in `css/tokens.css`.

### JavaScript Modules

`js/main.js` initializes on DOMContentLoaded:
- `initScrollReveal()` - IntersectionObserver-based reveal with stagger support
- `initHeader()` - Sticky header with scroll detection (requestAnimationFrame optimized)
- `initMobileNav()` - Fullscreen menu with clip-path curtain animation
- `initSmoothScroll()` - Anchor scrolling with active nav state
- `initContactForm()` - Form validation with shake animation, WhatsApp/Email redirects
- `initLightbox()` - Modal for clinic board image with keyboard support
- `initParallaxShapes()` - Mouse-following organic background shapes
- `initHeroCardHover()` - 3D tilt effect on hero cards

All animations respect `prefers-reduced-motion`.

### Key Ecolevision Patterns

1. **Rotated hero cards:** `rotate(-4deg)`, `rotate(2.5deg)`, `rotate(-2deg)` with spring hover reset
2. **Organic floating shapes:** Large blurred circles with subtle parallax on mouse move
3. **Clip-path mobile nav:** Full-screen curtain reveal with staggered link animations
4. **Spring hover:** Scale 1.06 on buttons/cards with bounce easing
5. **Generous radii:** 2-3rem on cards, 10rem on buttons (pill shape)
