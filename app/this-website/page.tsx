import Navigation from '@/components/Navigation';

export default function ThisWebsitePage() {
  return (
    <>
      <Navigation />
      <main className="page-container section-container">
        <div className="text-center">
          <h1 className="font-serif text-display text-gray-800 mb-8">This Website</h1>
          <p className="font-serif text-body text-gray-600 max-w-2xl mx-auto">
            Page content will be designed and populated soon.
          </p>
        </div>
      </main>
    </>
  );
}