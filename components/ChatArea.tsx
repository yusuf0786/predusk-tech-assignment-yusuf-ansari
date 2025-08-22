"use client";

import React from 'react';
import { ChatBubble } from './ChatBubble';
import { Button } from './Button';
import { useSession } from '../context/SessionContext';

export const ChatArea: React.FC = () => {
  const { messages } = useSession();

  const copyAll = async () => {
    const text = messages.map((m: { role: 'user'|'assistant', content: string })=>`${m.role==='user' ? 'You' : 'AI'}: ${m.content}`).join('\n\n');
    await navigator.clipboard.writeText(text);
    alert('Copied chat to clipboard');
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(messages, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'chat.json'; a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4 shadow dark:bg-gray-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Chat</h3>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={copyAll}>Copy</Button>
          <Button variant="secondary" onClick={downloadJson}>Download JSON</Button>
        </div>
      </div>
      <div className="flex-1 space-y-3 overflow-auto rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
        {messages.map((m: { role: 'user'|'assistant', content: string }, i: number) => <div key={i} className="flex flex-col"><ChatBubble role={m.role} content={m.content} /></div>)}
        {/* {messages.map((m: string, i: number) => <div key={i} className="flex flex-col"><ChatBubble role={m.role} content={m.content} /></div>)} */}
      </div>
    </div>
  );
};
