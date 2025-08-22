import React from 'react';
export const ChatBubble: React.FC<{role:'user'|'assistant'; content:string}> = ({ role, content }) => {
  const isUser = role==='user';
  return (
    <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${isUser ? 'self-start bg-gray-100 dark:bg-gray-800' : 'self-end bg-blue-50 dark:bg-blue-900/30'}`}>
      <div className="mb-1 text-xs uppercase tracking-wide text-gray-500">{isUser ? 'You' : 'AI'}</div>
      <div className="whitespace-pre-wrap">{content}</div>
    </div>
  );
};
