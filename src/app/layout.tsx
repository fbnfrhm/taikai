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
        className={`bg-slate-100 dark:bg-slate-800 dark:text-white antialiased`}
      >
        <header className="text-center space-x-1 mb-5">
          <h1 className="text-3xl font-bold">Taikai</h1>
          <h2 className="text-sm">A tournament management tool</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
