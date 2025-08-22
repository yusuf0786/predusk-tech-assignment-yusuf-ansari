// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { SessionProvider } from '../context/SessionContext';

export const metadata = {
  title: 'AI Studio — Prototype',
  description: 'Frontend-only AI interface prototype'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
