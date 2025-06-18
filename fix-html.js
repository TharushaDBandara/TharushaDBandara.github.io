const fs = require('fs');
const path = require('path');

// Read the generated index.html
const htmlPath = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace module script with regular script
html = html.replace('type="module" crossorigin', 'crossorigin');

// Write back the modified HTML
fs.writeFileSync(htmlPath, html);

console.log('✅ Fixed script tag in index.html');
