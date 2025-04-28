'use client';
import { StoryHistoryItem, clearHistory } from '../utils/history';

interface Props {
  history: StoryHistoryItem[];
  onClear: () => void;
}

export default function StoryHistory({ history, onClear }: Props) {
  if (!history.length) return null;

  return (
    <div className="w-full max-w-3xl mt-12 text-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
          📜 Historial de cuentos generados
        </h2>
        <button
          onClick={() => {
            if (confirm('¿Seguro que querés borrar todo el historial de cuentos?')) {
              clearHistory();
              onClear();
            }
          }}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
        >
          🗑️ Limpiar historial
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {history.map((item, index) => (
          <li key={index} className="border p-4 rounded shadow-sm bg-gray-300 flex flex-col gap-2">
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-700 flex justify-between">
              <span>Motor: {item.engine.toUpperCase()}</span>
              <span>{item.timestamp ? new Date(item.timestamp).toLocaleString() : 'Fecha inválida'}</span>
            </div>
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}${item.pdfUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline text-sm hover:text-blue-900"
            >
              📄 Descargar PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
