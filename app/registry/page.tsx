import Navigation from '@/components/Navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegistryPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 lg:px-16 py-12">
        {/* Page Header */}
        <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-12">
          Registry
        </h1>

        {/* Main Content Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 max-w-2xl mx-auto shadow-sm mb-16 lg:mb-24">
          <h2 className="font-serif text-2xl lg:text-3xl text-gray-800 mb-8 text-center font-light leading-relaxed">
            We don't have a registry – we have everything we need.
          </h2>

          <p className="font-serif text-lg lg:text-xl text-gray-700 leading-relaxed mb-12 text-center">
            Since we didn't make you travel, and we're already set for daily life, we're focusing on saving for our first house with mountain views and hopefully an office that isn't doubling as our laundry room.
          </p>

          {/* Contribution Information Section */}
          <Card className="bg-gray-50 border-gray-200 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center font-serif text-lg font-medium text-gray-800">
                If you'd like to contribute to our future adventures:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Venmo Information */}
              <div className="bg-white p-4 rounded-md">
                <p className="font-serif text-base font-medium text-gray-700 mb-2">
                  Venmo
                </p>
                <p className="font-mono text-lg text-gray-800">
                  @[to be determined]
                </p>
              </div>

              {/* Mailing Address */}
              <div className="bg-white p-4 rounded-md">
                <p className="font-serif text-base font-medium text-gray-700 mb-2">
                  Mailing Address
                </p>
                <div className="font-serif text-base text-gray-800 leading-relaxed">
                  <p>28 Claxton PL</p>
                  <p>AVL, NC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Message */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl text-gray-600 italic">
            Your love and presence in our lives is the real gift.
          </p>
        </div>
      </main>
    </>
  );
}