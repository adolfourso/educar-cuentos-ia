import { Controller, Post, Body } from '@nestjs/common';
import { StoriesService } from './stories.service';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Post('generate')
  async generate(@Body() body: { url1: string; url2: string }) {
    console.log('[DEBUG] Body recibido:', body);
    try {
      const story = await this.storiesService.generateAndSaveStory(body.url1, body.url2);
      console.log('[DEBUG] Historia generada:', story);
      return {
        id: story.id,
        content: story.content,
        pdfUrl: `/pdfs/cuento-${story.id}.pdf`,
      };
    } catch (error) {
      console.error('[ERROR] Al generar historia:', error);
      throw error;
    }
  }
}
