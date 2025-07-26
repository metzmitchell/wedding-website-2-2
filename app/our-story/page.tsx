"use client"

import CustomVideoThumbnail from "@/components/CustomVideoThumbnail"
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
        {/* Video Section */}
        <section className="mb-16 lg:mb-24">
          <div className="max-w-3xl mx-auto">
            <CustomVideoThumbnail 
              videoId="U5lqpxRBUr0" 
              thumbnailImage="/images/our-story.webp"
              title="Our Story - The Longer Version"
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>

        {/* Eclipse Story Section */}
        <section className="mb-16 lg:mb-24">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-sm">
            <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Ya'll may remember 8/21/17 as the day with the total solar eclipse, but to us, its our anniversary and the day we shared our first kiss! We had been hanging out for a little while at that point and had gone on some adventures, but that night, after spending the day watching the eclipse and then floating in the lake looking at the stars we had the most magical first kiss! So the timing, the date, the setting - it all felt right for our wedding too! 
            </p>
          </div>
        </section>

        {/* Timeline Carousel */}
        <section className="mb-16 lg:mb-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-gray-800 text-center mb-8">Our Journey Together</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {/* Sarah's pic of Mitch before we met */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/sarahs-pic-of-mitch-before-we-met.webp" alt="Sarah's pic of Mitch before we met" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Sarah's pic of Mitch before we met</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* First pic together */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/first-pic-together.webp" alt="First pic together" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">First pic together</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* The night we met at Mitch's show */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/the-night-we-met-at-mitchs-show!.webp" alt="The night we met at Mitch's show!" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">The night we met at Mitch's show!</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Fake proposal */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/fake-proposal.webp" alt="Fake proposal" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Fake proposal</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Goofy looking tourists */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/goofy-looking-tourists.webp" alt="Goofy looking tourists" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Goofy looking tourists</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Honeymoon in Puerto Rico */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/honeymoon-in-puerto-rico.webp" alt="Honeymoon in Puerto Rico" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Honeymoon in Puerto Rico</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* The lake we got engaged at */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/the-lake-we-got-engaged-at.webp" alt="The lake we got engaged at" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">The lake we got engaged at</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Weird love notes */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/weird-love-notes.webp" alt="Weird love notes" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Weird love notes</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Miss that Prius tent */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/miss-that-prius-tent.webp" alt="Miss that Prius tent" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Miss that Prius tent</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>

              {/* Elopement lake daytime */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white shadow-xl">
                    <CardContent className="p-2">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <Image src="/images/elopement-lake-daytime.webp" alt="Elopement lake daytime" fill className="object-cover rounded" />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-4">
                      <p className="font-handwriting text-base text-gray-600">Elopement lake daytime</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Kids Section */}
        <section className="mb-16 lg:mb-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-gray-800 text-center mb-8">Kids</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sarah as a kid */}
            <Card className="bg-white transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl">
              <CardContent className="p-2">
                <AspectRatio ratio={1} className="bg-gray-100">
                  <Image src="/images/sarah-as-a-kid.webp" alt="Sarah as a kid" fill className="object-cover rounded" />
                </AspectRatio>
              </CardContent>
              <CardFooter className="flex-col items-start p-4">
                <p className="font-handwriting text-base text-gray-600">Sarah as a kid</p>
              </CardFooter>
            </Card>

            {/* Baby Mitch baby goat */}
            <Card className="bg-white transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl">
              <CardContent className="p-2">
                <AspectRatio ratio={1} className="bg-gray-100">
                  <Image src="/images/baby-mitch-baby-goat.webp" alt="Baby Mitch baby goat" fill className="object-cover rounded" />
                </AspectRatio>
              </CardContent>
              <CardFooter className="flex-col items-start p-4">
                <p className="font-handwriting text-base text-gray-600">Baby Mitch baby goat</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Adults Section */}
        <section className="mb-16 lg:mb-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-gray-800 text-center mb-8">Adults</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Trying to buy a duplex */}
            <Card className="bg-white transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl">
              <CardContent className="p-2">
                <AspectRatio ratio={1} className="bg-gray-100">
                  <Image src="/images/trying-to-buy-a-duplex.webp" alt="Trying to buy a duplex" fill className="object-cover rounded" />
                </AspectRatio>
              </CardContent>
              <CardFooter className="flex-col items-start p-4">
                <p className="font-handwriting text-base text-gray-600">Trying to buy a duplex</p>
              </CardFooter>
            </Card>

                         {/* We're adults? */}
             <Card className="bg-white transform hover:scale-[1.02] transition-transform duration-300 border-4 border-white shadow-xl">
               <CardContent className="p-2">
                 <AspectRatio ratio={1} className="bg-gray-100">
                   <Image src="/images/us-acting-adult.webp" alt="We're adults?" fill className="object-cover rounded" />
                 </AspectRatio>
               </CardContent>
               <CardFooter className="flex-col items-start p-4">
                 <p className="font-handwriting text-base text-gray-600">we're adults?</p>
               </CardFooter>
             </Card>
          </div>
        </section>
      </main>
    </>
  )
}