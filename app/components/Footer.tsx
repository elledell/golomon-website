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

// Official SVG for WhatsApp (Chat bubble with phone inside)
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-[#003690] text-blue-100 border-t border-[#00225A] pt-20 pb-8 overflow-hidden relative mt-auto">
      
      {/* Background Tech Accent - Circuit Nodes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img 
          src="/13.png" 
          alt="Circuit Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center mb-8 w-fit group">
              <Image 
                src="/logo.png" 
                alt="Golomon Logo" 
                width={60} 
                height={60} 
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <h4 className="text-white font-bold mb-4 tracking-wide text-lg">
              Your Strategic Partner in Integrated Technology Solutions.
            </h4>

            <p className="text-blue-200 leading-relaxed mb-8 pr-4">
              Golomon Limited delivers tailored, end-to-end technology solutions that align with the operational realities, strategic priorities and growth ambitions of East African enterprises; enabling organizations to modernize, integrate and optimize their technology environments for measurable business impact.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-golomon-primary transition-all shadow-sm text-white">
                <LinkedinIcon />
              </a>
              <a href="https://wa.me/254142426126" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all shadow-sm text-white">
                <WhatsappIcon />
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
              <li><Link href="/process" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Our Process</Link></li>
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
                <a href="tel:+2540142426126" className="hover:text-white transition-colors">(+254) 0 142 426 126</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golomon-secondary flex-shrink-0" />
                <a href="mailto:info@golomon.com" className="hover:text-white transition-colors">info@golomon.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
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