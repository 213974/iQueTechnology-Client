// src/components/DropdownMenu.tsx
'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface DropdownMenuProps {
  title: ReactNode;
  children: ReactNode;
}

const DropdownMenu = ({ title, children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 transition-colors hover:text-primary focus:outline-none focus:text-primary">
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[220px] rounded-md bg-background-light shadow-lg border border-border p-2 z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;