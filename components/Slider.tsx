import React from 'react';
type Props = { id: string; label: string; min: number; max: number; step?: number; value: number; onChange: (v: number)=>void };
export const Slider: React.FC<Props> = ({ id, label, min, max, step=0.1, value, onChange }) => (
  <label htmlFor={id} className="block space-y-2">
    <div className="flex items-center justify-between text-sm"><span className="font-medium">{label}</span><span className="tabular-nums text-gray-500">{value}</span></div>
    <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e)=>onChange(parseFloat(e.target.value))} className="w-full accent-blue-600" />
  </label>
);
