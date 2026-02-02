import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rupertisauna.de'),
  title: {
    default: "Rupertisauna | Modern Luxury Spa & Sauna",
    template: "%s | Rupertisauna",
  },
  description: "Erleben Sie modernste Wellness-Technologie und pure Entspannung in unserem exklusiven Spa- und Saunabereich. Entdecken Sie Sauna, Spa und Wellness neu.",
  keywords: ["Sauna", "Spa", "Wellness", "Modern Luxury", "Smart Pool", "Bio-Sauna", "Rupertisauna", "Erholung"],
  authors: [{ name: "Rupertisauna Team" }],
  creator: "Rupertisauna",
  publisher: "Rupertisauna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rupertisauna | Modern Luxury Spa & Sauna",
    description: "Erleben Sie modernste Wellness-Technologie und pure Entspannung in unserem exklusiven Spa- und Saunabereich.",
    url: 'https://www.rupertisauna.de',
    siteName: 'Rupertisauna',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rupertisauna | Modern Luxury Spa & Sauna",
    description: "Erleben Sie modernste Wellness-Technologie und pure Entspannung.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased selection:bg-accent-blue/30`}
      >
        {children}
      </body>
    </html>
  );
}

