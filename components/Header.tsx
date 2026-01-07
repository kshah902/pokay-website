'use client';

import Link from 'next/link';
import { useState } from 'react';
import { businessInfo } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/visit', label: 'Visit Us' },
    { href: '/reviews', label: 'Reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <span className="text-3xl font-bold text-[var(--primary-orange)]" style={{ fontFamily: 'cursive' }}>
                Po-Kay
              </span>
              <span className="block text-xs text-[var(--primary-green)] font-medium tracking-wider">
                BOWLS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-dark)] hover:text-[var(--primary-green)] font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={businessInfo.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-6 py-2.5 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--text-dark)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-dark)] hover:text-[var(--primary-green)] font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={businessInfo.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary-orange)] hover:bg-[var(--primary-orange-dark)] text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-200"
              >
                Order Online
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
