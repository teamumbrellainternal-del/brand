// Generated from design-tokens.json - DO NOT EDIT
module.exports = {
  "darkMode": [
    "class"
  ],
  "content": [],
  "theme": {
    "container": {
      "center": true,
      "padding": "2rem",
      "screens": {
        "2xl": "1400px"
      }
    },
    "extend": {
      "colors": {
        "border": "hsl(var(--border))",
        "input": "hsl(var(--input))",
        "ring": "hsl(var(--ring))",
        "background": "hsl(var(--background))",
        "foreground": "hsl(var(--foreground))",
        "primary": {
          "DEFAULT": "hsl(var(--primary))",
          "foreground": "hsl(var(--primary-foreground))"
        },
        "secondary": {
          "DEFAULT": "hsl(var(--secondary))",
          "foreground": "hsl(var(--secondary-foreground))"
        },
        "destructive": {
          "DEFAULT": "hsl(var(--destructive))",
          "foreground": "hsl(var(--destructive-foreground))"
        },
        "muted": {
          "DEFAULT": "hsl(var(--muted))",
          "foreground": "hsl(var(--muted-foreground))"
        },
        "accent": {
          "DEFAULT": "hsl(var(--accent))",
          "foreground": "hsl(var(--accent-foreground))"
        },
        "popover": {
          "DEFAULT": "hsl(var(--popover))",
          "foreground": "hsl(var(--popover-foreground))"
        },
        "card": {
          "DEFAULT": "hsl(var(--card))",
          "foreground": "hsl(var(--card-foreground))"
        },
        "purple": {
          "50": "#f5f3ff",
          "100": "#ede9fe",
          "200": "#ddd6fe",
          "300": "#c9b8f5",
          "400": "#b399ed",
          "500": "#9370DB",
          "600": "#7c5bc9",
          "700": "#6847b7",
          "800": "#5536a3",
          "900": "#452988",
          "royal": "#5B2C98",
          "neon": "#7A3FFF",
          "DEFAULT": "#9370DB"
        }
      },
      "borderRadius": {
        "lg": "var(--radius)",
        "md": "calc(var(--radius) - 2px)",
        "sm": "calc(var(--radius) - 4px)",
        "xl": "12px",
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px"
      },
      "fontFamily": {
        "sans": [
          "'Inter'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif"
        ],
        "mono": [
          "'Inter'",
          "ui-monospace",
          "'SF Mono'",
          "Monaco",
          "'Cascadia Code'",
          "monospace"
        ]
      },
      "fontSize": {
        "12": [
          "12px",
          {
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "13": [
          "13px",
          {
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "14": [
          "14px",
          {
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "16": [
          "16px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "18": [
          "18px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "20": [
          "20px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "24": [
          "24px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "32": [
          "32px",
          {
            "lineHeight": "32px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "40": [
          "40px",
          {
            "lineHeight": "40px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "48": [
          "48px",
          {
            "lineHeight": "48px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "56": [
          "56px",
          {
            "lineHeight": "56px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "72": [
          "72px",
          {
            "lineHeight": "72px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ],
        "88": [
          "88px",
          {
            "lineHeight": "88px",
            "letterSpacing": "0",
            "fontWeight": "600"
          }
        ]
      },
      "fontWeight": {
        "normal": 400,
        "medium": 500,
        "semibold": 600,
        "bold": 700
      },
      "spacing": {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "6": "1.5rem",
        "8": "2rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem"
      },
      "boxShadow": {
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "DEFAULT": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "purple": "0 0 20px rgba(91, 44, 152, 0.3)"
      },
      "keyframes": {
        "accordion-down": {
          "from": {
            "height": "0"
          },
          "to": {
            "height": "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          "from": {
            "height": "var(--radix-accordion-content-height)"
          },
          "to": {
            "height": "0"
          }
        }
      },
      "animation": {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  }
};
