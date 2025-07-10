import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimal Portfolio Template",
  description: "A perfect portfolio template that showcases your skills, minimal and modern design. pefect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-900 `}>
        {children}
      </body>
    </html>
  );
}
