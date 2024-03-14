import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAI Railink",
  description: "Transportasi menuju bandara dengan cepat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
