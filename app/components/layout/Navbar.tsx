"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Expertise", href: "/solutions" },
    { name: "Our Process", href: "/process" },
  ];

  return (
    <>
      <nav className="w-full sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex justify-between items-center h-20">
          
          {/* Brand Logo - Responsive Sizing */}
          <Link href="/" className="flex items-center group w-fit">
            <Image 
              src="/Wordmark.png" 
              alt="Golomon Wordmark" 
              width={220} 
              height={50} 
              className="w-[140px] sm:w-[180px] lg:w-[220px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              onContextMenu={(e) => e.preventDefault()} 
              draggable={false}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-[15px] text-slate-700 hover:text-golomon-secondary transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Area (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            {/* Contact Us Button - Hidden on smaller screens */}
            <Link
              href="/contact"
              className="hidden sm:flex bg-golomon-secondary text-white px-4 py-2.5 lg:px-6 lg:py-2.5 rounded-md text-sm font-semibold hover:bg-orange-700 transition-colors shadow-sm"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden bg-slate-50 text-slate-900 p-2 rounded-xl hover:bg-slate-100 focus:outline-none transition-colors border border-slate-100 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={26} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SLIDE-OVER DRAWER --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div 
        className={`fixed inset-y-0 right-0 w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div className="flex items-center">
            {/* Mobile Brand Logo */}
            <Image 
              src="/Wordmark.png" 
              alt="Golomon Wordmark" 
              width={150} 
              height={34} 
              className="object-contain"
              onContextMenu={(e) => e.preventDefault()} 
              draggable={false}
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-golomon-secondary bg-slate-50 p-2 rounded-xl focus:outline-none transition-colors"
            aria-label="Close Menu"
          >
            <X size={26} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 overflow-y-auto flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex justify-between items-center py-4 border-b border-gray-50 font-medium text-gray-800 hover:text-golomon-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contact"
              className="bg-golomon-secondary text-white text-center py-3.5 rounded-md font-bold shadow-sm hover:bg-orange-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}