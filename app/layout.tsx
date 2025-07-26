import "./globals.css";
import type { Metadata } from "next";
import { Homemade_Apple } from 'next/font/google';
import Footer from '@/components/Footer';

const homemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-homemade-apple',
});

export const metadata: Metadata = {
  title: "Mitch & Sarah's Marriage",
  description: "Join us in celebrating our elopement at Bear Creek Lake, NC on August 21st. Share your well-wishes for our ceremony.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={homemadeApple.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
