const fs = require('fs');
const path = require('path');

// Read the generated index.html
const htmlPath = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace module script with regular script and fix the path
html = html.replace('type="module" crossorigin', 'crossorigin');
html = html.replace('/assets/index.js', '/assets/portfolio.js');

// Add React CDN scripts before the portfolio script
const reactCDN = `
  <!-- React CDN - Using the working approach -->
  <script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>`;

html = html.replace('</head>', `${reactCDN}\n</head>`);

// Write back the modified HTML
fs.writeFileSync(htmlPath, html);

console.log('✅ Fixed script tag and added React CDN in index.html');
