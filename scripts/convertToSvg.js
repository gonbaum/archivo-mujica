import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de entrada y salida
const inputPath = path.join(__dirname, '../public/pepe_logo.png');
const outputPath = path.join(__dirname, '../public/pepe_logo.svg');

// Convertir PNG a SVG
async function convertToSvg() {
  try {
    // Primero, obtener los metadatos de la imagen
    const metadata = await sharp(inputPath).metadata();
    
    // Crear un SVG simple que contenga la imagen PNG como base64
    const base64Image = fs.readFileSync(inputPath, { encoding: 'base64' });
    
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${metadata.width}" height="${metadata.height}" 
     xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <image width="${metadata.width}" height="${metadata.height}" 
         xlink:href="data:image/png;base64,${base64Image}" />
</svg>`;
    
    // Guardar el archivo SVG
    fs.writeFileSync(outputPath, svgContent);
    console.log(`SVG guardado correctamente en: ${outputPath}`);
    
  } catch (error) {
    console.error('Error al convertir la imagen a SVG:', error);
  }
}

// Ejecutar la conversión
convertToSvg();
