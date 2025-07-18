import Link from 'next/link';

interface NavigationCardProps {
  href: string;
  title: string;
  description: string;
  className?: string;
}

export default function NavigationCard({ href, title, description, className = '' }: NavigationCardProps) {
  return (
    <Link 
      href={href}
      className={`group relative block ${className}`}
    >
      {/* Page layers for book effect */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-md transform translate-x-1 translate-y-1 opacity-50" />
      <div className="absolute inset-0 bg-white rounded-lg shadow-md transform translate-x-0.5 translate-y-0.5 opacity-75" />
      
      {/* Main card content */}
      <div className="relative bg-white rounded-lg shadow-md p-8 lg:p-10 border border-gray-100 transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/20">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-lg">
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent transform rotate-45" />
        </div>
        
        <div>
          <h3 className="font-serif text-2xl lg:text-3xl text-gray-800 mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="font-serif text-base lg:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
          
          {/* Subtle "Read More" indicator */}
          <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300">
            <span className="text-sm font-serif italic">Explore</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}