import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AiService {
  constructor(private config: ConfigService) {}

  async generateStory(prompt: string, model: 'ollama' | 'openai') {
    if (model === 'openai') {
      const baseUrl = this.config.get<string>('OPENAI_BASE_URL');
      const apiKey = this.config.get<string>('OPENAI_API_KEY');
      const openaiModel = this.config.get<string>('OPENAI_MODEL');

      if (!baseUrl || !apiKey || !openaiModel) {
        throw new Error(
          '[AI Service] Faltan variables de entorno para usar OpenAI.',
        );
      }

      const response = await axios.post(
        baseUrl,
        {
          model: openaiModel,
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return (
        response.data.choices?.[0]?.message?.content ??
        'No se pudo generar contenido con OpenAI.'
      );
    } else {
      const ollamaBaseUrl = this.config.get<string>('OLLAMA_BASE_URL');
      const ollamaModel = this.config.get<string>('OLLAMA_MODEL');

      if (!ollamaBaseUrl || !ollamaModel) {
        throw new Error(
          '[AI Service] Faltan variables de entorno para usar Ollama.',
        );
      }

      const response = await axios.post(`${ollamaBaseUrl}/api/generate`, {
        model: ollamaModel,
        prompt,
      });

      return (
        response.data.response ?? 'No se pudo generar contenido con Ollama.'
      );
    }
  }
}
