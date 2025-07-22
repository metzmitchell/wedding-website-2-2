'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/our-marriage', label: 'Our Marriage' },
  { href: '/registry', label: 'Registry' },
  { href: '/share-a-toast', label: 'Share a Toast' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="relative bg-gradient-to-b from-white via-background to-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        {/* Header Text with enhanced styling */}
        <div className="text-center pt-6 pb-4">
          <Link href="/" className="group inline-block">
            <h1 className="font-serif text-xl lg:text-2xl text-gray-700 tracking-[0.2em] uppercase transition-all duration-500 group-hover:tracking-[0.25em]">
              Mitch Metz
            </h1>
            <div className="flex items-center justify-center gap-3 mt-1">
              <span className="block w-12 h-px bg-primary/40 transition-all duration-500 group-hover:w-16" />
              <span className="text-primary text-sm">&</span>
              <span className="block w-12 h-px bg-primary/40 transition-all duration-500 group-hover:w-16" />
            </div>
            <h1 className="font-serif text-xl lg:text-2xl text-gray-700 tracking-[0.2em] uppercase mt-1 transition-all duration-500 group-hover:tracking-[0.25em]">
              Sarah Robinson
            </h1>
          </Link>
        </div>

        {/* Navigation Items with enhanced styling */}
        <div className="relative pb-4">
          {/* Decorative line behind nav items (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
          
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-10 xl:space-x-14">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative px-6 py-4 lg:px-4 transition-all duration-300
                    ${isActive ? 'text-primary' : 'text-secondary-foreground hover:text-primary'}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Text with enhanced styling */}
                  <span className={`
                    relative font-serif text-base lg:text-lg tracking-wide transition-all duration-300
                    ${isActive ? 'font-medium' : ''}
                    group-hover:tracking-wider group-hover:scale-105 inline-block
                  `}>
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300
                        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      `}
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}