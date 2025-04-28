import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // HABILITAR CORS
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  });

  // Rutas estáticas de PDFs
  app.useStaticAssets(join(__dirname, '..', 'pdfs'), {
    prefix: '/pdfs/',
  });

  await app.listen(3000);
}
bootstrap();
