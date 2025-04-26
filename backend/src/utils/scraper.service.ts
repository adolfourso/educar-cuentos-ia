import axios from 'axios';
import * as cheerio from 'cheerio';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED',
});

export async function extractContentFromEducAr(url: string): Promise<string> {
  try {
    console.log('[🔍 SCRAPER] Extrayendo contenido de:', url);
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36',
        'Accept-Language': 'es-AR,es;q=0.9',
        'Referer': 'https://www.educ.ar/',
      },
      timeout: 15000, // 15 segundos
    });

    const $ = cheerio.load(response.data);

    // Podés ajustar los selectores para más precisión si sabés que cambian
    const content = $('section, .descripcion-recurso, p, article')
      .text()
      .trim()
      .slice(0, 4000); // limitar texto si querés

    if (!content) {
      throw new Error('No se extrajo contenido válido');
    }

    return content;
  } catch (error) {
    console.error('[❌ ERROR SCRAPER]', error.message || error);
    return 'No se pudo extraer contenido del sitio';
  }
}
