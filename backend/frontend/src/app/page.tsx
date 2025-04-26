'use client';

import { useState } from 'react';

export default function Home() {
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    setLoading(true);
    setStory('');

    try {
      const res = await fetch('http://localhost:3000/stories/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url1, url2 }),
      });

      const data = await res.json();
      setStory(data.content || 'No se pudo generar el cuento.');
    } catch (err) {
      setStory('Ocurrió un error al generar el cuento.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6 bg-white text-gray-800 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Generador de cuentos educativos</h1>

      <input
        type="text"
        placeholder="URL 1 de educ.ar"
        value={url1}
        onChange={(e) => setUrl1(e.target.value)}
        className="border px-4 py-2 w-full max-w-xl rounded"
      />
      <input
        type="text"
        placeholder="URL 2 de educ.ar"
        value={url2}
        onChange={(e) => setUrl2(e.target.value)}
        className="border px-4 py-2 w-full max-w-xl rounded"
      />

      <button
        onClick={generateStory}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Generando...' : 'Generar cuento'}
      </button>

      {loading && (
        <div className="mt-6 text-blue-600 font-semibold animate-pulse">
          🧠 Generando cuento...
        </div>
      )}

      {!loading && story && (
        <div className="w-full max-w-3xl mt-6 p-4 bg-gray-50 border rounded shadow whitespace-pre-wrap">
          {story}
        </div>
      )}
    </main>
  );
}
