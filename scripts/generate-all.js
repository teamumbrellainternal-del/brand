const fs = require('fs');
const path = require('path');

// Load design tokens
const tokens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../tokens/design-tokens.json'), 'utf8')
);

// Ensure dist directory exists
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// =============================================================================
// GENERATE FONTS.CSS
// =============================================================================
function generateFontCSS() {
  const css = `/**
 * Inter Font Family
 * License: SIL Open Font License 1.1
 * Generated from umbrella-brand
 */

@font-face {
  font-family: 'Inter';
  src: url('./fonts/inter/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('./fonts/inter/Inter-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('./fonts/inter/Inter-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('./fonts/inter/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;

  fs.writeFileSync(path.join(distDir, 'fonts.css'), css);
  console.log('✅ Generated fonts.css');
}

// =============================================================================
// COPY FONTS TO DISTRIBUTION
// =============================================================================
function copyFontsToDistribution() {
  const fontsSource = path.join(__dirname, '../fonts');
  const fontsDest = path.join(__dirname, '../dist/fonts');
  
  console.log('📦 Copying fonts from', fontsSource, 'to', fontsDest);
  
  // Check if source fonts directory exists
  if (!fs.existsSync(fontsSource)) {
    console.warn('⚠️  Fonts directory not found - run download-fonts.js first');
    return;
  }
  
  // Recursively copy fonts directory to dist
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
        console.log('  ✓ Copied', entry.name);
      }
    }
  }
  
  try {
    copyDir(fontsSource, fontsDest);
    console.log('✅ Copied fonts to dist/fonts/');
  } catch (error) {
    console.error('❌ Error copying fonts:', error.message);
  }
}

// =============================================================================
// GENERATE TOKENS.CSS (HSL FORMAT FOR TAILWIND OPACITY)
// =============================================================================
function hexToHSL(hex) {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return `${h} ${s}% ${l}%`;
}

function generateTokensCSS() {
  const lines = [
    '/**',
    ' * Umbrella Design System - CSS Custom Properties',
    ' * Generated from design-tokens.json',
    ' * HSL format for Tailwind opacity modifiers',
    ' * Light mode is default',
    ' */',
    '',
    '@layer base {',
    '  :root {',
  ];

  // Primary brand purple - HSL format for Tailwind
  lines.push('    /* Brand - Umbrella Purple #9370DB (HSL for opacity) */');
  lines.push(`    --primary: ${hexToHSL(tokens.colors.brand.purple.DEFAULT)};`);
  lines.push(`    --primary-foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');

  // Light mode (default) colors
  lines.push('    /* Backgrounds - Light Mode (Default) */');
  lines.push(`    --background: ${hexToHSL(tokens.colors.light.background.primary)};`);
  lines.push(`    --foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');
  
  lines.push('    /* Cards */');
  lines.push(`    --card: ${hexToHSL(tokens.colors.light.background.primary)};`);
  lines.push(`    --card-foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');
  
  lines.push('    /* Popovers */');
  lines.push(`    --popover: ${hexToHSL(tokens.colors.light.background.primary)};`);
  lines.push(`    --popover-foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');
  
  lines.push('    /* Secondary */');
  lines.push(`    --secondary: ${hexToHSL(tokens.colors.light.background.secondary)};`);
  lines.push(`    --secondary-foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');
  
  lines.push('    /* Muted */');
  lines.push(`    --muted: ${hexToHSL(tokens.colors.light.background.tertiary)};`);
  lines.push(`    --muted-foreground: ${hexToHSL(tokens.colors.light.text.secondary)};`);
  lines.push('');
  
  lines.push('    /* Accent - Purple variant */');
  lines.push(`    --accent: ${hexToHSL(tokens.colors.brand.purple['400'])};`);
  lines.push(`    --accent-foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');
  
  lines.push('    /* Destructive */');
  lines.push(`    --destructive: ${hexToHSL(tokens.colors.semantic.error.DEFAULT)};`);
  lines.push(`    --destructive-foreground: ${hexToHSL(tokens.colors.light.text.primary)};`);
  lines.push('');
  
  lines.push('    /* Borders */');
  lines.push(`    --border: ${hexToHSL(tokens.colors.light.border.primary)};`);
  lines.push(`    --input: ${hexToHSL(tokens.colors.light.border.primary)};`);
  lines.push(`    --ring: ${hexToHSL(tokens.colors.brand.purple.DEFAULT)};`);
  lines.push('');
  
  // Full purple palette (hex format for direct use)
  lines.push('    /* Purple Palette (hex) */');
  Object.entries(tokens.colors.brand.purple).forEach(([key, value]) => {
    lines.push(`    --purple-${key}: ${value};`);
  });
  lines.push('');
  
  // Border radius
  lines.push('    /* Border Radius */');
  lines.push(`    --radius: ${tokens.borderRadius.lg};`);
  lines.push('');
  
  lines.push('  }');
  lines.push('');
  
  // Dark mode overrides
  lines.push('  .dark {');
  lines.push('    /* Dark Mode Colors */');
  lines.push(`    --background: ${hexToHSL(tokens.colors.dark.background.primary)};`);
  lines.push(`    --foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --card: ${hexToHSL(tokens.colors.dark.background.secondary)};`);
  lines.push(`    --card-foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --popover: ${hexToHSL(tokens.colors.dark.background.tertiary)};`);
  lines.push(`    --popover-foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --primary: ${hexToHSL(tokens.colors.brand.purple.neon)};`);
  lines.push(`    --primary-foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --secondary: ${hexToHSL(tokens.colors.dark.background.secondary)};`);
  lines.push(`    --secondary-foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --muted: ${hexToHSL(tokens.colors.dark.background.tertiary)};`);
  lines.push(`    --muted-foreground: ${hexToHSL(tokens.colors.dark.text.secondary)};`);
  lines.push(`    --accent: ${hexToHSL(tokens.colors.brand.purple['600'])};`);
  lines.push(`    --accent-foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --destructive: ${hexToHSL(tokens.colors.semantic.error.DEFAULT)};`);
  lines.push(`    --destructive-foreground: ${hexToHSL(tokens.colors.dark.text.primary)};`);
  lines.push(`    --border: ${hexToHSL(tokens.colors.dark.border.primary)};`);
  lines.push(`    --input: ${hexToHSL(tokens.colors.dark.border.primary)};`);
  lines.push(`    --ring: ${hexToHSL(tokens.colors.brand.purple.neon)};`);
  lines.push('  }');
  lines.push('}');
  lines.push('');
  
  // Base styles
  lines.push('@layer base {');
  lines.push('  * {');
  lines.push('    @apply border-border;');
  lines.push('  }');
  lines.push('  body {');
  lines.push('    @apply bg-background text-foreground;');
  lines.push('    font-feature-settings: "rlig" 1, "calt" 1;');
  lines.push('  }');
  lines.push('}');
  lines.push('');
  
  // Typography utilities
  lines.push('/* ============================================');
  lines.push('   UMBRELLA TYPOGRAPHY UTILITIES');
  lines.push('   Inter font with precise sizing');
  lines.push('   ============================================ */');
  lines.push('');
  
  // Heading classes
  lines.push('/* Headings */');
  const headingSizes = [
    { size: '88', lineHeight: '88', letterSpacing: '-4.0px' },
    { size: '72', lineHeight: '72', letterSpacing: '-3.6px' },
    { size: '56', lineHeight: '60', letterSpacing: '-2.8px' },
    { size: '48', lineHeight: '56', letterSpacing: '-2.0px' },
    { size: '40', lineHeight: '48', letterSpacing: '-1.6px' },
    { size: '32', lineHeight: '40', letterSpacing: '-1.0px' },
    { size: '24', lineHeight: '32', letterSpacing: '-0.5px' },
    { size: '20', lineHeight: '28', letterSpacing: '-0.5px' },
    { size: '16', lineHeight: '24', letterSpacing: '0' },
  ];
  
  headingSizes.forEach(({ size, lineHeight, letterSpacing }) => {
    lines.push(`.text-heading-${size} {`);
    lines.push(`  font-family: ${tokens.typography.fontFamily.sans};`);
    lines.push(`  font-size: ${size}px;`);
    lines.push(`  font-weight: 600;`);
    lines.push(`  line-height: ${lineHeight}px;`);
    lines.push(`  letter-spacing: ${letterSpacing};`);
    lines.push('}');
    lines.push('');
  });
  
  // Copy/Body text classes
  lines.push('/* Copy (Body Text) */');
  const copySizes = [
    { size: '24', lineHeight: '36' },
    { size: '20', lineHeight: '30' },
    { size: '18', lineHeight: '28' },
    { size: '16', lineHeight: '24' },
    { size: '14', lineHeight: '20' },
    { size: '13', lineHeight: '20' },
  ];
  
  copySizes.forEach(({ size, lineHeight }) => {
    lines.push(`.text-copy-${size} {`);
    lines.push(`  font-family: ${tokens.typography.fontFamily.sans};`);
    lines.push(`  font-size: ${size}px;`);
    lines.push(`  font-weight: 400;`);
    lines.push(`  line-height: ${lineHeight}px;`);
    lines.push('}');
    lines.push('');
  });
  
  // Button classes
  lines.push('/* Buttons */');
  const buttonSizes = [
    { size: '16', lineHeight: '20' },
    { size: '14', lineHeight: '18' },
    { size: '12', lineHeight: '16' },
  ];
  
  buttonSizes.forEach(({ size, lineHeight }) => {
    lines.push(`.text-button-${size} {`);
    lines.push(`  font-family: ${tokens.typography.fontFamily.sans};`);
    lines.push(`  font-size: ${size}px;`);
    lines.push(`  font-weight: 600;`);
    lines.push(`  line-height: ${lineHeight}px;`);
    lines.push('}');
    lines.push('');
  });

  const css = lines.join('\n');
  fs.writeFileSync(path.join(distDir, 'tokens.css'), css);
  console.log('✅ Generated tokens.css (HSL format + utility classes)');
}

// =============================================================================
// GENERATE TAILWIND PRESET
// =============================================================================
function generateTailwindPreset() {
  const preset = {
    darkMode: ['class'],
    content: [],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          // Full purple palette
          purple: tokens.colors.brand.purple,
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
          xl: tokens.borderRadius.xl,
          '2xl': tokens.borderRadius['2xl'],
          '3xl': tokens.borderRadius['3xl'],
          '4xl': tokens.borderRadius['4xl'],
        },
        fontFamily: {
          sans: tokens.typography.fontFamily.sans.split(',').map(f => f.trim()),
          mono: tokens.typography.fontFamily.mono.split(',').map(f => f.trim()),
        },
        fontSize: (() => {
          const sizes = {};
          Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
            const lineHeight = tokens.typography.lineHeight[key];
            const letterSpacing = tokens.typography.letterSpacing[`heading-${key}`] || '0';
            sizes[key] = [value, { lineHeight, letterSpacing, fontWeight: '600' }];
          });
          return sizes;
        })(),
        fontWeight: tokens.typography.fontWeight,
        spacing: tokens.spacing,
        boxShadow: {
          sm: tokens.boxShadow.sm,
          DEFAULT: tokens.boxShadow.md,
          md: tokens.boxShadow.md,
          lg: tokens.boxShadow.lg,
          xl: tokens.boxShadow.xl,
          purple: tokens.boxShadow.purple,
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  };

  const output = `// Generated from design-tokens.json - DO NOT EDIT
module.exports = ${JSON.stringify(preset, null, 2)};
`;

  fs.writeFileSync(path.join(distDir, 'tailwind.preset.cjs'), output);
  fs.writeFileSync(path.join(distDir, 'tailwind.preset.js'), output);
  console.log('✅ Generated tailwind.preset.js & .cjs');
}

// =============================================================================
// GENERATE JS MODULE
// =============================================================================
function generateJSModule() {
  const output = `// Generated from design-tokens.json - DO NOT EDIT
export const tokens = ${JSON.stringify(tokens, null, 2)};

// Convenience exports
export const colors = tokens.colors;
export const typography = tokens.typography;
export const spacing = tokens.spacing;
export const borderRadius = tokens.borderRadius;
export const boxShadow = tokens.boxShadow;
export const transitionDuration = tokens.transitionDuration;
export const zIndex = tokens.zIndex;

export default tokens;
`;

  fs.writeFileSync(path.join(distDir, 'tokens.js'), output);
  console.log('✅ Generated tokens.js');
}

// =============================================================================
// RUN ALL GENERATORS
// =============================================================================
generateFontCSS();
copyFontsToDistribution();
generateTokensCSS();
generateTailwindPreset();
generateJSModule();

console.log('\n✅ All design system files generated successfully!');
console.log('\n📦 Generated files:');
console.log('  - dist/fonts.css');
console.log('  - dist/fonts/ (copied font files)');
console.log('  - dist/tokens.css (HSL variables + utility classes)');
console.log('  - dist/tailwind.preset.js & .cjs');
console.log('  - dist/tokens.js');
