export interface StoryHistoryItem {
    title: string;
    engine: 'ollama' | 'openai';
    timestamp: number;
    pdfUrl: string;
  }
  