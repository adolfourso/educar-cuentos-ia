'use client';

interface StoryFormProps {
  url1: string;
  url2: string;
  engine: 'ollama' | 'openai';
  loading: boolean;
  onUrl1Change: (value: string) => void;
  onUrl2Change: (value: string) => void;
  onEngineChange: (value: 'ollama' | 'openai') => void;
  onGenerate: () => void;
}

export default function StoryForm({
  url1,
  url2,
  engine,
  loading,
  onUrl1Change,
  onUrl2Change,
  onEngineChange,
  onGenerate,
}: StoryFormProps) {
  return (
    <div className="flex flex-col gap-4 text-gray-900">
      <h1 className="text-2xl font-bold">Generar un nuevo cuento</h1>

      <div className="flex gap-4 items-center">
        <label className="font-semibold">Motor de IA:</label>
        <label>
          <input
            type="radio"
            value="ollama"
            checked={engine === 'ollama'}
            onChange={() => onEngineChange('ollama')}
          /> Ollama
        </label>
        <label>
          <input
            type="radio"
            value="openai"
            checked={engine === 'openai'}
            onChange={() => onEngineChange('openai')}
          /> OpenAI
        </label>
      </div>

      <input
        type="text"
        placeholder="URL 1 de educ.ar"
        value={url1}
        onChange={(e) => onUrl1Change(e.target.value)}
        className="border px-4 py-2 w-full rounded text-gray-900"
      />
      <input
        type="text"
        placeholder="URL 2 de educ.ar"
        value={url2}
        onChange={(e) => onUrl2Change(e.target.value)}
        className="border px-4 py-2 w-full rounded text-gray-900"
      />

      <button
        onClick={onGenerate}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
      >
        {loading ? 'Generando...' : 'Generar cuento'}
      </button>
    </div>
  );
}
