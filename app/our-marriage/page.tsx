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
            Its not the lake where we started but it holds a special place in our hearts. We have spent many some days hanging out, camping, and boating around. Some of our favorite nights were camping there, just the two of us, making tacos around the fire and chatting about our lives and our futures.
            </p>

            {/* Polaroid-style photo */}
            <div className="my-12 lg:my-16 max-w-sm mx-auto">
              <Card className="bg-white p-3 rotate-2 shadow-xl">
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="bg-stone-100">
                    <Image src="/images/the-elopement-lake.webp" alt="The elopement lake" fill className="object-cover rounded" />
                  </AspectRatio>
                  <p className="mt-4 mb-2 font-handwriting text-lg text-gray-700 text-center">
                    Bear Creek Lake camping
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            Our ceremony will take place at the mouth of a river that leads into the lake, on a small little grassy island surrounded by tall mountainsides. Its such a lovely and intimate place that perfectly captures the essence of our relationship - grounded in nature, surrounded by beauty and deeply personal.
            </p>
                        {/* Second Polaroid-style photo */}
            <div className="my-12 lg:my-16 max-w-sm mx-auto">
              <Card className="bg-white p-3 -rotate-1 shadow-xl">
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="bg-stone-100">
                    <Image src="/images/right-next-to-the-wedding-spot.webp" alt="Right next to the wedding spot" fill className="object-cover rounded" />
                  </AspectRatio>
                  <p className="mt-4 mb-2 font-handwriting text-lg text-gray-700 text-center">
                    Right next to the wedding spot
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            After exchanging our vows, we'll retreat to our cozy rental on the lake. There  we'll spend our first evening as a married couple reading your toasts and heartfelt messages, letting the joy of the day sink in as the sun sets over the water. It will be a simple celebration, but one that perfectly reflects who we are and the life we want to build together.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}