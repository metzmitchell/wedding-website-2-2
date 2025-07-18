import Navigation from '@/components/Navigation';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// Placeholder image component
const PlaceholderImage = ({ text }: { text: string }) => (
  <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
    <p className="text-stone-500 text-sm">{text}</p>
  </div>
);

export default function OurMarriagePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 lg:px-16 py-12">
        <div className="text-center">
          <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 mb-4">Our Marriage</h1>
          <p className="font-serif text-xl text-gray-600 mt-4 mb-12">August 21st at Bear Creek Lake</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-sm mb-16 lg:mb-24">
          <div className="prose prose-lg max-w-none">
            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Bear Creek Lake holds a special place in our hearts. It's where we first realized that our connection was something extraordinary, where countless summer days were spent exploring its hidden coves, and where we decided to build our future together.
            </p>

            {/* Polaroid-style photo */}
            <div className="my-12 lg:my-16 max-w-sm mx-auto">
              <Card className="bg-white p-3 rotate-2 shadow-xl">
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="bg-stone-100">
                    <PlaceholderImage text="Bear Creek Lake Photo" />
                  </AspectRatio>
                  <p className="mt-4 mb-2 font-handwriting text-lg text-gray-700 text-center">
                    Where it all began ♥
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Our ceremony will take place at the river mouth, on a small grassy island surrounded by towering cliffs. The natural amphitheater created by the landscape provides an intimate setting that perfectly captures the essence of our relationship - grounded in nature, surrounded by beauty, and deeply personal.
            </p>

            <div className="border-l-4 border-primary pl-6 my-8">
              <p className="font-serif text-xl italic text-gray-700">
                "This place reminds us that the most meaningful moments in life often happen in the simplest settings, surrounded by nothing but nature and love."
              </p>
            </div>

            {/* Second Polaroid-style photo */}
            <div className="my-12 lg:my-16 max-w-sm mx-auto">
              <Card className="bg-white p-3 -rotate-1 shadow-xl">
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="bg-stone-100">
                    <PlaceholderImage text="Ceremony Location Photo" />
                  </AspectRatio>
                  <p className="mt-4 mb-2 font-handwriting text-lg text-gray-700 text-center">
                    Our perfect spot 🌿
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              After exchanging our vows, we'll retreat to a cozy cabin overlooking the lake. There, we'll spend our first evening as a married couple reading your heartfelt messages and toasts, letting the joy of the day sink in as the sun sets over the water.
            </p>

            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed">
              As dusk approaches, we'll take a final boat ride as newlyweds, celebrating our union in the place that has meant so much to our journey together. It's a simple celebration, but one that perfectly reflects who we are and the life we want to build together.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}