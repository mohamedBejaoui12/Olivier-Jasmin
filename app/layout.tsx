import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://olivier-jasmin.tn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Olivier & Jasmin | Café & Restaurant Tunisien de Luxe",
  description:
    "Olivier & Jasmin, café-restaurant tunisien haut de gamme à Ariana. Couscous, ojja, brik, pâtisseries tunisiennes et thé à la menthe dans un cadre botanique raffiné.",
  keywords: [
    "restaurant tunisien de luxe",
    "café tunisien Ariana",
    "couscous à l'agneau",
    "brik à l'œuf",
    "thé à la menthe",
    "restaurant gastronomique Tunis",
  ],
  authors: [{ name: "Olivier & Jasmin" }],
  openGraph: {
    title: "Olivier & Jasmin | Café & Restaurant Tunisien de Luxe",
    description: "La nature dans chaque assiette. Découvrez notre menu tunisien raffiné à Ariana.",
    url: siteUrl,
    siteName: "Olivier & Jasmin",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/og-olivier-jasmin/1200/630",
        width: 1200,
        height: 630,
        alt: "Olivier & Jasmin, café-restaurant tunisien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivier & Jasmin | Café & Restaurant Tunisien de Luxe",
    description: "La nature dans chaque assiette.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
