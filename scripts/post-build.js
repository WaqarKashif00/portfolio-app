const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');
const browserDir = path.join(docsDir, 'browser');

// 1. Move files from docs/browser to docs
if (fs.existsSync(browserDir)) {
    const files = fs.readdirSync(browserDir);
    files.forEach(file => {
        const srcPath = path.join(browserDir, file);
        const destPath = path.join(docsDir, file);

        // Remove destination if it exists (to avoid collision errors on overwrite)
        if (fs.existsSync(destPath)) {
            if (fs.lstatSync(destPath).isDirectory()) {
                fs.rmSync(destPath, { recursive: true, force: true });
            } else {
                fs.unlinkSync(destPath);
            }
        }

        fs.renameSync(srcPath, destPath);
    });

    // 2. Remove docs/browser directory
    fs.rmSync(browserDir, { recursive: true, force: true });
    console.log('Moved files from browser directory to docs root.');
} else {
    console.log('browser directory not found, assuming files are already at root or build failed.');
}

// 3. Create 404.html from index.html
const indexHtml = path.join(docsDir, 'index.html');
const notFoundHtml = path.join(docsDir, '404.html');

if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, notFoundHtml);
    console.log('Created 404.html from index.html');
} else {
    console.error('index.html not found!');
    process.exit(1);
}
