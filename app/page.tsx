'use client';

import Navigation from '@/components/Navigation';
import NavigationCard from '@/components/NavigationCard';
import VideoEmbed from '@/components/VideoEmbed';
import Button from '@/components/Button';
import ToastFeed from '@/components/ToastFeed'; // Added import for ToastFeed
import Image from 'next/image'; // Added import for Image

export default function Home() {
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
          {/* Decorative date element */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="block w-16 h-px bg-primary/30" />
            <span className="font-serif text-sm text-primary/70 tracking-widest uppercase">August 21st, 2024</span>
            <span className="block w-16 h-px bg-primary/30" />
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-12 tracking-wide animate-fade-in">
            Our Wedding Celebration
          </h1>
          
          <p className="font-serif text-xl lg:text-2xl text-secondary-foreground leading-relaxed mb-16 max-w-2xl mx-auto animate-fade-in-delay-1">
            Hello friends and family. We are extremely grateful to have all of you in our lives. This website gives you a glimpse into the family we're creating together. We're eloping in one of our favorite spots in the Western NC mountains, and to bring everyone into the ceremony, we'd love to read some well-wishes and advice that evening. Please send us a short video, audio message, or written note!
          </p>

          {/* YouTube Video with elegant frame */}
          <div className="mb-8 animate-fade-in-delay-2">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl blur-xl" />
              <VideoEmbed 
                videoId="dQw4w9WgXcQ" 
                title="Mitch & Sarah's Wedding Video"
                className="relative"
              />
            </div>
          </div>
          
          <p className="text-base lg:text-lg text-muted-foreground italic text-center mb-16 max-w-2xl mx-auto animate-fade-in-delay-3">
            We'll explain why we picked August 21st (solar eclipse anniversary and our first-kiss day) 
            and why eloping felt right.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center mb-16">
            <span className="text-primary/40 text-2xl">❦</span>
          </div>

          {/* About Our Wedding Section with page-like styling */}
          <div className="relative animate-fade-in-delay-4">
            <div className="absolute -inset-1 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-lg" />
            <div className="relative bg-white/70 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-lg border border-primary/10 max-w-3xl mx-auto mb-12">
              <p className="font-serif text-lg lg:text-xl text-card-foreground leading-relaxed mb-6">
                We're eloping in one of our favorite spots in the Western North Carolina mountains on August 21st. After the ceremony at the lake, we'll head to our cabin for the evening where we'll read your well-wishes and set our marriage intentions together.
              </p>
              <p className="font-serif text-lg lg:text-xl text-card-foreground leading-relaxed">
                This intimate celebration feels right for us, and having your words as part of our ceremony means we can feel your love and presence even from afar.
              </p>
            </div>
          </div>

          <Button href="/share-a-toast" className="mt-8 relative group animate-fade-in-delay-5">
            <span className="relative z-10">Share Your Well Wishes</span>
            <span className="absolute inset-0 bg-primary/20 rounded-md scale-110 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
          </Button>
        </div>
      </main>

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
                  <Image src="/images/baby-mitch-baby-goat.webp" alt="Baby Mitch baby goat" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Baby Mitch baby goat</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/sarah-as-a-kid.webp" alt="Sarah as a kid" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Sarah as a kid</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/sarahs-pic-of-mitch-before-we-met.webp" alt="Sarah's pic of Mitch before we met" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Sarah's pic of Mitch before we met</p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/miss-that-prius-tent.webp" alt="Miss that Prius tent" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Miss that Prius tent</p>
              </div>
            </div>
            {/* 5 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/just-to-keep-you-guessing.webp" alt="Just to keep you guessing" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Just to keep you guessing</p>
              </div>
            </div>
            {/* 6 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/weird-love-notes.webp" alt="Weird love notes" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Weird love notes</p>
              </div>
            </div>
            {/* 7 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/family-dinner-attire-inspo.webp" alt="Family dinner attire inspo" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Family dinner attire inspo</p>
              </div>
            </div>
            {/* 8 */}
            <div className="flex-shrink-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white p-2 shadow-md">
                <div className="w-32 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded relative overflow-hidden">
                  <Image src="/images/elopement-lake-daytime.webp" alt="Elopement lake daytime" fill className="object-cover rounded" />
                </div>
                <p className="text-center text-xs text-gray-500 mt-1 font-['Caveat']">Elopement lake daytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section with enhanced styling */}
      <section className="section-container bg-gradient-to-b from-white to-background relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c4.636 0 8.906-1.58 12.285-4.225C46.394 48.72 48 53.636 48 59c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20c-4.636 0-8.906 1.58-12.285 4.225C51.606 40.28 50 35.364 50 30z' fill='%23c97842' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-16">
          {/* Section heading with decorative elements */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-gray-800 mb-4">Explore Our Journey</h2>
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
              description="How we met, our first date, and what we do now"
              className="group hover:transform hover:scale-[1.02] transition-all duration-500"
            />
            <NavigationCard
              href="/our-marriage"
              title="Our Marriage"
              description="What we're doing on August 21st and why Bear Creek Lake"
              className="group hover:transform hover:scale-[1.02] transition-all duration-500"
            />
            <NavigationCard
              href="/registry"
              title="Registry"
              description="We have everything we need, except a house to put it in"
              className="group hover:transform hover:scale-[1.02] transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Footer with enhanced styling */}
      <footer className="bg-gradient-to-b from-background to-white border-t border-border/50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-16 text-center">
          <div className="mb-8">
            <a 
              href="/family-gathering" 
              className="font-serif text-base text-secondary-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
            >
              Family Gathering
            </a>
            <span className="mx-4 text-primary/30">•</span>
            <a 
              href="/this-website" 
              className="font-serif text-base text-secondary-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4"
            >
              This Website
            </a>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="inline-block px-8 py-4 bg-white/50 backdrop-blur rounded-lg shadow-sm border border-primary/10">
              <p className="font-serif text-sm text-muted-foreground italic">
                As a side note, Mitch coded this entire website using AI, so some features might or might not work.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
