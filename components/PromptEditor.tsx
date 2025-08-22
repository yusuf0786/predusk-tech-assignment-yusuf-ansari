"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { useSession } from "../context/SessionContext";

interface PromptTemplate {
  id: string;
  name: string;
  prompt: string;
}

export const PromptEditor: React.FC = () => {
  const [templates, setTemplates] = useState<PromptTemplate[]>([]);
  const [selected, setSelected] = useState<PromptTemplate | null>(null);

  const { addMessage, modelId, temperature } = useSession();
  const [prompt, setPrompt] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/templates")
      .then((r) => r.json())
      .then((d: PromptTemplate[]) => setTemplates(d))
      .catch(() => {});
  }, []);

  const filtered = useMemo(
    () =>
      templates.filter((t) =>
        t.name.toLowerCase().includes(query.toLowerCase())
      ),
    [templates, query]
  );

  const send = () => {
    if (!prompt.trim()) return;
    addMessage("user", prompt);
    // mocked response
    const reply = `Model: ${modelId ?? "—"} | temp=${temperature}\n\nThis is a mocked response for: ${prompt.slice(
      0,
      120
    )}`;
    setTimeout(() => addMessage("assistant", reply), 300);
    setPrompt("");
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow dark:bg-gray-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Prompt Editor</h3>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Templates
          </Button>
          <Button onClick={send}>Send ▷</Button>
        </div>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt…"
        aria-label="Prompt editor"
        className="h-28 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus-ring dark:border-gray-700 dark:bg-gray-800"
      />

      <div className="mt-2 text-xs text-gray-500">{prompt.length} chars</div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="mb-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="w-full rounded-xl border p-2"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filtered.map((t) => (
            <div key={t.id} className="rounded-xl border p-3">
              <div className="mb-2 text-sm font-medium">{t.name}</div>
              <div className="mb-3 text-xs text-gray-500">{t.prompt}</div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setPrompt(t.prompt);
                    setOpen(false);
                  }}
                >
                  Load
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};
