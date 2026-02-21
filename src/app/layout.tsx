import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taikai",
  description: "A tournament management software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-neutral-200 antialiased dark:bg-gray-800 dark:text-white`}
      >
        <header className="space-x-1 bg-white p-5 text-left shadow-md shadow-blue-500/50 dark:bg-gray-900">
          <h1 className="text-4xl font-bold">🥋 Taikai</h1>
          <h2>A tournament management app</h2>
        </header>
        <main className="flex flex-1 items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
