import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import { site } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sankeerthana.dev"),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.heroStatement,
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description: site.heroStatement,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.role}`,
    description: site.heroStatement,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--color-accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
