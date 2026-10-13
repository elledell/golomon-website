"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Clean SVG social icon
const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function TopBar() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}} />

      <div className="w-full font-sans">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex w-full items-stretch justify-between bg-golomon-primary text-white text-sm">
          
          {/* Left Side: Location, Email & Hours (Blue Background) */}
          <div className="flex flex-1 items-center gap-6 lg:gap-8 px-6 lg:px-12 py-3">
            <span className="flex items-center gap-2 font-medium tracking-wide">
              <MapPin size={16} className="text-golomon-secondary" />
              Muthaiga, Nairobi, Kenya
            </span>
            <a 
              href="mailto:info@golomon.com" 
              className="flex items-center gap-2 font-medium tracking-wide hover:text-golomon-tertiary transition-colors"
            >
              <Mail size={16} className="text-golomon-secondary" />
              info@golomon.com
            </a>
            <span className="hidden xl:flex items-center gap-2 font-medium tracking-wide text-blue-100">
              <Clock size={16} className="text-golomon-secondary" />
              Mon - Fri: 09:00 - 17:00 (Hrs)
            </span>
          </div>

          {/* Right Side: Phone & Socials (Solid Orange Background Block) */}
          <div className="bg-golomon-secondary flex items-center px-6 lg:px-12 py-3">
            
            <a 
              href="tel:+254142426126" 
              className="flex items-center gap-2 text-base font-bold tracking-wider hover:text-white/80 transition-colors"
            >
              <Phone size={18} className="text-white" />
              +254 142 426 126
            </a>

            {/* Vertical Divider */}
            <div className="h-5 w-px bg-white/40 mx-6" aria-hidden="true"></div>

            {/* Social Icons - Linked to platform homepages */}
            <div className="flex items-center gap-4 text-white">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-golomon-primary transition-colors">
                <LinkedinIcon size={16} />
              </a>
            </div>

          </div>
        </div>

        {/* --- MOBILE VIEW (MARQUEE) --- */}
        <div className="flex md:hidden w-full bg-golomon-secondary text-white py-3 overflow-hidden whitespace-nowrap relative">
          <div className="flex w-max animate-marquee items-center text-sm font-medium">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <a href="tel:+254142426126" className="flex items-center gap-2 font-bold text-base">
                  <Phone size={16} />
                  +254 142 426 126
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Muthaiga, Nairobi, Kenya
                </span>
                <a href="mailto:info@golomon.com" className="flex items-center gap-2">
                  <Mail size={16} />
                  info@golomon.com
                </a>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  Mon - Fri: 09:00 - 17:00 (Hrs)
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}