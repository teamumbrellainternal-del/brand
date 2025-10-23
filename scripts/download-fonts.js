const fs = require('fs');
const path = require('path');
const https = require('https');

// Inter font files from Google Fonts
const FONTS = [
  {
    name: 'Inter-Regular.woff2',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
    dir: 'inter'
  },
  {
    name: 'Inter-Medium.woff2',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2',
    dir: 'inter'
  },
  {
    name: 'Inter-SemiBold.woff2',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2',
    dir: 'inter'
  },
  {
    name: 'Inter-Bold.woff2',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2',
    dir: 'inter'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function downloadFonts() {
  const fontsDir = path.join(__dirname, '../fonts');
  
  for (const font of FONTS) {
    const dir = path.join(fontsDir, font.dir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const dest = path.join(dir, font.name);
    
    // Skip if already exists
    if (fs.existsSync(dest)) {
      console.log(`✓ ${font.name} already exists`);
      continue;
    }
    
    console.log(`Downloading ${font.name}...`);
    await downloadFile(font.url, dest);
    console.log(`✓ Downloaded ${font.name}`);
  }
  
  // Create license file
  const licensePath = path.join(fontsDir, 'LICENSE.txt');
  if (!fs.existsSync(licensePath)) {
    fs.writeFileSync(licensePath, `Copyright 2020 The Inter Project Authors (https://github.com/rsms/inter)

This Font Software is licensed under the SIL Open Font License, Version 1.1.

Full license: https://github.com/rsms/inter/blob/master/LICENSE.txt
`);
  }
  
  console.log('✅ All fonts ready');
}

downloadFonts().catch(console.error);
