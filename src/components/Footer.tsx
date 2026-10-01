"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINK_COLUMNS = [
  [
    "Featured Courses",
    "Featured Categories",
    "Business",
    "IT",
    "Design",
  ],
  [
    "Development",
    "Marketing",
    "Photography",
    "Finance",
    "Sport",
  ],
  [
    "Become a Creator",
    "Affiliate Program",
    "Contact",
    "Help",
    "About",
  ],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer aria-label="Site footer" className="bg-white border-t border-gray-100 pt-16 pb-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-gray-100">

          {/* Newsletter Column */}
          <div className="lg:col-span-5 space-y-4 max-w-md">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/transparent_logo.png"
                  alt="ByteSpace Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-950 font-sans">
                ByteSpace
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pt-1">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1 max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
              />
              <button
                type="submit"
                className="bg-[#D2F801] hover:bg-[#c3e700] text-black font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-sm active:scale-95 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p role="status" className="text-xs text-green-600 font-medium">
                Thank you for subscribing!
              </p>
            )}

            <p className="text-[11px] sm:text-xs text-gray-500 leading-normal pt-1 font-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:pl-10">
            {LINK_COLUMNS.map((column, columnIndex) => (
              <nav
                key={columnIndex}
                aria-label={`Footer links ${columnIndex + 1}`}
                className="space-y-3.5"
              >
                {column.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xs sm:text-sm text-gray-600 hover:text-gray-950 transition-colors block py-0.5"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-normal">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}