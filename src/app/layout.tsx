import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Metrika from "./components/Metrika";
import { Suspense } from "react";
import { SEO } from "@/seo";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = SEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={rubik.className}>
        {children}
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
