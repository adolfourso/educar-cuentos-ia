import { Injectable } from '@nestjs/common';
import { AiService } from '../utils/ai.service';
import { ScraperService } from '../utils/scraper.service';
import { StoryRepository } from './story.repository';
import { PdfService } from '../utils/pdf.service'; // <-- Agregalo

@Injectable()
export class StoriesService {
  constructor(
    private readonly aiService: AiService,
    private readonly scraperService: ScraperService,
    private readonly storyRepository: StoryRepository,
    private readonly pdfService: PdfService, // <-- Agregalo
  ) {}

  async generateAndSaveStory(
    url1: string,
    url2: string,
    model: 'ollama' | 'openai',
  ) {
    const content1 = await this.scraperService.extractContent(url1);
    const content2 = await this.scraperService.extractContent(url2);

    const prompt = `Generá un cuento educativo basado en el contenido de estas dos notas:\n- ${content1}\n- ${content2}`;

    const start = Date.now();
    const generatedContent = await this.aiService.generateStory(prompt, model);
    const end = Date.now();

    const newStory = await this.storyRepository.save({
      content: generatedContent,
      sourceUrl1: url1,
      sourceUrl2: url2,
    });

    // ✨ Generar PDF
    const pdfUrl = await this.pdfService.generatePdf(
      generatedContent,
      `cuento-${newStory.id}.pdf`,
    );

    return {
      story: newStory,
      generationTimeMs: end - start,
      pdfUrl, // <-- ¡Ahora devolvemos la URL del PDF!
    };
  }
}
