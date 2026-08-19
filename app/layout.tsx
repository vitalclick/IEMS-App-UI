import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RoleSwitcher from "@/components/RoleSwitcher";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IEMS | Parent Dashboard",
  description: "IEMS parent dashboard overview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-surface text-slate-900`}>
        <RoleSwitcher />
        {children}
      </body>
    </html>
  );
}
