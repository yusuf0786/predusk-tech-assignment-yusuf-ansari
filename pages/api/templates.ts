// pages/api/templates.ts
import type { NextApiRequest, NextApiResponse } from 'next';
const templates = [
  { id: 'summarize', name: 'Summarize', prompt: 'Summarize the following text in 5 bullets:' },
  { id: 'bug-triage', name: 'Bug Triage', prompt: 'You are a triage assistant. Categorize and suggest severity:' },
  { id: 'marketing', name: 'Marketing Taglines', prompt: 'Generate 10 short taglines for a fintech app targeting students:' }
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => res.status(200).json(templates), 250);
}
