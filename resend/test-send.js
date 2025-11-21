#!/usr/bin/env node

/**
 * Test Resend Email Script
 *
 * Sends a test welcome email using the Resend API
 * Usage: node test-send.js
 *
 * Required: RESEND_API_KEY environment variable
 */

const fs = require('fs');
const path = require('path');

async function sendTestEmail() {
  console.log('🚀 Umbrella Email Test - Resend API\n');

  // Check for API key
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not found in environment\n');
    console.log('Set it with:');
    console.log('  export RESEND_API_KEY=re_your_key_here\n');
    console.log('Or:');
    console.log('  RESEND_API_KEY=re_your_key_here node test-send.js\n');
    process.exit(1);
  }

  console.log('✓ API key found');

  // Load email template
  const templatePath = path.join(__dirname, 'welcome-waitlist.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template not found at: ${templatePath}`);
    process.exit(1);
  }

  console.log('✓ Template loaded');

  let html = fs.readFileSync(templatePath, 'utf8');

  // Test data
  const testData = {
    firstName: 'Tom',
    email: 'tombionic@gmail.com',
    appUrl: 'https://umbrella.app',
    unsubscribeUrl: 'https://umbrella.app/unsubscribe?email=tombionic@gmail.com'
  };

  // Replace all template variables
  Object.keys(testData).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    html = html.replace(regex, testData[key]);
  });

  console.log('✓ Template variables replaced\n');
  console.log('📧 Sending test email...');
  console.log(`   To: ${testData.email}`);
  console.log(`   Subject: Welcome to Umbrella - You're In! 🎵\n`);

  // Send via Resend API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Umbrella <onboarding@resend.dev>',
        to: testData.email,
        subject: 'Welcome to Umbrella - You\'re In! 🎵',
        html: html
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Test email sent successfully!\n');
      console.log('📬 Message ID:', data.id);
      console.log(`📮 Check inbox: ${testData.email}\n`);
      console.log('Next steps:');
      console.log('  1. Check your email inbox');
      console.log('  2. Verify purple branding looks correct');
      console.log('  3. Test button click (should go to umbrella.app)');
      console.log('  4. Check mobile responsiveness\n');
    } else {
      console.error('❌ Failed to send email\n');
      console.error('Status:', response.status, response.statusText);
      console.error('Error:', JSON.stringify(data, null, 2));

      if (response.status === 401) {
        console.error('\n💡 Tip: Check your API key is valid');
      } else if (response.status === 422) {
        console.error('\n💡 Tip: Check the "from" email domain is verified in Resend');
      }

      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
    process.exit(1);
  }
}

// Run the script
sendTestEmail().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
