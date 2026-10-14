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
          <div 
            className="relative w-full h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <Image
              src="/8.png"
              alt="Golomon Limited Company Overview"
              fill
              className="object-cover pointer-events-none"
              draggable={false}
            />
            {/* Brand Accent Overlay */}
            <div className="absolute inset-0 bg-golomon-primary/10 mix-blend-multiply pointer-events-none"></div>
            
            {/* Floating Overview Badge (No Location) */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg sm:max-w-[260px] border-b-4 border-golomon-secondary pointer-events-none">
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
            <div className="flex items-center mb-4">
              <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
                COMPANY OVERVIEW
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Your Trusted Partner in Technology and Digital Transformation
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                As a Kenyan Technology Solutions Provider (TSP), Golomon partners with organizations to turn technology into a strategic business advantage. We deliver integrated IT products, services and solutions tailored to help businesses build, modernize, manage and optimize their technology environments.
              </p>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Our comprehensive portfolio spans IT Consulting and Technology Services, Cloud Computing, Software Development and SaaS, Technology Licensing and Procurement, Cybersecurity, Artificial Intelligence (AI) and Automation; we provide the expertise and capabilities organizations need to operate efficiently, innovate confidently and scale sustainably.
              </p>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Through a strong ecosystem of leading technology vendors, trusted platforms and specialist partners, we bring together the right expertise and technologies to address your unique business challenges. Our approach simplifies complex IT environments, connects systems and infrastructure, strengthens operational performance as well as builds secure, scalable and future-ready digital foundations aligned with your business goals.
              </p>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                At Golomon, we go beyond delivering technology. We build lasting partnerships, enable intelligent ways of working and help your organization unlock greater value from every technology investment.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 mb-2">
                  <Compass className="w-5 h-5 text-golomon-secondary" />
                  <h3 className="font-bold text-slate-900 text-base">Our Mission</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To help businesses harness technology to simplify operations, improve performance and achieve sustainable growth through practical, integrated and scalable solutions.
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