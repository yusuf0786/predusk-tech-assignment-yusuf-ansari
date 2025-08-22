"use client";

import React, { createContext, useContext, useMemo, useState } from 'react';

export type Message = { role: 'user'|'assistant'; content: string };

export interface SessionState {
  modelId: string | null;
  temperature: number;
  maxTokens: number;
  topP: number;
  messages: Message[];
}

const defaultState: SessionState = {
  modelId: null,
  temperature: 0.7,
  maxTokens: 512,
  topP: 1.0,
  messages: []
};

const Ctx = createContext<any>(null);

export const SessionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, setState] = useState<SessionState>(defaultState);

  const api = useMemo(() => ({
    ...state,
    setModelId: (id: string) => setState(s => ({ ...s, modelId: id })),
    setTemperature: (v: number) => setState(s => ({ ...s, temperature: v })),
    setMaxTokens: (v: number) => setState(s => ({ ...s, maxTokens: Math.round(v) })),
    setTopP: (v: number) => setState(s => ({ ...s, topP: v })),
    addMessage: (role: 'user'|'assistant', content: string) => setState(s => ({ ...s, messages: [...s.messages, { role, content }] })),
    reset: () => setState(defaultState)
  }), [state]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
};

export const useSession = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSession must be used inside SessionProvider');
  return ctx;
};
