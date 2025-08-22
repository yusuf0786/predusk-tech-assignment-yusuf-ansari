"use client";

import React, { useEffect, useState } from 'react';
import { useSession } from '../context/SessionContext';

export const ModelSelector: React.FC = () => {
  const { modelId, setModelId } = useSession();
  const [models, setModels] = useState<{id:string,label:string}[]|null>(null);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    fetch('/api/models').then(r => r.json()).then(d => setModels(d)).catch(()=>setError('Failed to load models'));
  }, []);

  return (
    <aside className="rounded-2xl bg-white p-4 shadow dark:bg-gray-900">
      <h3 className="mb-3 text-lg font-semibold">Models</h3>
      {!models && !error && <div className="text-sm text-gray-500">Loading…</div>}
      {error && <div className="text-sm text-red-600">{error}</div>}
      <ul className="space-y-2">
        {models?.map(m => (
          <li key={m.id}>
            <button aria-pressed={modelId===m.id} onClick={()=>setModelId(m.id)}
              className={`focus-ring w-full rounded-xl px-3 py-2 text-left text-sm ${modelId===m.id ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800'}`}>
              {m.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
