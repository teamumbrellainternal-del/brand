#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Hardcoded API key
const RESEND_API_KEY = 're_UPjE9GRb_CuKLFE3C8udnyM7LDRgUJTpZ';

// Parse CSV
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',');

  return lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      email: values[0].trim(),
      firstName: values[1].trim()
    };
  });
}

// Remove duplicates
function removeDuplicates(recipients) {
  const seen = new Set();
  return recipients.filter(recipient => {
    if (seen.has(recipient.email.toLowerCase())) {
      console.log(`⚠️  Skipping duplicate: ${recipient.email}`);
      return false;
    }
    seen.add(recipient.email.toLowerCase());
    return true;
  });
}

// Send email
async function sendEmail(recipient, html) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Umbrella <onboarding@resend.dev>',
      to: recipient.email,
      subject: 'Welcome to Umbrella - You\'re In! 🎵',
      html: html,
      tags: [
        { name: 'campaign', value: 'waitlist-welcome' },
        { name: 'audience', value: 'beta-users' }
      ]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || JSON.stringify(data));
  }

  return data;
}

// Sleep helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function
async function sendToWaitlist() {
  console.log('🚀 Umbrella Waitlist Email Sender\n');

  // Parse command line args
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const limitArg = args.find(arg => arg.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.split('=')[1]) : null;

  // Load recipients
  const csvPath = path.join(__dirname, 'waitlist.csv');
  let recipients = parseCSV(csvPath);
  recipients = removeDuplicates(recipients);

  if (limit) {
    recipients = recipients.slice(0, limit);
    console.log(`📊 Limiting to first ${limit} recipients\n`);
  }

  console.log(`📧 Total recipients: ${recipients.length}\n`);

  if (dryRun) {
    console.log('🔍 DRY RUN - No emails will be sent\n');
    console.log('Recipients:');
    recipients.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.firstName} <${r.email}>`);
    });
    console.log('\nRun without --dry-run to send emails');
    return;
  }

  // Confirm before sending
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = await new Promise(resolve => {
    readline.question(`\n⚠️  Send welcome email to ${recipients.length} people? (yes/no): `, resolve);
  });
  readline.close();

  if (answer.toLowerCase() !== 'yes') {
    console.log('❌ Cancelled');
    return;
  }

  // Load template
  const templatePath = path.join(__dirname, 'welcome-waitlist.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  // Send emails
  const results = {
    sent: [],
    failed: []
  };

  console.log('\n📤 Sending emails...\n');

  for (let i = 0; i < recipients.length; i++) {
    const recipient = recipients[i];
    const progress = `[${i + 1}/${recipients.length}]`;

    try {
      // Replace template variables
      let html = template
        .replace(/\{\{firstName\}\}/g, recipient.firstName)
        .replace(/\{\{email\}\}/g, recipient.email)
        .replace(/\{\{appUrl\}\}/g, 'https://umbrellalive.com')
        .replace(/\{\{unsubscribeUrl\}\}/g, `https://umbrellalive.com/unsubscribe?email=${encodeURIComponent(recipient.email)}`);

      const data = await sendEmail(recipient, html);

      console.log(`✅ ${progress} Sent to ${recipient.firstName} <${recipient.email}>`);
      results.sent.push({ ...recipient, messageId: data.id });

      // Rate limiting: wait 2 seconds between emails
      if (i < recipients.length - 1) {
        await sleep(2000);
      }
    } catch (error) {
      console.error(`❌ ${progress} Failed: ${recipient.email} - ${error.message}`);
      results.failed.push({ ...recipient, error: error.message });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Sent: ${results.sent.length}/${recipients.length}`);
  console.log(`❌ Failed: ${results.failed.length}/${recipients.length}`);

  // Save logs
  const logPath = path.join(__dirname, 'send-log.txt');
  const timestamp = new Date().toISOString();
  let log = `Umbrella Waitlist Email Send - ${timestamp}\n\n`;
  log += `Total: ${recipients.length}\n`;
  log += `Sent: ${results.sent.length}\n`;
  log += `Failed: ${results.failed.length}\n\n`;
  log += 'SENT:\n';
  results.sent.forEach(r => log += `  ✅ ${r.firstName} <${r.email}> - ${r.messageId}\n`);
  log += '\nFAILED:\n';
  results.failed.forEach(r => log += `  ❌ ${r.firstName} <${r.email}> - ${r.error}\n`);

  fs.writeFileSync(logPath, log);
  console.log(`\n📝 Log saved to: ${logPath}`);

  if (results.failed.length > 0) {
    const failedPath = path.join(__dirname, 'failed.txt');
    const failedContent = results.failed.map(r => `${r.email},${r.firstName},${r.error}`).join('\n');
    fs.writeFileSync(failedPath, failedContent);
    console.log(`❌ Failed emails saved to: ${failedPath}`);
  }

  console.log('\n✨ Done!\n');
}

// Run
sendToWaitlist().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
