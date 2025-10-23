# Umbrella Brand Kit - Implementation Guide

## ✅ What Was Created

Complete brand system based on your Leger Labs structure with Umbrella's purple theme (#9370DB).

### 🎨 Core Features

1. **Primary Purple Color:** #9370DB (your logo color)
2. **Multiple Purple Variants:** Royal, Neon, plus full 50-900 scale
3. **Light Mode Default:** Professional white backgrounds
4. **Dark Mode Support:** Optional #121212 backgrounds
5. **Button Spec:** White bg + 2px purple outline + black text
6. **Inter Font:** Complete font family with auto-download
7. **Design Tokens:** Single source of truth in JSON
8. **Auto-Generation:** Scripts to rebuild entire system

---

## 📦 File Structure

```
umbrella-brand/
├── tokens/
│   └── design-tokens.json          ← Single source of truth
│
├── scripts/
│   ├── download-fonts.js           ← Auto-download Inter
│   └── generate-all.js             ← Build entire system
│
├── dist/                           ← Generated files (committed)
│   ├── fonts.css                   ← @font-face declarations
│   ├── fonts/inter/                ← Downloaded font files
│   ├── tokens.css                  ← CSS vars + utilities
│   ├── tailwind.preset.js          ← Tailwind config
│   ├── tailwind.preset.cjs         ← CommonJS version
│   └── tokens.js                   ← ES6 module exports
│
├── assets/
│   └── colors/palette.json         ← Color definitions
│
├── docs/
│   └── brand-guide.md              ← Complete style guide
│
├── package.json                    ← Build scripts
├── README.md                       ← Documentation
├── LICENSE                         ← MIT License
└── .gitignore
```

---

## 🚀 Three Ways to Use

### 1. CSS Variables (Simplest)

```html
<link rel="stylesheet" href="./brand/dist/fonts.css">
<link rel="stylesheet" href="./brand/dist/tokens.css">

<style>
  .button {
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
  }
</style>
```

### 2. Tailwind Preset (Recommended)

```js
// tailwind.config.js
const preset = require('./brand/dist/tailwind.preset');

module.exports = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

```jsx
// Use in components
<button className="bg-white border-2 border-purple-500 text-black px-5 py-3 rounded-lg">
  Join Waitlist
</button>
```

### 3. JavaScript Tokens

```js
import { colors, typography, spacing } from './brand/dist/tokens.js';

const theme = {
  primary: colors.brand.purple.DEFAULT,    // "#9370DB"
  royal: colors.brand.purple.royal,        // "#5B2C98"
  neon: colors.brand.purple.neon,          // "#7A3FFF"
};
```

---

## 🎨 Color System

### Purple Scale

```css
--purple-50:  #f5f3ff;   /* Lightest tint */
--purple-100: #ede9fe;
--purple-200: #ddd6fe;
--purple-300: #c9b8f5;
--purple-400: #b399ed;
--purple-500: #9370DB;   /* ← YOUR LOGO COLOR */
--purple-600: #7c5bc9;
--purple-700: #6847b7;
--purple-800: #5536a3;
--purple-900: #452988;   /* Darkest shade */

/* Named Variants */
--purple-royal: #5B2C98;  /* Deep, professional */
--purple-neon:  #7A3FFF;  /* Vibrant, energetic */
```

### Usage in Light Mode (Default)

```css
/* Primary brand elements */
background: var(--purple-500);

/* Borders and outlines */
border-color: var(--purple-500);

/* Hover states */
background: var(--purple-600);

/* Text highlights */
color: var(--purple-700);
```

### Usage in Dark Mode

```css
/* Switch to neon variant for visibility */
background: var(--purple-neon);

/* Or use lighter tints */
border-color: var(--purple-400);
```

---

## 🎯 Button Specifications (100% Confidence)

From your BRAND_KIT_QUICK_REF.md:

```css
/* ALL buttons use this exact style */
.btn {
  background: #FFFFFF;
  border: 2px solid #9370DB;  /* Purple outline */
  color: #000000;
  padding: 12px 20px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #F4F4F4;
}
```

**Tailwind equivalent:**
```jsx
<button className="bg-white border-2 border-purple-500 text-black px-5 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
  Click Me
