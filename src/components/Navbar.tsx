"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header aria-label="Main navigation" className="relative z-50 w-full pt-6 sm:pt-7 pb-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-9 h-10 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/transparent_logo.png"
              alt="ByteSpace Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
            ByteSpace
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-white/80 text-[15px] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          <Link
            href="#signin"
            className="text-white hover:text-white/80 text-[15px] transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="#join"
            className="text-white hover:text-white/80 text-[15px] transition-colors"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="p-1 text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="8" width="14" height="13" rx="2" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            aria-label="Cart"
            className="p-1.5 text-white"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0047FF]/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 shadow-2xl flex flex-col gap-4 text-center z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-base font-medium py-2 hover:bg-white/10 rounded-lg transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-white/20 my-2" />
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-sm font-medium px-4 py-2 hover:bg-white/10 rounded-full transition"
            >
              Sign In
            </Link>
            <Link
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#D2F801] text-black text-sm font-semibold px-5 py-2 rounded-full transition hover:brightness-95"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}