import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class PdfService {
  generatePdf(content: string, fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const outputDir = join(__dirname, '..', '..', 'pdfs'); // correcto
      const filePath = join(outputDir, fileName);

      fs.mkdirSync(outputDir, { recursive: true });

      const doc = new PDFDocument();
      const stream = fs.createWriteStream(filePath);

      doc.pipe(stream);
      doc.fontSize(14).text(content, {
        align: 'left',
      });
      doc.end();

      stream.on('finish', () => resolve(`/pdfs/${fileName}`));
      stream.on('error', reject);
    });
  }
}
