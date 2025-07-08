// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/contexts/language-context";

export const metadata: Metadata = {
  title: "Yeji Yu - Security Developer",
  description: "Brutalist portfolio showcasing security and development projects",
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
          <div className="min-h-screen bg-black">
            {/* Brutalist Grid Background */}
            <div className="fixed inset-0 brutalist-grid opacity-10" />
            
            {/* Floating Geometric Shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-8 h-8 bg-orange-500 transform rotate-45 animate-pulse" />
              <div className="absolute top-1/3 right-20 w-6 h-6 bg-lime-400 rounded-full animate-bounce" />
              <div className="absolute bottom-1/3 left-20 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-pink-500 brutalist-shake" />
              <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-orange-500 transform -rotate-12 brutalist-pulse" />
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
