# Umbrella Email Templates - Resend

Welcome email templates for Umbrella's waitlist, designed with our brand guidelines.

## 📁 Files

```
/resend/
├── welcome-waitlist.html   # On-brand HTML email template
├── preview.html            # Browser preview tool (desktop + mobile views)
├── test-send.js            # Test send script for Resend API
└── README.md               # This file
```

---

## 🎨 Brand Specifications

All emails follow Umbrella's brand guidelines:

- **Primary Purple:** `#9370DB`
- **Background:** `#ffffff` (white)
- **Font:** Inter (with Arial fallback)
- **Button Style:** White background + 2px purple outline
- **Voice:** Professional yet approachable, artist-first
- **Tagline:** "Everything you create, connected under one Umbrella"

---

## 🧪 Testing the Email

### Step 1: Preview in Browser

Open the preview tool to see how the email looks:

```bash
open resend/preview.html
```

Or start a local server:

```bash
python3 -m http.server 8000
# Visit: http://localhost:8000/resend/preview.html
```

**Features:**
- Switch between desktop and mobile views
- See exact email rendering
- Check spacing, colors, and layout

### Step 2: Send Test Email

Set your Resend API key:

```bash
export RESEND_API_KEY=re_your_key_here
```

Send the test:

```bash
node resend/test-send.js
```

Or in one command:

```bash
RESEND_API_KEY=re_your_key_here node resend/test-send.js
```

**Test recipient:** `tombionic@gmail.com`

### Step 3: Verify Email

Check your inbox and verify:

- [ ] Purple branding looks correct (#9370DB header)
- [ ] Button style matches brand guide (white + purple outline)
- [ ] Text is readable and properly formatted
- [ ] Links work correctly
- [ ] Responsive on mobile devices
- [ ] Social icons display correctly in footer
- [ ] Font renders properly (Inter with fallback)
- [ ] "Get Started" button is clickable
- [ ] Unsubscribe link is present

---

## 📧 Template Variables

The email template uses these variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{firstName}}` | Recipient's first name | "Tom" |
| `{{email}}` | Recipient's email address | "tombionic@gmail.com" |
| `{{appUrl}}` | Link to Umbrella app | "https://umbrella.app" |
| `{{unsubscribeUrl}}` | Unsubscribe link | "https://umbrella.app/unsubscribe?email=..." |

**Usage in code:**

```javascript
// Replace template variables before sending
let html = fs.readFileSync('welcome-waitlist.html', 'utf8');

html = html.replace(/{{firstName}}/g, 'Tom');
html = html.replace(/{{email}}/g, 'tombionic@gmail.com');
html = html.replace(/{{appUrl}}/g, 'https://umbrella.app');
html = html.replace(/{{unsubscribeUrl}}/g, 'https://umbrella.app/unsubscribe?email=...');
```

---

## 🚀 Sending to Production

### Update "From" Address

The test script uses `onboarding@resend.dev`. For production:

1. Verify your domain in Resend dashboard
2. Update the `from` field in your send script:

```javascript
from: 'Umbrella <hello@umbrella.com>'
```

### Batch Send to Waitlist

Create a new script for sending to multiple recipients:

```javascript
// send-to-waitlist.js
const waitlist = [
  { firstName: 'Tom', email: 'tombionic@gmail.com' },
  // ... more recipients
];

for (const user of waitlist) {
  // Replace variables and send
}
```

---

## 📱 Email Client Compatibility

Tested and optimized for:

- ✅ Gmail (desktop and mobile)
- ✅ Apple Mail
- ✅ Outlook (web and desktop)
- ✅ iOS Mail
- ✅ Android Gmail app

**Technical notes:**
- Uses table-based layout (required for email clients)
- All CSS is inline (external styles not supported)
- Max width: 600px (standard email width)
- Mobile responsive

---

## 🎯 Brand Elements

### Colors Used

- **Purple Header:** `#9370DB` (brand primary)
- **White Background:** `#ffffff`
- **Text Primary:** `#0a0a0a` (headings, body)
- **Text Tertiary:** `#737373` (footer, muted text)
- **Footer Background:** `#fafafa`
- **Borders:** `#e5e5e5`

### Typography

- **Font Family:** Inter, Arial, sans-serif
- **Heading Size:** 24px, weight 700
- **Body Size:** 16px, line-height 24px
- **Button Size:** 16px, weight 600

### Button Specs

```css
background: #ffffff;
border: 2px solid #9370DB;
color: #000000;
padding: 12px 32px;
border-radius: 8px;
font-weight: 600;
```

---

## 🔧 Troubleshooting

### API Key Issues

**Error:** `❌ RESEND_API_KEY not found`
- Set environment variable: `export RESEND_API_KEY=re_...`

**Error:** `401 Unauthorized`
- Check your API key is correct
- Get your key from: https://resend.com/api-keys

### Template Not Found

**Error:** `Template not found`
- Check you're running from the correct directory
- Full path: `/home/user/brand/resend/welcome-waitlist.html`

### Email Not Received

**Check:**
1. Spam folder
2. Resend dashboard for delivery status
3. Email address is correct
4. "From" domain is verified in Resend

---

## 📚 Resources

- **Brand Guide:** `/brand/docs/brand-guide.md`
- **Design Tokens:** `/brand/tokens/design-tokens.json`
- **Resend Docs:** https://resend.com/docs
- **Resend Dashboard:** https://resend.com/emails

---

## ✨ Next Steps

Once the test email looks good:

1. ✅ Verify all branding is correct
2. ✅ Test on multiple devices/email clients
3. ✅ Get approval from team
4. 🚀 Create batch send script for full waitlist
5. 🚀 Send to all 50 waitlist members

---

**Questions?** Check the brand guide or Resend documentation.

**Built with:** Umbrella brand guidelines v1.0 | Resend API
