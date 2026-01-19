const fs = require('fs');
const path = require('path');

// Create build directory
const buildDir = path.join(__dirname, 'build', 'pdfjs');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy PDF.js files
const sourceDir = path.join(__dirname, 'node_modules', 'pdfjs-dist', 'build');
const files = ['pdf.min.js', 'pdf.worker.min.js'];

files.forEach(file => {
  const src = path.join(sourceDir, file);
  const dest = path.join(buildDir, file);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${file} to build/pdfjs/`);
});

console.log('Build completed successfully!');
