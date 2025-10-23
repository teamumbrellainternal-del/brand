# Umbrella Brand Kit - Interactive Demo

This guide explains how to use and explore the Umbrella brand kit interactive demo page.

## Live Demo

**GitHub Pages:** [https://[org].github.io/umbrella-brand](https://[org].github.io/umbrella-brand)

The demo page showcases all components, colors, typography, and usage examples in a beautiful, interactive format.

## Running Locally

### Quick Start

The demo page is a static HTML file that requires no build process. Simply open it in your browser:

```bash
# Option 1: Python HTTP Server (recommended)
python3 -m http.server 8000
# Visit http://localhost:8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js http-server
npx http-server -p 8000

# Option 4: PHP
php -S localhost:8000

# Option 5: Direct file open (limited functionality)
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Recommended:** Use a local HTTP server for best results. This ensures proper font loading and prevents CORS issues.

## Demo Features

### 1. Navigation

The sticky navigation bar includes:
- **Logo** - Umbrella brand mark
- **Quick Links** - Jump to Colors, Typography, Components, Usage
- **Theme Toggle** - Switch between light and dark modes

### 2. Hero Section

- Large, eye-catching headline with gradient text effect
- Tagline: "Everything you create, connected under one Umbrella"
- Call-to-action buttons demonstrating the signature white + purple outline style

### 3. What's Included

Six interactive cards showcasing the brand kit components:
- Design Tokens
- CSS Variables
- Tailwind Preset
- Typography (Inter)
- Components
- Documentation

**Interaction:** Cards lift on hover with subtle purple shadow effect.

### 4. Color Palette

Complete color system demonstration:

**Purple Scale (50-900):**
- 10 shades from lightest (#f5f3ff) to darkest (#452988)
- Primary purple: #9370DB (500)

**Special Variants:**
- Purple Royal (#5B2C98) - Deep, professional
- Purple Neon (#7A3FFF) - Vibrant, energetic

**Semantic Colors:**
- Success (green)
- Warning (orange)
- Error (red)
- Info (blue)

**Interaction:** Hover over swatches for slight zoom effect.

### 5. Typography

Live demonstrations of Inter font family at different sizes:

- **Display XL** - 88px bold (hero text)
- **Display Large** - 72px bold (major headings)
- **Heading 1** - 48px bold (section titles)
- **Heading 2** - 32px semibold (subsections)
- **Body Large** - 20px regular (intro text)
- **Body** - 16px regular (standard text)
- **Small** - 14px medium (captions)

### 6. Components

Production-ready component examples with code:

#### Buttons
- **Primary** - White background, 2px purple outline (#9370DB)
- **Secondary** - Transparent with border
- **Disabled** - Reduced opacity

#### Badges
- Purple variant
- Success, Warning states
- Rounded corners (6px)

#### Cards
- 24px border radius
- 32px padding
- Subtle border
- Hover elevation effect

#### Input Fields
- 2px border with purple focus state
- 8px border radius
- 16px placeholder text

**Each component includes:**
- Live interactive example
- Complete HTML + CSS code
- Implementation notes

### 7. Usage Examples

Three integration methods with copy-paste code:

1. **CSS Variables** - Import tokens.css and use HSL variables
2. **Tailwind Config** - Extend with preset configuration
3. **JavaScript Tokens** - Import as ES6 module

**Bonus:** GitHub Actions workflow for auto-updating brand submodule

## Theme Toggle

### How It Works

The theme toggle button switches between light and dark modes:

**Light Mode (Default):**
- White background (#ffffff)
- Black text (#0a0a0a)
- Light borders (#e5e5e5)
- Purple accent (#9370DB)

**Dark Mode:**
- Dark background (#121212)
- White text (#ffffff)
- Dark borders (#2A2A2A)
- Purple accent (#9370DB)

**Persistence:**
Theme preference is saved to `localStorage` and persists across sessions.

**Icon:**
- ☀️ Sun icon in light mode
- 🌙 Moon icon in dark mode

### Testing Theme Toggle

1. Click the theme toggle button in the navigation
2. Observe all colors smoothly transition (300ms)
3. Refresh the page - theme preference should persist
4. Test all components in both themes
5. Verify button styling adapts correctly

## Responsive Design

The demo is fully responsive with breakpoints:

### Desktop (1280px+)
- Full navigation with all links
- 3-column grid for overview cards
- Large typography samples
- Optimal spacing

### Tablet (768px - 1279px)
- 2-column grid layouts
- Slightly reduced typography
- Maintained spacing

### Mobile (< 768px)
- Single column layouts
- Condensed navigation (only theme toggle visible)
- Optimized touch targets (minimum 44px)
- Reduced padding to maximize content area

### Testing Responsive Design

```bash
# Chrome DevTools
Cmd/Ctrl + Shift + M (Toggle device toolbar)

# Test these viewports:
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1280px+)
```

## Screenshots

To capture screenshots of the demo:

### Full Page Screenshot
```bash
# Chrome DevTools
1. Open DevTools (Cmd/Ctrl + Shift + I)
2. Open Command Menu (Cmd/Ctrl + Shift + P)
3. Type "screenshot"
4. Select "Capture full size screenshot"
```

### Recommended Screenshots

1. **Hero Section** - Show gradient text and buttons
2. **Color Palette** - All purple swatches visible
3. **Typography Scale** - Display XL through Small
4. **Components** - Buttons and cards together
5. **Light vs Dark** - Side-by-side comparison
6. **Mobile View** - Responsive layout

## Performance

The demo page is optimized for fast loading:

**Metrics:**
- HTML: ~15KB
- CSS (inline): ~8KB
- Fonts: Loaded from dist/fonts.css
- No external dependencies
- No JavaScript frameworks

**Load Time:**
- Target: < 2 seconds on 3G
- Typical: < 1 second on broadband

**Optimization Techniques:**
- Inline CSS (no external stylesheet requests)
- System font fallbacks
- Minimal JavaScript (theme toggle only)
- Smooth CSS transitions (GPU-accelerated)

## Browser Support

The demo works in all modern browsers:

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Limited Support:**
- IE 11 (no CSS variables, no smooth scrolling)

**Features requiring modern browsers:**
- CSS custom properties (HSL variables)
- CSS Grid
- backdrop-filter
- CSS gradients
- localStorage

## Accessibility

The demo follows accessibility best practices:

**Features:**
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient color contrast (WCAG AA)
- Keyboard navigation support
- Focus visible states
- Alt text for SVG icons
- Smooth scroll with prefers-reduced-motion respect

**Testing:**
```bash
# Lighthouse (Chrome DevTools)
1. Open DevTools
2. Navigate to "Lighthouse" tab
3. Run accessibility audit
4. Target score: 95+
```

## Code Structure

### File Organization

```
index.html
├── <head>
│   ├── Meta tags
│   ├── Link to fonts.css
│   ├── Link to tokens.css
│   └── <style> (inline CSS)
└── <body>
    ├── <nav> (sticky navigation)
    ├── <section class="hero">
    ├── <section> (overview)
    ├── <section> (colors)
    ├── <section> (typography)
    ├── <section> (components)
    ├── <section> (usage)
    ├── <footer>
    └── <script> (theme toggle + smooth scroll)
