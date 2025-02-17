// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen">
            {/* Background Grid Effect */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[length:30px_30px]" />
            
            {/* Glow Effects */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="relative">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}