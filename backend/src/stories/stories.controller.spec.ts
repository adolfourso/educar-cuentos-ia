import { Test, TestingModule } from '@nestjs/testing';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';

describe('StoriesController', () => {
  let controller: StoriesController;

  const mockStory = {
    id: 'test123',
    content: 'Había una vez un cuento generado para testeo...',
  };

  const mockService = {
    generateAndSaveStory: jest.fn().mockResolvedValue({
      story: mockStory,
      generationTimeMs: 1234,
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoriesController],
      providers: [{ provide: StoriesService, useValue: mockService }],
    }).compile();

    controller = module.get<StoriesController>(StoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('debería generar un cuento y devolver la estructura esperada', async () => {
    const result = await controller.generate({
      url1: 'https://educ.ar/uno',
      url2: 'https://educ.ar/dos',
      model: 'openai',
    });

    expect(result).toEqual({
      id: 'test123',
      content: mockStory.content,
      pdfUrl: '/pdfs/cuento-test123.pdf',
      engine: 'openai',
      generationTimeMs: 1234,
    });

    expect(mockService.generateAndSaveStory).toHaveBeenCalledWith(
      'https://educ.ar/uno',
      'https://educ.ar/dos',
      'openai',
    );
  });
});
