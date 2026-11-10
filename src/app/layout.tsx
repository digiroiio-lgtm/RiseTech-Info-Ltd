import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { jsonLdString, organizationJsonLd, websiteJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://wealwaysrise.com"),
  alternates: { canonical: "/" },
  twitter: { card: "summary" },
  openGraph: {
    type: "website",
    siteName: "Werrise Digital Ltd",
    url: "https://wealwaysrise.com",
    title: "Werrise Digital — AI-Powered Business Solutions & Growth Strategy",
    description:
      "AI-powered business solutions, digital transformation and growth strategy for ambitious companies.",
  },
  title: "Werrise Digital — AI-Powered Business Solutions & Growth Strategy",
  description:
    "AI-powered business solutions, digital transformation and growth strategy for ambitious companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
