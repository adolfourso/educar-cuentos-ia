'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
      <span className="ml-3 text-blue-600 font-semibold">Generando cuento...</span>
    </div>
  );
}
