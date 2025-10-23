# Umbrella Logo Assets

This directory contains all logo variations for the Umbrella brand.

## Logo Files

### Primary Logo
- **umbrella-logo.svg** - Full logo lockup (to be provided)
  - Use for main branding and marketing materials
  - Minimum width: 120px
  - Clear space: Equal to height of umbrella icon

### Icon Only
- **umbrella-icon.svg** - Standalone umbrella icon
  - Purple (#9370DB) version
  - Use for app icons, favicons, social media avatars
  - Minimum size: 32x32px

### Theme Variations
- **umbrella-logo-light.svg** - Purple version for light backgrounds
  - Use on white or light-colored backgrounds
  - Primary text color: #0a0a0a (black)

- **umbrella-logo-dark.svg** - White version for dark backgrounds
  - Use on dark or colored backgrounds
  - Primary text color: #FFFFFF (white)

## Usage Guidelines

### When to Use Each Version

**Logo Light (Purple):**
- Light mode UI
- White backgrounds
- Marketing materials
- Documentation

**Logo Dark (White):**
- Dark mode UI
- Dark backgrounds
- Purple backgrounds
- Footer areas

**Icon Only:**
- App icons
- Favicons (16x16, 32x32, 64x64)
- Social media profile pictures
- Small UI elements where full logo doesn't fit

### Spacing & Sizing

**Minimum Sizes:**
- Full logo: 120px width minimum
- Icon only: 32px minimum

**Clear Space:**
- Maintain clear space equal to the height of the umbrella icon around all logos
- No text, graphics, or other elements should appear in this space

**Alignment:**
- Logo can be left-aligned, centered, or right-aligned
- Maintain consistent alignment across a design system

### Don't

- Don't change the purple color (#9370DB)
- Don't add effects (shadows, gradients, outlines)
- Don't rotate or distort the logo
- Don't place on busy backgrounds without proper contrast
- Don't recreate or modify the umbrella icon shape

## File Formats

All logos are provided in SVG format for:
- Scalability (resolution-independent)
- Small file size
- Easy color manipulation via CSS
- Web and print compatibility

## Integration

### HTML
```html
<!-- Light mode -->
<img src="./assets/logos/umbrella-logo-light.svg" alt="Umbrella" width="160">

<!-- Dark mode -->
<img src="./assets/logos/umbrella-logo-dark.svg" alt="Umbrella" width="160">

<!-- Icon only -->
<img src="./assets/logos/umbrella-icon.svg" alt="Umbrella" width="48">
```

### CSS Background
```css
.logo-light {
  background-image: url('./assets/logos/umbrella-logo-light.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.logo-dark {
  background-image: url('./assets/logos/umbrella-logo-dark.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

### React/JSX
```jsx
import UmbrellaLogo from './assets/logos/umbrella-logo-light.svg';

function Header() {
  return <img src={UmbrellaLogo} alt="Umbrella" width={160} />;
}
```

## Accessibility

- Always include `alt="Umbrella"` or descriptive alt text
- Maintain sufficient contrast with background
- Ensure logo is readable at minimum size
- Consider using aria-label for icon-only usage

## Questions?

For logo usage questions or to request additional formats, refer to the brand guide in `/docs/brand-guide.md`.
