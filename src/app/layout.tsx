// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Yeji Yu - Frontend Developer",
  description: "Frontend developer portfolio with security background",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
          <LanguageProvider>
          <div className="min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[length:30px_30px]" />
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-[100px]" />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="relative">
              {children}
            </div>
          </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}