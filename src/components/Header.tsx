// src/components/Header.tsx
'use client'; // This directive is necessary for components with event listeners or hooks

import Link from 'next/link';
import { Phone } from 'lucide-react'; // Assuming you still want to use lucide-react

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-4 md:px-12 py-4 backdrop-blur-md">
      <Link href="/" className="text-xl md:text-2xl font-bold">
        iQue<span className="text-primary">Technology</span>
      </Link>
      <div className="flex items-center gap-4 md:gap-12">
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link href="/#services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/#testimonials" className="transition-colors hover:text-primary">Testimonials</Link>
          <Link href="/#contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <a href="tel:+1-301-789-1274" className="flex items-center gap-2 text-base md:text-lg font-semibold">
          <Phone className="h-5 w-5 text-primary" />
          <span className="transition-colors hover:text-primary">301-789-1274</span>
        </a>
      </div>
    </header>
  );
};

export default Header;