'use client';
interface Props {
  story: string;
  pdfUrl?: string;
  engine: 'ollama' | 'openai';
  generationTimeMs?: number;
}

export default function StoryResult({ story, pdfUrl, engine, generationTimeMs }: Props) {
  if (!story) return null;

  return (
    <div className="w-full max-w-3xl mt-6 p-4 bg-gray-300 border rounded shadow whitespace-pre-wrap text-gray-900">
      {story}

      <div className="mt-4 flex flex-col items-start gap-2">
        {pdfUrl && (
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}${pdfUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline hover:text-blue-900"
          >
            📄 Descargar cuento en PDF
          </a>
        )}

        {generationTimeMs !== undefined && (
          <div className="text-sm text-gray-700">
            ✨ Generado con <strong>{engine.toUpperCase()}</strong> en {(generationTimeMs / 1000).toFixed(1)} segundos
          </div>
        )}
      </div>
    </div>
  );
}
