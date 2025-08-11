// src/components/Footer.tsx
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-background-light px-4 md:px-12 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-primary mb-6">About iQue Technology</h4>
          <p className="text-text-muted">Your Security Expert for modern IT challenges. We specialize in compliance, cloud solutions, and proactive managed services.</p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="text-text-muted transition-colors hover:text-primary"><Facebook /></a>
            <a href="#" aria-label="LinkedIn" className="text-text-muted transition-colors hover:text-primary"><Linkedin /></a>
            <a href="#" aria-label="Twitter" className="text-text-muted transition-colors hover:text-primary"><Twitter /></a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-primary mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-text-muted transition-colors hover:text-primary">Home</Link></li>
            <li><Link href="/#services" className="text-text-muted transition-colors hover:text-primary">Services</Link></li>
            <li><Link href="/#testimonials" className="text-text-muted transition-colors hover:text-primary">Testimonials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-primary mb-6">Services</h4>
          <ul className="space-y-3">
            <li><Link href="/#services" className="text-text-muted transition-colors hover:text-primary">Managed Services</Link></li>
            <li><Link href="/#services" className="text-text-muted transition-colors hover:text-primary">Security</Link></li>
            <li><Link href="/#services" className="text-text-muted transition-colors hover:text-primary">Cloud Computing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-primary mb-6">Connect With Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <a href="https://www.google.com/maps/search/?api=1&query=11865+Federal+Square,+Suite+103,+Waldorf,+MD+20602" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors hover:text-primary">
                11865 Federal Square, Suite 103, Waldorf, MD 20602
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+1-301-789-1274" className="text-text-muted transition-colors hover:text-primary">301-789-1274</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-text-muted">
        Copyright © {currentYear} iQue Technology - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;