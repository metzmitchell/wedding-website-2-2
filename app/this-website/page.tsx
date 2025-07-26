'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ThisWebsitePage() {
  const [notesExpanded, setNotesExpanded] = useState(false);

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-12">
            This Website
          </h1>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              As a marketer, I love finding truly terrible branding. I call Sarah "Pumpkin," and during a long drive, 
              I started imagining the worst possible brand name: "Pumpkins Pumpkins Pumpkins and More." I imagine a 
              90's store crossing Party City with Bed Bath & Beyond, then adding ".com" to their name during the 
              2000's rebrand. Complete with horrible Toys R Us color scheme. Maybe someday I'll create a fake online 
              store for it.
            </p>

            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              So naturally, we bought the domain.
            </p>

            {/* Video Section */}
            <div className="my-12 bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-serif text-2xl text-gray-800 mb-4">Building the Site</h2>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <p className="font-serif text-gray-500">Video coming soon: Timelapse of the coding process</p>
              </div>
              <p className="font-serif text-lg text-gray-700">
                Built during late nights fueled by coffee and AI assistance through{' '}
                <a 
                  href="https://www.youtube.com/watch?v=vj_5VNR1B1U" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  vibe coding
                </a>
                . Watch the timelapse if you enjoy seeing code break and get fixed in real time. 
                I spent hours talking to Claude, iterating on designs, and bringing this wedding website to life.
              </p>
            </div>

            {/* Expandable Notes Section */}
            <div className="mt-12 bg-gray-50 rounded-lg border border-gray-200">
              <button
                onClick={() => setNotesExpanded(!notesExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors rounded-lg"
              >
                <h3 className="font-serif text-xl text-gray-800">Notes for Mitch</h3>
                {notesExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {notesExpanded && (
                <div className="px-6 pb-6 font-serif text-gray-700 space-y-4">
                  <p className="italic">
                    Hey future me! Here are some notes about this website build:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Used Next.js 14 with the new App Router</li>
                    <li>Styled with Tailwind CSS and shadcn/ui components</li>
                    <li>Firebase for the backend (Firestore, Storage, Auth)</li>
                    <li>Integrated multiple AI APIs: OpenAI, Anthropic Claude, Deepgram, and Replicate</li>
                    <li>The toast submission system supports text, audio, and video messages</li>
                    <li>Direct Firebase uploads for large video files (up to 8GB)</li>
                    <li>Deployed on Vercel with automatic GitHub deployments</li>
                  </ul>
                  <p>
                    The entire site was built using AI pair programming. Every line of code was written 
                    through conversations with Claude. It's amazing what's possible when you combine human 
                    creativity with AI capabilities.
                  </p>
                  <p>
                    If something breaks, just talk to Claude again. The AI remembers the patterns and can 
                    help debug issues. This is the future of software development!
                  </p>
                </div>
              )}
            </div>

            {/* Final Note */}
            <p className="font-serif text-lg text-gray-600 text-center mt-12 italic">
              As a side note, Mitch coded this entire website using AI, so some features might or might not work.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}