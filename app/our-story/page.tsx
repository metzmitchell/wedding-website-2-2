"use client"

import VideoEmbed from "@/components/VideoEmbed"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Navigation from "@/components/Navigation"

export default function OurStoryPage() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-12">Our Story</h1>
        
        {/* Video Section */}
        <section className="mb-16 lg:mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200">
              <div className="relative pb-[56.25%] h-0">
                <div className="absolute inset-2 bg-gray-200 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">▶️</span>
                    </div>
                    <p className="text-gray-500 font-serif">The longer version of our story (coming soon)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eclipse Story Section */}
        <section className="mb-16 lg:mb-24">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-sm">
            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-medium text-gray-800">August 21st, 2017</span> was the day of a huge solar eclipse. 
              During that amazing summer day, while we'd been seeing each other for a little while and had gone on a couple hikes, 
              we shared our first kiss after swimming at a mountain lake. The timing, the date, the setting – it all felt right for our wedding too.
            </p>
            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed">
              We're equal parts minimalistic and hopelessly sentimental. On the surface, we're savers who don't like spending much money 
              and don't want to burden everyone with expensive travel for our wedding. Underneath, we're total cheeseballs who want romance. 
              This duality led to our seven wedding weekends concept.
            </p>
          </div>
        </section>

        {/* Timeline Carousel */}
        <section className="mb-16 lg:mb-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-gray-800 text-center mb-8">Our Journey Together</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {/* First Meeting */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Rock show photo
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">When we met</p>
                      <p className="font-handwriting text-base text-gray-600">Rock show tickets (Mitch's band was playing)</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* First Kiss */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Eclipse day photo
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">First Kiss</p>
                      <p className="font-handwriting text-base text-gray-600">Solar eclipse day at the mountain lake</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Mountain Adventures */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Hiking adventures
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">Mountain Adventures</p>
                      <p className="font-handwriting text-base text-gray-600">Exploring our favorite trails</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Cozy Moments */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Cozy home photo
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">Cozy Moments</p>
                      <p className="font-handwriting text-base text-gray-600">Simple joys at home</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Coffee Adventures */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Coffee shop moments
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">Coffee Adventures</p>
                      <p className="font-handwriting text-base text-gray-600">Our favorite coffee spots</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Weekend Getaways */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Weekend trips
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">Weekend Getaways</p>
                      <p className="font-handwriting text-base text-gray-600">Exploring new places together</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Lake Days */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Lake adventures
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-sm text-gray-600">Lake Days</p>
                      <p className="font-handwriting text-base text-gray-600">Swimming and boating adventures</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Photo Grid Section */}
        <section className="mb-16 lg:mb-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-gray-800 text-center mb-8">Life Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Photo 1 */}
            <Card className="bg-white transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl">
              <CardContent className="p-2">
                <AspectRatio ratio={1} className="bg-gray-100">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Mountain adventures
                  </div>
                </AspectRatio>
              </CardContent>
              <CardFooter className="flex-col items-start p-4">
                <p className="font-handwriting text-base text-gray-600">Exploring our favorite spots</p>
              </CardFooter>
            </Card>

            {/* Photo 2 */}
            <Card className="bg-white transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl">
              <CardContent className="p-2">
                <AspectRatio ratio={1} className="bg-gray-100">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Cozy moments
                  </div>
                </AspectRatio>
              </CardContent>
              <CardFooter className="flex-col items-start p-4">
                <p className="font-handwriting text-base text-gray-600">Simple moments together</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}