</button>
```

---

## 🔤 Typography

### Font Stack

```css
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

### Sizes with Utilities

```html
<!-- Hero text -->
<h1 class="text-heading-88">Everything you create</h1>

<!-- Section heading -->
<h2 class="text-heading-56">Own Your Stage</h2>

<!-- Body text -->
<p class="text-copy-16">Join 7M+ independent artists...</p>

<!-- Button text -->
<button class="text-button-16">Join Waitlist</button>
```

---

## 📱 Responsive Spacing

```css
/* Mobile */
section {
  padding: 60px 20px;
}

/* Desktop */
@media (min-width: 1024px) {
  section {
    padding: 100px 48px;
  }
}
```

**Tailwind:**
```jsx
<section className="px-5 py-15 lg:px-12 lg:py-25">
  {/* Content */}
</section>
```

---

## 🎭 Component Examples

### Card

```html
<div class="card">
  <h3 class="text-heading-24">Artist Profile</h3>
  <p class="text-copy-16">Build your professional presence</p>
</div>

<style>
.card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 32px 40px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
```

### Input

```html
<input 
  type="email" 
  placeholder="you@example.com"
  class="input"
>

<style>
.input {
  width: 100%;
  padding: 12px 16px;
  background: var(--background);
  border: 2px solid var(--border);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--purple-500);
  box-shadow: 0 0 0 3px rgba(147, 112, 219, 0.1);
}
</style>
```

---

## 🤖 Violet AI

**Name:** Violet (not "Umbrella AI")  
**Icon:** Purple umbrella  
**Personality:** Witty, caring, professional, empowering

**Implementation:**
```jsx
<div className="violet-ai">
  <div className="violet-icon">
    {/* Purple umbrella SVG */}
  </div>
  <h4>Violet</h4>
  <p>Your AI manager and creative partner</p>
</div>
```

---

## 🔄 Rebuild System

When you update `tokens/design-tokens.json`:

```bash
npm run build
```

This regenerates:
- `dist/fonts.css`
- `dist/tokens.css`
- `dist/tailwind.preset.js`
- `dist/tokens.js`

All changes propagate automatically!

---

## 📊 Key Metrics from Your Spec

### ✅ 100% Confidence Items

- Primary Purple: #9370DB
- Light mode default
- Button style: White bg + purple outline
- Font: Inter (all weights)
- Border radius: 8px (buttons), 24-32px (cards)
- Violet AI branding
- Three social platforms: Instagram, TikTok, Spotify
- Four user types: Artists, Venues, Fans, Collectives

---

## 🎯 Next Steps

1. **Review the brand guide:** `docs/brand-guide.md`
2. **Download fonts:** `npm install && npm run build`
3. **Choose integration method:** CSS vars, Tailwind, or JS tokens
4. **Start building components** using the specs above
5. **Reference examples** in generated CSS files

---

## 💡 Tips

### Do:
✅ Use purple #9370DB everywhere for brand consistency  
✅ Apply 2px purple borders to all buttons  
✅ Keep light mode as default  
✅ Use Inter font exclusively  
✅ Apply proper border radius (8px/24-32px)

### Don't:
❌ Use purple as background in light mode  
❌ Make buttons purple with white text  
❌ Mix font families  
❌ Skip the border on buttons  
❌ Forget about dark mode support

---

## 🆘 Troubleshooting

**Fonts not loading?**
```bash
cd brand
npm run build
```

**Colors look wrong?**
- Check if you imported `tokens.css`
- Verify light/dark mode class on `<html>`

**Tailwind not working?**
- Ensure preset is loaded in config
- Check content paths include your components

---

## 📞 Support

- Full documentation: `docs/brand-guide.md`
- Visual examples: `index.html` (demo page)
- Exact values: `tokens/design-tokens.json`

---

**Umbrella Brand Kit v1.0**  
Generated: October 2025  
Based on: Leger Labs brand system structure  
Primary Color: Purple #9370DB

"Everything you create, connected under one Umbrella"
