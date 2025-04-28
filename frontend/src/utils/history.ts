// frontend/src/utils/history.ts

export type StoryHistoryItem = {
  title: string;
  engine: 'ollama' | 'openai';
  timestamp: number;
  pdfUrl: string;
};

const HISTORY_KEY = 'storyHistory';

export function saveStoryToHistory(item: StoryHistoryItem) {
  const history = getHistory();
  history.unshift(item); // Agrega al principio
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 10))); // Máximo 10 ítems
}

export function getHistory(): StoryHistoryItem[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(HISTORY_KEY);
  return raw ? (JSON.parse(raw) as StoryHistoryItem[]) : [];
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
