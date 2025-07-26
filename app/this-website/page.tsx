import Navigation from '@/components/Navigation';

export default function ThisWebsitePage() {
  return (
    <>
      <Navigation />
      <main className="page-container section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-display text-gray-800 mb-8">This Website</h1>
          </div>
          <div className="space-y-12">
            {/* Branding Section */}
            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
                Why Pumpkinspumpkinspumpkinsandmore.com ???
              </h2>
              <p className="font-serif text-body text-gray-600 mb-4">
                As a marketer, I love finding truly terrible branding. I call Sarah "Pumpkin," and during a long drive, 
                I started imagining the worst possible brand name: "Pumpkins Pumpkins Pumpkins and More." For some reason, I got hyper-focused on this name. 
              </p>
              <p className="font-serif text-body text-gray-600">
                So naturally, I bought the domain.
              </p>
            </section>

            {/* Vibe Coding Section */}
            <section>
              <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
                Vibe Coding - it's what the cool kids are doing
              </h2>
              <p className="font-serif text-body text-gray-600 mb-6">
                I built this website using "Vibe Coding" - a modern approach to web development that leverages AI tools and rapid prototyping. Here are some of the interesting tools and techniques I learned along the way:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">Design & Planning</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Cursor AI</strong> - For intelligent code completion and project management</li>
                    <li>• <strong>v0.dev</strong> - AI-powered UI generation and prototyping</li>
                    <li>• <strong>ShadCN/UI</strong> - Beautiful, accessible component library</li>
                    <li>• <strong>Tailwind CSS</strong> - Utility-first styling framework</li>
                    <li>• <strong>Mermaid</strong> - For creating architectural diagrams</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">Development Tools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Next.js 14</strong> - React framework with App Router</li>
                    <li>• <strong>TypeScript</strong> - Type-safe JavaScript development</li>
                    <li>• <strong>Firebase</strong> - Backend services and authentication</li>
                    <li>• <strong>Vercel</strong> - Deployment and hosting platform</li>
                    <li>• <strong>Git & GitHub</strong> - Version control and collaboration</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">Key Learnings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>AI-Powered Development:</strong> Using AI tools like Claude and Gemini for code generation and review</li>
                  <li>• <strong>Component-First Design:</strong> Building reusable UI components from the start</li>
                  <li>• <strong>Rapid Prototyping:</strong> Quickly iterating on designs and functionality</li>
                  <li>• <strong>Modern Web Standards:</strong> Embracing the latest web technologies and best practices</li>
                  <li>• <strong>Security Best Practices:</strong> Implementing proper authentication and data protection</li>
                </ul>
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">Technical Architecture</h3>
              <p className="font-serif text-body text-gray-600 mb-4">
                This website is built with a modern, scalable architecture:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Frontend:</strong> Next.js with TypeScript and Tailwind CSS</li>
                <li>• <strong>Backend:</strong> Firebase for authentication, database, and file storage</li>
                <li>• <strong>Deployment:</strong> Vercel for seamless CI/CD and hosting</li>
                <li>• <strong>AI Integration:</strong> Multiple AI services for enhanced functionality</li>
                <li>• <strong>Performance:</strong> Optimized for speed and accessibility</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}