import React from 'react';

const Footer = () => (
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
    </div>
  </footer>
);

export default Footer; 