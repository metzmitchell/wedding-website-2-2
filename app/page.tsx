'use client';

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import NavigationCard from '@/components/NavigationCard';
import VideoEmbed from '@/components/VideoEmbed';
import Button from '@/components/Button';
import ToastFeed from '@/components/ToastFeed'; // Added import for ToastFeed
import Image from 'next/image'; // Added import for Image
import Footer from '@/components/Footer';

export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('shadow-intense');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      
      {/* Hero Section with enhanced design */}
      <main className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-background" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c97842' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-16 text-center py-12">
          


          {/* YouTube Video with elegant frame */}
          <div className="mb-16 animate-fade-in-delay-2">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl blur-xl" />
              <VideoEmbed 
                videoId="MZ0X_Cn-oYY" 
                title="Mitch & Sarah's Wedding Video"
                className="relative"
              />
            </div>
          </div>

          {/* About Our Wedding Section - Handwritten note */}
          <div className="relative animate-fade-in-delay-4">
            <div className="absolute -inset-1 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-lg" />
            <div ref={cardRef} className="relative bg-white/90 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-2xl border-2 border-primary/20 max-w-3xl mx-auto mb-12 transform hover:rotate-1 transition-all duration-500 ease-out paper-effect scroll-shadow">
              {/* Decorative border */}
              <div className="absolute inset-0 border border-primary/10 rounded-lg pointer-events-none"></div>
              <div className="mb-6 mt-4 text-center">
                <p className="font-dancing-script text-4xl lg:text-5xl text-card-foreground leading-relaxed mb-2">
                  Hey everyone!
                </p>
                <div className="flex justify-center">
                  <svg className="w-48 h-3 text-primary/60" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10 Q50 5 100 10 Q150 15 190 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
              </div>
              <p className="font-playfair text-lg lg:text-xl text-card-foreground leading-relaxed mb-4">
                We made this little site to share some details about our wedding and give you a glimpse into our lives together! We're eloping in one of our favorite spots in the WNC mountains on August 21st, and while we won't be having a traditional in-person wedding, we still wanted to bring you in on the celebration!
              </p>
              <p className="font-playfair text-lg lg:text-xl text-card-foreground leading-relaxed mb-4">
                This intimate ceremony feels really special and personal to us. If you'd like to be part of the celebration from afar, please send a short video, audio message, or just a few words with a toast or well-wish for us to read that evening back at our cozy little cabin. Having your voices, love, and support woven into our day will make it even more special!
              </p>
              <div className="flex items-center justify-center mt-6 mb-2">
                <span className="text-primary/40 text-xl">❦</span>
              </div>
              <p className="font-playfair text-lg lg:text-xl text-card-foreground text-center">
                With love,<br />
                <span className="font-dancing-script text-2xl lg:text-3xl mt-2 block">Sarah & Mitch</span>
              </p>
            </div>
          </div>

          <Button href="/share-a-toast" className="mt-8 relative group animate-fade-in-delay-5">
            <span className="relative z-10">Share Your Well Wishes</span>
            <span className="absolute inset-0 bg-primary/20 rounded-md scale-110 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
          </Button>
        </div>
      </main>

      {/* Navigation Cards Section with enhanced styling */}
      <section className="section-container bg-gradient-to-b from-white to-background relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c4.636 0 8.906-1.58 12.285-4.225C46.394 48.72 48 53.636 48 59c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20c-4.636 0-8.906 1.58-12.285 4.225C51.606 40.28 50 35.364 50 30z' fill='%23c97842' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-16">
          {/* Section heading with decorative elements */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-gray-800 mb-4">Our Journey</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="block w-24 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <span className="text-primary/40 text-sm">❦</span>
              <span className="block w-24 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <NavigationCard
              href="/our-story"
              title="Our Story"
              description="How we met, other stories, and what we're up to now"
              className="group hover:transform hover:scale-[1.02] transition-all duration-500"
            />
            <NavigationCard
              href="/our-marriage"
              title="Our Marriage"
              description="Who, what, where, when, and why"
              className="group hover:transform hover:scale-[1.02] transition-all duration-500"
            />
            <NavigationCard
              href="/registry"
              title="Registry"
              description="We have everything we need :)"
              className="group hover:transform hover:scale-[1.02] transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Well-Wishes Feed Section */}
      <section className="py-24 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-gray-800 mb-6">Your Toasts to Us</h2>
          <p className="font-serif text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We'll read every single one on August 21st. Thank you for being part of our ceremony.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <ToastFeed 
            showHeader={false} 
            showEmptyState={true} 
            limit={5}
            maxHeight=""
          />
          
          {/* See More Button */}
          <div className="text-center mt-8">
            <Button href="/share-a-toast" className="group">
              <span className="relative z-10">See All Toasts</span>
              <span className="absolute inset-0 bg-primary/20 rounded-md scale-110 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Strip Section - New Creative Element */}
      <section className="py-12 bg-gradient-to-b from-background to-white overflow-hidden">
        <div className="relative">
          <div className="flex gap-4 animate-scroll-slow">
            {/* 1 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/sarahs-pic-of-mitch-before-we-met.webp" alt="Sarah's pic of Mitch before we met" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-shrink-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/first-pic-together.webp" alt="First pic together" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/the-night-we-met-at-mitchs-show!.webp" alt="The night we met at Mitch's show!" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex-shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/fake-proposal.webp" alt="Fake proposal" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/goofy-looking-tourists.webp" alt="Goofy looking tourists" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="flex-shrink-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/honeymoon-in-puerto-rico.webp" alt="Honeymoon in Puerto Rico" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 7 */}
            <div className="flex-shrink-0 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/the-lake-we-got-engaged-at.webp" alt="The lake we got engaged at" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 8 */}
            <div className="flex-shrink-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/weird-love-notes.webp" alt="Weird love notes" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 9 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/miss-that-prius-tent.webp" alt="Miss that Prius tent" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 10 */}
            <div className="flex-shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/elopement-lake-daytime.webp" alt="Elopement lake daytime" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* Duplicated for seamless loop */}
            {/* 1 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/sarahs-pic-of-mitch-before-we-met.webp" alt="Sarah's pic of Mitch before we met" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-shrink-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/first-pic-together.webp" alt="First pic together" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/the-night-we-met-at-mitchs-show!.webp" alt="The night we met at Mitch's show!" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex-shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/fake-proposal.webp" alt="Fake proposal" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/goofy-looking-tourists.webp" alt="Goofy looking tourists" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="flex-shrink-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/honeymoon-in-puerto-rico.webp" alt="Honeymoon in Puerto Rico" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 7 */}
            <div className="flex-shrink-0 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/the-lake-we-got-engaged-at.webp" alt="The lake we got engaged at" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 8 */}
            <div className="flex-shrink-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/weird-love-notes.webp" alt="Weird love notes" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 9 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/miss-that-prius-tent.webp" alt="Miss that Prius tent" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
            {/* 10 */}
            <div className="flex-shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/elopement-lake-daytime.webp" alt="Elopement lake daytime" fill className="object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with enhanced styling */}
      {/* <Footer /> */}
    </>
  );
}
