import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { Story } from './story.entity';
import { PdfService } from '../utils/pdf.service'; // 👈

@Module({
  imports: [TypeOrmModule.forFeature([Story])],
  controllers: [StoriesController],
  providers: [StoriesService, PdfService], // 👈 agregalo acá
})
export class StoriesModule {}
