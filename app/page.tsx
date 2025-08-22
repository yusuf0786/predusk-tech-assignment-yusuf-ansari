import { ModelSelector } from '../components/ModelSelector';
import { ParametersPanel } from '@/components/ParametersPanel';
import { PromptEditor } from '../components/PromptEditor';
import { ChatArea } from '../components/ChatArea';
import { ThemeToggle } from '../components/ThemeToggle';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Studio — Prototype</h1>
        <div className="flex items-center gap-4">
          {/* <Link href="/mockup" className='text-sm underline'>Mockup</Link> */}
          <ThemeToggle />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <aside className="lg:col-span-3 space-y-4">
          <ModelSelector />
          <ParametersPanel />
        </aside>

        <section className="lg:col-span-9 space-y-4">
          <PromptEditor />
          <div className="h-[520px]">
            <ChatArea />
          </div>
        </section>
      </div>

      <footer className="mt-8 text-center text-xs text-gray-500">
        Built with Next.js + TypeScript + Tailwind (frontend-only mock).
      </footer>
    </main>
  );
}