```

### CSS Architecture

**Variables Used:**
```css
/* From tokens.css */
--purple-500: #9370DB
--background: HSL values
--foreground: HSL values
--border: HSL values
--font-sans: Inter family
```

**Component Classes:**
- `.btn` - Base button styles
- `.btn-primary` - Primary button (white + purple outline)
- `.btn-secondary` - Secondary button
- `.card` - Card component
- `.badge` - Badge component
- `.input` - Input field
- `.code-block` - Code example container

**Layout Classes:**
- `.container` - Max-width 1280px, centered
- `.hero` - Hero section
- `.overview-grid` - 3-column responsive grid
- `.color-grid` - Color swatch grid
- `.component-demo` - Component showcase container

## Customization

To customize the demo for your needs:

### Change Colors
```css
/* Find and replace in <style> tag */
--purple-500: #9370DB → --purple-500: #YOUR_COLOR
```

### Add New Section
```html
<section class="container">
  <h2>New Section</h2>
  <p class="section-description">Description here</p>
  <!-- Content -->
</section>
```

### Modify Components
Look for `.component-demo` blocks and add your own component examples following the same pattern.

## Troubleshooting

### Fonts Not Loading

**Problem:** Inter font not displaying correctly

**Solution:**
```bash
# Rebuild fonts
npm run build

# Check fonts.css exists
ls dist/fonts.css

# Verify font files
ls dist/fonts/inter/
```

### Theme Toggle Not Working

**Problem:** Theme doesn't change or persist

**Solution:**
- Check browser console for JavaScript errors
- Ensure localStorage is enabled
- Clear localStorage: `localStorage.clear()` in console
- Hard refresh: Cmd/Ctrl + Shift + R

### Colors Look Wrong

**Problem:** Colors don't match brand purple

**Solution:**
- Check tokens.css is loaded
- Verify CSS custom properties in DevTools
- Ensure no browser extensions blocking styles
- Test in incognito/private mode

### Responsive Layout Broken

**Problem:** Layout doesn't respond to screen size

**Solution:**
- Verify viewport meta tag exists: `<meta name="viewport" ...>`
- Test in actual device (not just DevTools)
- Check for CSS syntax errors
- Clear browser cache

## Integration Tips

### Using Demo Components in Projects

1. **Copy HTML structure** from demo
2. **Import tokens.css** for variables
3. **Copy relevant CSS** from inline styles
4. **Test in your environment**
5. **Adjust as needed** for your framework

### Framework Integration

**React:**
```jsx
// Extract component styles to CSS modules
import styles from './Button.module.css';

function Button({ children }) {
  return <button className={styles.btnPrimary}>{children}</button>;
}
```

**Vue:**
```vue
<template>
  <button class="btn btn-primary">{{ text }}</button>
</template>

<style scoped>
@import '../brand/dist/tokens.css';
/* Use --purple-500 and other variables */
</style>
```

**Svelte:**
```svelte
<button class="btn-primary">
  <slot />
</button>

<style>
  :global(.btn-primary) {
    /* Copy from demo */
  }
</style>
```

## Updates

The demo page is version-controlled and auto-deployed:

**Deployment:**
- Pushes to `main` branch trigger GitHub Actions
- GitHub Pages deploys automatically
- Live site updates within 1-2 minutes

**Version History:**
- Check git commits for demo changes
- See README.md for version info

## Questions?

For questions about the demo:
1. Check this DEMO.md file
2. Review README.md for overview
3. See docs/brand-guide.md for design guidelines
4. Check IMPLEMENTATION.md for technical details

---

**Umbrella Brand Kit Demo**
Version 1.0 | October 2025
"Everything you create, connected under one Umbrella"
