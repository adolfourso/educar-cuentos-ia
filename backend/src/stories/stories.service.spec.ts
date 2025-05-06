import { Test, TestingModule } from '@nestjs/testing';
import { StoriesService } from './stories.service';
import { AiService } from '../utils/ai.service';
import { ScraperService } from '../utils/scraper.service';
import { StoryRepository } from './story.repository';
import { PdfService } from '../utils/pdf.service';

describe('StoriesService', () => {
  let service: StoriesService;

  // Mocks que vamos a usar y validar
  let aiService: any;
  let scraperService: any;
  let storyRepository: any;
  let pdfService: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoriesService,
        {
          provide: AiService,
          useValue: (aiService = {
            generateStory: jest
              .fn()
              .mockResolvedValue(
                'Había una vez un cuento generado para testeo...',
              ),
          }),
        },
        {
          provide: ScraperService,
          useValue: (scraperService = {
            extractContent: jest
              .fn()
              .mockResolvedValue('Contenido simulado para testing'),
          }),
        },
        {
          provide: StoryRepository,
          useValue: (storyRepository = {
            save: jest.fn().mockImplementation((story) => ({
              ...story,
              id: 'mock-id-123',
            })),
          }),
        },
        {
          provide: PdfService,
          useValue: (pdfService = {
            generatePdf: jest.fn(),
          }),
        },
      ],
    }).compile();

    service = module.get<StoriesService>(StoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('debería generar y guardar una historia completa con mocks', async () => {
    const result = await service.generateAndSaveStory(
      'https://educ.ar/uno',
      'https://educ.ar/dos',
      'openai',
    );

    expect(result.story).toBeDefined();
    expect(result.story.id).toBe('mock-id-123');
    expect(result.story.content).toContain('Había una vez');
    expect(result.generationTimeMs).toBeGreaterThanOrEqual(0);

    // Verificar llamadas a servicios mockeados
    expect(scraperService.extractContent).toHaveBeenCalledTimes(2);
    expect(aiService.generateStory).toHaveBeenCalled();
    expect(pdfService.generatePdf).toHaveBeenCalled();
    expect(storyRepository.save).toHaveBeenCalled();
  });
});
