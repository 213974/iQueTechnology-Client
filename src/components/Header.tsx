// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { Phone, User, ShoppingCart } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-4 md:px-12 py-4 backdrop-blur-md">
      {/* Left Side: Logo */}
      <Link href="/" className="text-xl md:text-2xl font-bold">
        iQue<span className="text-primary">Technology</span>
      </Link>

      {/* Center: Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-lg">
        <Link href="/" className="transition-colors hover:text-primary">Home</Link>
        
        <DropdownMenu title="CMMC">
          <Link href="/cmmc-explained" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">CMMC Explained</Link>
          <Link href="/compliance-as-a-service" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Compliance as a Service</Link>
        </DropdownMenu>

        <Link href="/managed-services" className="transition-colors hover:text-primary">Managed Services</Link>
        <Link href="/cisco" className="transition-colors hover:text-primary">Cisco</Link>

        <DropdownMenu title="More">
          <Link href="/schedule-assessment" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Schedule Your Assessment</Link>
          <Link href="/featured-services" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Featured Services</Link>
          <Link href="/#contact" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Contact Us</Link>
        </DropdownMenu>
      </nav>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <a href="tel:+1-301-789-1274" className="hidden lg:flex items-center gap-2 text-base md:text-lg font-semibold">
          <Phone className="h-5 w-5 text-primary" />
          <span className="transition-colors hover:text-primary">301-789-1274</span>
        </a>
        
        <button className="transition-colors hover:text-primary" aria-label="Shopping Cart">
          <ShoppingCart className="h-6 w-6" />
        </button>

        <DropdownMenu title={<User className="h-6 w-6" />}>
          <Link href="/signin" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Sign In</Link>
          <Link href="/create-account" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Create Account</Link>
          <hr className="my-2 border-border" />
          <Link href="/my-account/bookings" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">Bookings</Link>
          <Link href="/my-account" className="block w-full text-left px-4 py-2 text-text-muted rounded hover:bg-background hover:text-primary">My Account</Link>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;