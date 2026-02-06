"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/what-we-automate", label: "What We Automate" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-navy font-[family-name:var(--font-inter)] font-bold text-xl tracking-tight">
            Fulcrux.ai
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-inter)] font-medium transition-colors ${
                pathname === link.href
                  ? "text-navy"
                  : "text-charcoal hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-navy text-white px-5 py-2.5 rounded-lg font-[family-name:var(--font-inter)] font-medium hover:bg-navy-light transition-all"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-inter)] font-medium py-2 ${
                pathname === link.href ? "text-navy" : "text-charcoal"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-navy text-white w-full py-3 rounded-lg font-[family-name:var(--font-inter)] font-medium mt-2 text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      )}
    </nav>
  );
}
