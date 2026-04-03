import fs from 'fs';
import path from 'path';

const srcDir = 'c:\\Users\\Lenovo\\serviceweb\\webservice\\src';
const publicDir = 'c:\\Users\\Lenovo\\serviceweb\\webservice\\public';

const files = [];

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            walk(file);
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.js')) {
                files.push(file);
            }
        }
    });
}

walk(srcDir);

const usedImages = new Set();
files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/\/assets\/[^"'\s>]+/g);
    if (matches) {
        matches.forEach(m => usedImages.add(m));
    }
});

console.log("Checking used images:");
usedImages.forEach(img => {
    const fullPath = path.join(publicDir, img);
    if (fs.existsSync(fullPath)) {
        console.log(`[OK] ${img}`);
    } else {
        console.log(`[MISSING] ${img}`);
    }
});
