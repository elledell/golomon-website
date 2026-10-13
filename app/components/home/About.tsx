"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Compass, 
  Eye 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Top Split: Image & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image Area */}
          <div className="relative w-full h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/about.png"
              alt="Golomon Limited Company Overview"
              fill
              className="object-cover"
            />
            {/* Brand Accent Overlay */}
            <div className="absolute inset-0 bg-golomon-primary/10 mix-blend-multiply"></div>
            
            {/* Floating Overview Badge (No Location) */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg sm:max-w-[260px] border-b-4 border-golomon-secondary">
              <span className="block text-3xl font-extrabold text-golomon-primary mb-1">
                TSP
              </span>
              <span className="block text-sm font-bold text-slate-900 mb-1">
                Technology Solutions Provider
              </span>
              <span className="text-xs font-medium text-slate-500 block">
                Information Technology (IT) Sector
              </span>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="flex flex-col justify-center">
            {/* Removed the orange em dash span here */}
            <div className="flex items-center mb-4">
              <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
                COMPANY OVERVIEW
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Empowering Organizations to Build, Modernize & Optimize.
            </h2>

            <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
              <strong>Golomon Limited</strong> is a Technology Solutions Provider (TSP) delivering integrated IT products, services, and solutions that empower organizations to build, modernize, manage, and optimize their technology environments through a comprehensive portfolio spanning IT Consulting & Tech Services, Cloud Computing, Software Development & SaaS, Technology Licensing & Procurement, Cybersecurity, and Artificial Intelligence (AI) & Automation.
            </p>

            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Leveraging a robust ecosystem of technology platforms, leading vendors, and specialist partners, Golomon designs and delivers integrated, business-focused solutions that simplify complex IT environments, strengthen operational capabilities, and connect the systems, infrastructure, and technologies organizations need to thrive and build scalable, secure, and future-ready digital environments.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Compass className="w-5 h-5 text-golomon-secondary" />
                  <h3 className="font-bold text-slate-900 text-base">Our Mission</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To help businesses harness technology to simplify operations, improve performance, and achieve sustainable growth through practical, integrated, and scalable solutions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Eye className="w-5 h-5 text-golomon-primary" />
                  <h3 className="font-bold text-slate-900 text-base">Our Vision</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be a trusted leading technology solutions partner, enabling businesses to achieve sustainable growth through technology.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-golomon-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-900 transition-colors shadow-md group text-sm md:text-base"
              >
                Read Our Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}