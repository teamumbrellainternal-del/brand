# Umbrella Brand Style Guide

**Version 1.0** • October 2025

---

## Brand Essence

**Tagline:** *Everything you create, connected under one Umbrella*

**Mission:** The operating system for live music - connecting artists, venues, fans, and collectives in a borderless ecosystem.

**Positioning:** Professional credibility + Social energy + Marketplace trust. Inspired by LinkedIn's polish, Hinge's social warmth, and Spotify's clean aesthetic.

---

## 1. Color System

### Philosophy
**Light mode is the default experience.** Purple (#9370DB) is the hero brand color - warm, creative, and memorable. Multiple purple variants create depth and hierarchy.

### Primary Colors

**Brand Purple: #9370DB (Medium Purple)**
```css
--color-purple-50:  #f5f3ff;
--color-purple-100: #ede9fe;
--color-purple-200: #ddd6fe;
--color-purple-300: #c9b8f5;
--color-purple-400: #b399ed;
--color-purple-500: #9370DB;  /* ← Primary brand color */
--color-purple-600: #7c5bc9;
--color-purple-700: #6847b7;
--color-purple-800: #5536a3;
--color-purple-900: #452988;

/* Named variants */
--color-purple-royal: #5B2C98;  /* Deep, professional */
--color-purple-neon:  #7A3FFF;  /* Vibrant, energetic */
```

**Why Purple:**
- Creative and artistic (perfect for music platform)
- Approachable and warm (vs cold tech blues)
- Distinctive in the market
- Works beautifully in both light and dark modes
- Logo color (#9370DB)

### Neutral Palette

**Light Mode (Default):**
```css
--color-bg-primary:   #ffffff;    /* Main background */
--color-bg-secondary: #fafafa;    /* Elevated surfaces */
--color-bg-tertiary:  #f5f5f5;    /* Cards, modals */
--color-bg-hover:     #f0f0f0;    /* Interactive hover */
--color-bg-active:    #e5e5e5;    /* Interactive active */

--color-text-primary:   #0a0a0a;  /* Headings, primary text */
--color-text-secondary: #525252;  /* Body text */
--color-text-tertiary:  #737373;  /* Muted text, labels */
--color-text-disabled:  #a3a3a3;  /* Disabled states */

--color-border-primary:   #e5e5e5; /* Default borders */
--color-border-secondary: #f0f0f0; /* Subtle dividers */
--color-border-hover:     #d4d4d4; /* Interactive borders */
```

**Dark Mode (Optional):**
```css
--color-bg-primary:   #121212;
--color-bg-secondary: #1E1E1E;
--color-bg-tertiary:  #2A2A2A;

--color-text-primary:   #ffffff;
--color-text-secondary: #d1d5db;
--color-text-tertiary:  #9ca3af;

--color-border-primary: #2A2A2A;
```

### Semantic Colors

```css
/* Success */
--color-success: #10b981;
--color-success-bg: #ecfdf5;

/* Warning */
--color-warning: #f59e0b;
--color-warning-bg: #fffbeb;

/* Error */
--color-error: #ef4444;
--color-error-bg: #fef2f2;

/* Info */
--color-info: #3b82f6;
--color-info-bg: #eff6ff;
```

### Color Usage Guidelines

**Purple Usage:**
- Primary buttons and CTAs
- Active navigation states
- Interactive highlights
- Links and accents
- Success indicators (deploys, confirmations)
- Borders on focused inputs

**Button Specifications:**
```css
/* Primary Button (from BRAND_KIT_QUICK_REF.md) */
.btn-primary {
  background: #FFFFFF;
  border: 2px solid #9370DB;  /* Purple outline */
  color: #000000;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
}

.btn-primary:hover {
  background: #F4F4F4;
}
```

---

## 2. Typography

### Font Stack

**Primary: Inter**
- Source: https://fonts.google.com/specimen/Inter
- License: SIL Open Font License 1.1
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Usage: All UI, marketing, documentation

### Type Scale

```css
/* Hero and Large Headlines */
--font-size-hero: clamp(48px, 8vw, 88px);  /* line-height: 1, letter-spacing: -0.04em */
--font-size-72: 72px;     /* line-height: 72px, letter-spacing: -3.6px */
--font-size-56: 56px;     /* line-height: 60px, letter-spacing: -2.8px */
--font-size-48: 48px;     /* line-height: 56px, letter-spacing: -2.0px */
--font-size-40: 40px;     /* line-height: 48px, letter-spacing: -1.6px */
--font-size-32: 32px;     /* line-height: 40px, letter-spacing: -1.0px */
--font-size-24: 24px;     /* line-height: 32px, letter-spacing: -0.5px */
--font-size-20: 20px;     /* line-height: 28px, letter-spacing: -0.5px */

/* Body/Copy - Relaxed line-heights */
--font-size-18: 18px;     /* line-height: 28px */
--font-size-16: 16px;     /* line-height: 24px - default body */
--font-size-14: 14px;     /* line-height: 20px */
--font-size-13: 13px;     /* line-height: 20px */

/* Buttons */
--font-size-button: 16px;  /* line-height: 20px, weight: 600 */
```

### Heading Hierarchy

```css
h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.04em;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
}
```

---

## 3. Component Specifications

### Buttons

**From BRAND_KIT_QUICK_REF.md (100% Confidence):**

```css
/* All buttons use this style */
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

### Cards

```css
.card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: 24px;  /* 24-32px per spec */
  padding: 32px 40px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### Inputs

```css
.input {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border-primary);
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--purple-500);
  box-shadow: 0 0 0 3px rgba(147, 112, 219, 0.1);
}
```

### Navigation

```css
.nav {
  background: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-primary);
  padding: 20px 48px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.8);
}
```

---

## 4. Layout & Spacing

### Spacing Scale

```css
--space-0:   0;
--space-1:   0.25rem;  /* 4px */
--space-2:   0.5rem;   /* 8px */
--space-3:   0.75rem;  /* 12px */
--space-4:   1rem;     /* 16px */
--space-6:   1.5rem;   /* 24px */
--space-8:   2rem;     /* 32px */
--space-12:  3rem;     /* 48px */
--space-16:  4rem;     /* 64px */
--space-20:  5rem;     /* 80px */
--space-24:  6rem;     /* 96px */
--space-32:  8rem;     /* 128px */
```

### Border Radius

```css
--radius-sm:   4px;   /* Small elements */
--radius-md:   6px;   /* Default */
--radius-lg:   8px;   /* Buttons, inputs */
--radius-xl:   12px;  /* Medium cards */
--radius-2xl:  16px;  
--radius-3xl:  24px;  /* Large cards */
--radius-4xl:  32px;  /* Hero cards */
--radius-full: 9999px; /* Pills */
```

### Grid System

- Max content width: 1280px
- Reading width: 680px (documentation)
- Section padding (desktop): 100px vertical
- Section padding (mobile): 60px vertical
- Grid gaps: 80px (desktop), 40px (mobile)

---

## 5. Brand Voice

### Personality

**We are:**
- **Professional yet approachable** - LinkedIn polish with social warmth
- **Artist-first** - Empowering musicians globally
- **Direct and clear** - No marketing fluff
- **Inclusive** - Borderless platform mentality

**We are not:**
- Corporate/stuffy
- Over-casual or gimmicky
- Hype-driven or overselling
- Exclusive or gatekeeping

### Writing Guidelines

**Good Examples:**
```
✅ "Everything you create, connected under one Umbrella"
✅ "Own your stage. Connect with venues. Build your community."
✅ "7M+ independent artists building their careers globally"
```

**Avoid:**
```
❌ "Revolutionize your music career with our cutting-edge platform"
❌ "Leverage our ecosystem to maximize your potential"
❌ "The ultimate solution for artists"
```

### Key Vocabulary

- "Artists" (not "musicians" or "creators")
- "Connect" (not "network" or "engage")
- "Community" (not "audience" or "followers")
- "Global" (emphasizes borderless reach)
- "Build" (empowerment focus)

---

## 6. Violet AI

**Name:** Violet (NOT "Umbrella AI")  
**Icon:** Purple umbrella  
**Personality:** Witty, caring, professional, empowering

**Roles:**
1. Manager - Handles gigs, negotiations
2. Friend & Mentor - Provides guidance, encouragement
3. Creative Partner - Assists with brainstorming, music creation
4. Booking Agent - Pitches, marketing support

**Confidence Level:** ⭐⭐⭐⭐⭐ 100%

---

## 7. Logo & Brand Marks

### Logo Treatment

**Current Status:** Logo uses purple #9370DB
- Umbrella icon (minimal, geometric)
- Can be used with or without "Umbrella" text
- Maintain clear space equal to 0.5x the icon height

### Icon Only
- Minimum size: 16px
- Used in navigation, favicons, app icons

### Full Lockup
- Icon + "Umbrella" wordmark
- Used in landing pages, marketing

---

## 8. Four User Types

1. **Artists** - "Own Your Stage"
2. **Venues** - "Fill Your Space"  
3. **Fans** - "Discover Everywhere"
4. **Collectives** - DJ/event groups

**Current Status:** Only Artist flow fully built

**Confidence Level:** ⭐⭐⭐⭐⭐ 100%

---

## 9. Social Media Platforms

**Final Platforms (3 total):**
- Instagram
- TikTok
- Spotify

**Icon Style:** Umbrella-themed with purple branding

**Confidence Level:** ⭐⭐⭐⭐⭐ 100%

---

## 10. Design Principles

### Core Principles

1. **High Contrast** - Excellent readability in both modes
2. **Purple as Hero** - Primary brand color, not just accent
3. **Smooth Animations** - 300ms transitions
4. **Card-Based Layout** - Rounded (24-32px), shadowed
5. **Professional Polish** - LinkedIn-inspired credibility
6. **Social Energy** - Hinge-inspired warmth

### Accessibility

- All text/background combinations pass WCAG AA (4.5:1)
- Interactive elements have 3:1 contrast minimum
- Focus indicators use purple with 2px outline
- Support keyboard navigation

---

## 11. Implementation Checklist

### Phase 1: Foundation
- [x] Install Inter fonts
- [x] Set up CSS variables
- [x] Create design tokens
- [x] Generate Tailwind preset

### Phase 2: Components
- [ ] Implement button variants
- [ ] Build card components
- [ ] Create form elements
- [ ] Design navigation

### Phase 3: Pages
- [ ] Artist onboarding flow
- [ ] Dashboard layouts
- [ ] Landing pages
- [ ] Marketing site

---

## 12. File Structure

```
umbrella-brand/
├── tokens/
│   └── design-tokens.json
├── scripts/
│   ├── download-fonts.js
│   └── generate-all.js
├── dist/
│   ├── fonts.css
│   ├── tokens.css
│   ├── tailwind.preset.js
│   └── tokens.js
├── assets/
│   ├── logo/
│   └── colors/palette.json
├── docs/
│   └── brand-guide.md (this file)
└── index.html (demo page)
```

---

## 13. Quick Reference

**Primary Purple:** #9370DB  
**Light Background:** #ffffff  
**Dark Background:** #121212  
**Button Style:** White bg, purple outline, black text  
**Border Radius:** 8px (buttons), 24-32px (cards)  
**Font:** Inter (all weights)  
**Default Mode:** Light  
**AI Name:** Violet  
**Social Platforms:** 3 (Instagram, TikTok, Spotify)

---

**Last Updated:** October 2025  
**Version:** 1.0  
**Status:** Production-ready

For questions or updates, refer to the design tokens or contact the design team.
