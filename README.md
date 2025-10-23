# Umbrella Brand Kit

Complete brand documentation and design system for Umbrella - the operating system for live music.

## 🎨 Brand Essence

**Primary Color:** Purple #9370DB (Medium Purple)  
**Philosophy:** Professional credibility + Social energy + Marketplace trust  
**Default Mode:** Light mode  
**Inspired by:** LinkedIn (polish), Hinge (warmth), Spotify (minimalism)

---

## 📦 What's Included

This brand kit contains everything needed to implement Umbrella's purple-themed design system across all platforms.

### Core Documentation

1. **docs/brand-guide.md** - Complete brand style guide
   - Logo system and usage
   - Color palette (multiple purples!)
   - Typography (Inter font family)
   - Component specifications
   - Brand voice guidelines
   - Violet AI personality

2. **tokens/design-tokens.json** - Single source of truth
   - All design values in JSON format
   - Colors, typography, spacing, shadows
   - Programmatic access for tools

### Implementation Files

3. **dist/fonts.css** - Inter font declarations
   - Ready to import in projects
   - Weights: 400, 500, 600, 700

4. **dist/tokens.css** - CSS custom properties
   - HSL format for Tailwind opacity
   - Complete utility classes
   - Light mode default, dark mode optional

5. **dist/tailwind.preset.js** - Tailwind configuration
   - Extended theme with all brand values
   - Custom utilities and plugins
   - Full purple palette

6. **dist/tokens.js** - JavaScript module
   - ES6 exports for programmatic access
   - Type-safe color references

7. **index.html** - Visual demonstration
   - Interactive component examples
   - Live color swatches
   - Typography showcase

---

## 🚀 Quick Start

### For Developers

**1. Install as git submodule:**
```bash
git submodule add https://github.com/umbrella/brand.git brand
git submodule update --init --recursive
```

**2. Install Inter font:**
```bash
cd brand
npm install
npm run build
```

**3. Import in your project:**

```html
<!-- Option 1: CSS Variables -->
<link rel="stylesheet" href="./brand/dist/fonts.css">
<link rel="stylesheet" href="./brand/dist/tokens.css">
```

```js
// Option 2: Tailwind Config
// tailwind.config.js
const preset = require('./brand/dist/tailwind.preset');

module.exports = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
};
```

```js
// Option 3: JavaScript Tokens
import { colors, typography } from './brand/dist/tokens.js';

const theme = {
  primary: colors.brand.purple.DEFAULT, // #9370DB
  background: colors.light.background.primary,
};
```

### For Designers

1. Open `index.html` in browser to see the system in action
2. Reference `docs/brand-guide.md` for complete guidelines
3. Use `assets/colors/palette.json` for color values

---

## 🎨 Core Brand Values

### Colors

```css
/* Primary Purple */
--purple-500: #9370DB;      /* Main brand color (logo) */
--purple-royal: #5B2C98;    /* Deep, professional */
--purple-neon: #7A3FFF;     /* Vibrant, energetic */

/* Light Mode (Default) */
--background: #ffffff;
--foreground: #0a0a0a;
--border: #e5e5e5;

/* Dark Mode */
--background-dark: #121212;
--foreground-dark: #ffffff;
--border-dark: #2A2A2A;
```

### Typography

```css
Font: Inter (all weights)
Hero: 88px bold, tight line-height
Body: 16px regular, relaxed line-height
Buttons: 16px semibold
```

### Components

**Buttons (100% Confidence):**
```css
background: #FFFFFF;
border: 2px solid #9370DB;  /* Purple outline */
color: #000000;
padding: 12px 20px;
border-radius: 8px;
font-weight: 600;
```

**Cards:**
```css
border-radius: 24px-32px;
padding: 32px 40px;
border: 1px solid #e5e5e5;
```

---

## ✅ Key Design Decisions (100% Confidence)

