import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { ScraperService } from '../utils/scraper.service';
import { StoryRepository } from './story.repository';
import { AiService } from '../utils/ai.service';
import { PdfService } from '../utils/pdf.service';

@Module({
  controllers: [StoriesController],
  providers: [
    StoriesService,
    ScraperService,
    AiService,
    StoryRepository,
    PdfService,
  ],
})
export class StoriesModule {}
