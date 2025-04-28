import { Controller, Post, Body } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Post('generate')
  async generate(
    @Body() body: { url1: string; url2: string; model: 'ollama' | 'openai' },
  ) {
    console.log('[DEBUG] Body recibido:', body);

    try {
      const { story, generationTimeMs } =
        await this.storiesService.generateAndSaveStory(
          body.url1,
          body.url2,
          body.model,
        );

      console.log('[DEBUG] Historia generada:', story);

      return {
        id: story.id,
        content: story.content,
        pdfUrl: `/pdfs/cuento-${story.id}.pdf`,
        engine: body.model, // Nuevo: motor usado
        generationTimeMs, // Nuevo: tiempo de generación
      };
    } catch (error) {
      console.error('[ERROR] Al generar historia:', error);
      throw error;
    }
  }
}