1. **Primary Purple:** #9370DB (logo color)
2. **Multiple Purples:** Royal (#5B2C98), Neon (#7A3FFF), plus full scale
3. **Light Mode Default:** White backgrounds, excellent contrast
4. **Button Style:** White bg with purple outline
5. **Inter Font:** Exclusively, all weights
6. **Border Radius:** 8px (buttons/inputs), 24-32px (cards)
7. **Violet AI:** Purple umbrella icon, witty & empowering
8. **Three Social Platforms:** Instagram, TikTok, Spotify
9. **Four User Types:** Artists, Venues, Fans, Collectives

---

## 🎯 Brand Philosophy

**"Everything you create, connected under one Umbrella"**

- **Professional credibility** like LinkedIn
- **Social energy** like Hinge  
- **Clean aesthetic** like Spotify for Creators
- **Artist-first** mentality
- **Borderless** platform for global music community

---

## 📋 File Structure

```
umbrella-brand/
├── tokens/
│   └── design-tokens.json          # Single source of truth
├── scripts/
│   ├── download-fonts.js           # Auto-download Inter
│   └── generate-all.js             # Build system
├── dist/
│   ├── fonts.css                   # Font declarations
│   ├── fonts/                      # Font files
│   ├── tokens.css                  # CSS variables + utilities
│   ├── tailwind.preset.js          # Tailwind config
│   └── tokens.js                   # JS module
├── assets/
│   ├── logo/                       # Brand marks (TBD)
│   └── colors/palette.json         # Color definitions
├── docs/
│   └── brand-guide.md              # Complete guide
├── index.html                      # Visual demo
└── package.json                    # Build scripts
```

---

## 🔧 Build System

The brand kit uses automated generation from design tokens:

```bash
# Install dependencies
npm install

# Download fonts and generate all files
npm run build

# Outputs:
# - dist/fonts.css
# - dist/tokens.css (HSL + utilities)
# - dist/tailwind.preset.js
# - dist/tokens.js
```

### Auto-Updates via GitHub Actions

Set up automatic brand updates in your projects:

```yaml
# .github/workflows/update-brand.yml
name: Update Brand
on:
  schedule:
    - cron: '0 0 * * *'  # Daily
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      
      - name: Update submodule
        run: |
          git submodule update --remote brand
          git add brand
          git commit -m "chore: update brand" || exit 0
          git push
```

---

## 🎨 Usage Examples

### Creating a Button

```html
<!-- Using CSS classes -->
<button class="btn btn-primary">
  Join Waitlist
</button>
```

```jsx
// Using Tailwind + preset
<button className="bg-white border-2 border-purple-500 text-black px-5 py-3 rounded-lg font-semibold hover:bg-gray-50">
  Join Waitlist
</button>
```

### Using Purple Variants

```css
/* Different purple contexts */
.cta-button {
  background: var(--purple-500);  /* Main brand */
}

.accent-border {
  border-color: var(--purple-neon);  /* Vibrant highlight */
}

.professional-badge {
  background: var(--purple-royal);  /* Deep, serious */
}
```

---

## 🎵 Violet AI

**Name:** Violet (not "Umbrella AI")  
**Personality:** Witty, caring, professional, empowering  
**Icon:** Purple umbrella  
**Confidence:** ⭐⭐⭐⭐⭐ 100%

**Roles:**
- Manager (gigs, negotiations)
- Friend & Mentor (guidance)
- Creative Partner (brainstorming)
- Booking Agent (pitches)

---

## 🌐 Platform Context

### Four User Types

1. **Artists** - "Own Your Stage"
2. **Venues** - "Fill Your Space"
3. **Fans** - "Discover Everywhere"
4. **Collectives** - DJ/event groups

### Social Media Integration

Three platforms with umbrella-themed purple branding:
- Instagram
- TikTok
- Spotify

---

## ❌ Common Mistakes to Avoid

**Don't:**
- Use purple as background in light mode
- Make buttons purple with white text (use white bg + purple outline)
- Use fonts other than Inter
- Forget the 2px purple border on buttons
- Use generic marketing language

**Do:**
- Keep purple as the hero color
- Use white backgrounds in light mode (#ffffff)
- Apply proper border radius (8px buttons, 24-32px cards)
- Write artist-first, direct copy
- Maintain high contrast for accessibility

---

## 📊 Design Token Access

```js
// JavaScript
import { tokens } from '@umbrella/brand';

console.log(tokens.colors.brand.purple.DEFAULT); // "#9370DB"
console.log(tokens.typography.fontSize['16']);   // "16px"
console.log(tokens.spacing['8']);                // "2rem"
```

```css
/* CSS */
.element {
  color: hsl(var(--primary));
  background: hsl(var(--background));
  padding: var(--space-8);
  border-radius: var(--radius-lg);
}
```

---

## 🔄 Version History

**v1.0** — October 2025  
Initial brand system with purple theme, light mode default, and complete design token infrastructure.

---

## 📞 Support

For questions, updates, or contributions:
- Review `docs/brand-guide.md` for comprehensive guidelines
- Check `index.html` for visual examples
- Reference `tokens/design-tokens.json` for exact values

---

## 📜 License

MIT License - See LICENSE file for details

**Fonts:** Inter (SIL Open Font License 1.1)

---

**Umbrella Brand Kit v1.0**  
Created: October 2025  
For: The operating system for live music  
By: Comprehensive design token system

"Everything you create, connected under one Umbrella"
