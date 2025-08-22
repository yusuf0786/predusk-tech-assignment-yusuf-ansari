"use client";

import React from 'react';
import { Slider } from './Slider';
import { useSession } from '../context/SessionContext';

export const ParametersPanel: React.FC = () => {
  const { temperature, maxTokens, topP, setTemperature, setMaxTokens, setTopP } = useSession();
  return (
    <div className="rounded-2xl bg-white p-4 shadow dark:bg-gray-900">
      <h3 className="mb-3 text-lg font-semibold">Parameters</h3>
      <div className="space-y-4">
        <Slider id="temp" label="Temperature" min={0} max={1} step={0.1} value={Number(temperature.toFixed(1))} onChange={setTemperature} />
        <Slider id="max" label="Max tokens" min={64} max={2048} step={32} value={maxTokens} onChange={setMaxTokens} />
        <Slider id="top" label="Top P" min={0} max={1} step={0.05} value={Number(topP.toFixed(2))} onChange={setTopP} />
      </div>
    </div>
  );
};
