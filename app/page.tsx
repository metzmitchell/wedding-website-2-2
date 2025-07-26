import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import NavigationCard from '@/components/NavigationCard';
import VideoEmbed from '@/components/VideoEmbed';
import Button from '@/components/Button';
import ToastFeed from '@/components/ToastFeed';
import Image from 'next/image';
import Footer from '@/components/Footer';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Mitch & Sarah's Wedding - August 21st, 2024",
  description: "Join us in celebrating our elopement at Bear Creek Lake, NC. Share your well-wishes and memories for our special day.",
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
};

export default function Home() {
  return <HomeClient />;
}
