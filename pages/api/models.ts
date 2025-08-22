// pages/api/models.ts
import type { NextApiRequest, NextApiResponse } from 'next';
const models = [
  { id: 'gpt-4o', label: 'GPT-4o' },
  { id: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
  { id: 'claude-3.5', label: 'Claude 3.5' },
  { id: 'mistral-large', label: 'Mistral Large' }
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => res.status(200).json(models), 250);
}
