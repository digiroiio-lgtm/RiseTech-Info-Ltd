import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RiseTech Advisory — Strategic Intelligence for Founders",
  description:
    "Market intelligence, growth strategy, and founder advisory designed to help companies scale, raise capital, and win markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
