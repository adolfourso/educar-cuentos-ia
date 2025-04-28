'use client';

import { useState, useEffect } from 'react';
import StoryForm from '../components/StoryForm';
import StoryResult from '../components/StoryResult';
import StoryHistory from '../components/StoryHistory';
import { saveStoryToHistory, getHistory, clearHistory, StoryHistoryItem } from '../utils/history';

export default function Home() {
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [story, setStory] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [engine, setEngine] = useState<'ollama' | 'openai'>('ollama');
  const [generationTime, setGenerationTime] = useState<number | null>(null);
  const [history, setHistory] = useState<StoryHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const generateStory = async () => {
    setLoading(true);
    setStory('');
    setPdfUrl('');
    setGenerationTime(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url1, url2, model: engine }),
      });

      const data = await res.json();
      setStory(data.content || 'No se pudo generar el cuento.');
      setPdfUrl(data.pdfUrl || '');
      setGenerationTime(data.generationTimeMs || null);

      if (data.content && data.pdfUrl) {
        const newItem: StoryHistoryItem = {
          title: data.content.slice(0, 30) + '...',
          engine,
          timestamp: Date.now(),
          pdfUrl: data.pdfUrl,
        };
        saveStoryToHistory(newItem);
        setHistory(getHistory());
      }
    } catch (err) {
      setStory('Ocurrió un error al generar el cuento.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-8">
      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <StoryForm
          url1={url1}
          url2={url2}
          engine={engine}
          loading={loading}
          onUrl1Change={setUrl1}
          onUrl2Change={setUrl2}
          onEngineChange={setEngine}
          onGenerate={generateStory}
        />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <StoryResult
          loading={loading}
          story={story}
          pdfUrl={pdfUrl}
          engine={engine}
          generationTime={generationTime}
        />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <StoryHistory
          history={history}
          onClear={() => {
            if (confirm('¿Seguro que querés borrar todo el historial de cuentos?')) {
              clearHistory();
              setHistory([]);
            }
          }}
        />
      </section>
    </main>
  );
}
