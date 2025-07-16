import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

try {
  // Check if dist/index.html exists
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Make sure to run "npm run build" first.');
    process.exit(1);
  }

  // Copy index.html to 404.html
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✅ Successfully copied dist/index.html to dist/404.html');
  console.log('📝 This enables SPA routing on GitHub Pages');
} catch (error) {
  console.error('❌ Error copying index.html to 404.html:', error.message);
  process.exit(1);
} 