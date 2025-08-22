# AI Studio — Frontend Prototype

## Live Demo
*(deploy to Vercel or Netlify and paste link here)*

## Research
Reviewed UIs:
- **OpenAI Playground** — Simple parameter controls (temperature/top_p), system roles, quick model selection.
- **Anthropic Claude** — Chat-first interface with context-aware prompts and well-structured conversation UI.
- **Hugging Face Spaces** — Easy to expose model demos, templates, and dataset-driven inputs.
- **Microsoft Copilot patterns** — Good templates, action shortcuts, and theming.

Chosen core features:
1. Model selector (sidebar)
2. Prompt templates (save/load)
3. Parameters panel (temperature, max tokens, top_p)
4. Chat / output area with copy + download
5. Theme toggle (persisted)
6. Responsive layout + accessibility polish

## Design
- Mockup: `/public/mockups/ai-studio-mockup.png`
- Tailwind mapping:
  - Spacing: `p-4`, `gap-4`, `rounded-2xl`
  - Typography: `text-lg` headings, `text-sm` body
  - Color: CSS variables set in `globals.css` and referenced with Tailwind utilities
- Design -> Code: header, left rail, main area mapped to grid; components implemented as small, focused React components.

## Development
- Tech: Next.js (App router), TypeScript (strict), Tailwind, Framer Motion for small polish.
- Mock APIs: `/pages/api/models` and `/pages/api/templates` (returns JSON).
- State: `ThemeContext` & `SessionContext` (model, params, messages).
- Accessibility: focus rings, aria labels, keyboard ESC for modal.
- Storybook: include `.storybook` and `stories/` (see folder) for Button, Slider, Modal, ChatBubble.

## Known limitations
- Frontend-only (mocked responses).
- No real model calls or auth.
