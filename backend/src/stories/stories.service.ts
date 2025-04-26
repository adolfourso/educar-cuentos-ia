import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from './story.entity';
import { extractContentFromEducAr } from '../utils/scraper.service';
import axios from 'axios';
import { PdfService } from '../utils/pdf.service';
import * as path from 'path';

@Injectable()
export class StoriesService {
  private pdfService = new PdfService();

  constructor(
    @InjectRepository(Story)
    private storyRepo: Repository<Story>,
  ) {}

  async generateAndSaveStory(url1: string, url2: string): Promise<Partial<Story> & { pdfUrl: string }> {
    try {
      const content1 = await extractContentFromEducAr(url1);
      const content2 = await extractContentFromEducAr(url2);

      const prompt = `A partir del siguiente contenido educativo, generá un cuento original para niños que relacione los dos temas.\n\nContenido 1:\n${content1}\n\nContenido 2:\n${content2}\n\nCuento:`;

      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'mistral',
        prompt,
        stream: false,
      });

      const storyText = response.data.response?.trim() ?? 'Error al generar el cuento';

      const newStory = this.storyRepo.create({
        sourceUrl1: url1,
        sourceUrl2: url2,
        content: storyText,
      });

      const saved = await this.storyRepo.save(newStory);

      const fileName = `cuento-${saved.id}.pdf`;
      const pdfUrl = await this.pdfService.generatePdf(storyText, fileName);

      return {
        id: saved.id,
        content: saved.content,
        pdfUrl,  // para acceder vía frontend
      };
    } catch (err) {
      console.error('[❌ ERROR CON OLLAMA]', err);
      throw err;
    }
  }
}
