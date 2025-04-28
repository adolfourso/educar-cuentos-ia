'use client';

import React from 'react';

interface Props {
  selected: 'ollama' | 'openai';
  onChange: (value: 'ollama' | 'openai') => void;
}

export default function ModelSelector({ selected, onChange }: Props) {
  return (
    <div className="flex items-center gap-6">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="model"
          value="ollama"
          checked={selected === 'ollama'}
          onChange={() => onChange('ollama')}
          className="accent-blue-600 w-4 h-4"
        />
        <span className="text-gray-700">Ollama</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="model"
          value="openai"
          checked={selected === 'openai'}
          onChange={() => onChange('openai')}
          className="accent-green-600 w-4 h-4"
        />
        <span className="text-gray-700">OpenAI</span>
      </label>
    </div>
  );
}
