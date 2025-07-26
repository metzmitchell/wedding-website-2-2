import "./globals.css";
import type { Metadata } from "next";
import { Homemade_Apple, Caveat, Dancing_Script, Playfair_Display } from 'next/font/google';
import Footer from '@/components/Footer';

const homemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-homemade-apple',
});

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
});

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: "Mitch & Sarah's Wedding - August 21st, 2024",
  description: "Join us in celebrating our elopement at Bear Creek Lake, NC. Share your well-wishes and memories for our special day.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Mitch & Sarah's Wedding - August 21st, 2024",
    description: "Join us in celebrating our elopement at Bear Creek Lake, NC. Share your well-wishes and memories for our special day.",
    images: [
      {
        url: '/images/fake-proposal.webp',
        width: 1200,
        height: 630,
        alt: 'Mitch and Sarah - Our Wedding',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mitch & Sarah's Wedding - August 21st, 2024",
    description: "Join us in celebrating our elopement at Bear Creek Lake, NC. Share your well-wishes and memories for our special day.",
    images: ['/images/fake-proposal.webp'],
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❤️</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${homemadeApple.variable} ${caveat.variable} ${dancingScript.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
