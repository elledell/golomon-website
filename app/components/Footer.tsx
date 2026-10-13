"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Inline SVG for LinkedIn
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900 pt-20 pb-8 overflow-hidden relative mt-auto">
      
      {/* Background Tech Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 0 L 200 100 L 400 100" stroke="#ECF5FB" strokeWidth="2" fill="none" />
          <circle cx="400" cy="100" r="4" fill="#CD5007" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            
            {/* Brand Logo - Updated back to the standalone 'G' logo.png */}
            <Link href="/" className="flex items-center mb-8 w-fit group">
              <Image 
                src="/logo.png" 
                alt="Golomon Logo" 
                width={60} 
                height={60} 
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-slate-400 leading-relaxed mb-8 pr-4">
              Your trusted partner for integrated IT solutions. We design, build, and support technology shaped around how East African enterprises actually work.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-golomon-secondary hover:text-golomon-secondary transition-all shadow-sm">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Our Expertise</Link></li>
              <li><Link href="/#how-we-work" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Process</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. Services / Expertise */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Our Expertise</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="hover:text-white transition-colors block">IT Consulting & Tech Services</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Technology Licensing & Procurement</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Cloud Computing</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Cybersecurity</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Software Development & SaaS</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">AI & Automation</Link></li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golomon-secondary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Muthaiga, Nairobi, Kenya <br/> Serving East Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golomon-secondary flex-shrink-0" />
                <a href="tel:+254142426126" className="hover:text-white transition-colors">(+254) 01-42-42-61-26</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golomon-secondary flex-shrink-0" />
                <a href="mailto:info@golomon.com" className="hover:text-white transition-colors">info@golomon.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Golomon Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}