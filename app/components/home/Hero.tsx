"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/hero1.png",
      tagline: "POWERING PROGRESS.",
      title: "Technology Solutions Tailored to Your Enterprise.",
      description: (
        <>
          As a leading Technology Solutions Provider (TSP), <span className="text-golomon-secondary font-bold">Golomon</span> delivers integrated IT solutions, products and services that enable organizations to modernize infrastructure, optimize operations, strengthen performance as well as accelerate sustainable business growth.
        </>
      ),
    },
    {
      id: 2,
      image: "/hero22.png",
      tagline: "PRACTICAL, INTEGRATED, SCALABLE.",
      title: "Simplifying Technology. Advancing Your Business.",
      description: (
        <>
          <span className="text-golomon-secondary font-bold">Golomon</span> delivers business-aligned technology solutions that streamline operations, integrate disparate systems as well as establish secure, scalable and future-ready IT environments that drive efficiency, resilience and sustainable business growth.
        </>
      ),
    },
    {
      id: 3,
      image: "/hero33.png",
      tagline: "YOUR TRUSTED TECHNOLOGY PARTNER.",
      title: "Technology Transformation. Measurable Business Impact.",
      description: (
        <>
          <span className="text-golomon-secondary font-bold">Golomon</span> combines strategic advisory, deep technical expertise and a strong ecosystem of leading technology vendors as well as specialized partners to deliver measurable business outcomes, accelerate digital transformation and enable sustainable organizational growth.
        </>
      ),
    },
    {
      id: 4,
      image: "/hero44.png", // REMEMBER: Change this if you rename the file to clear the cache!
      tagline: "SECURE & RESILIENT INFRASTRUCTURE.",
      title: "Your Digital Foundation. Built for Growth.",
      description: (
        <>
          <span className="text-golomon-secondary font-bold">Golomon</span> delivers secure, resilient and scalable technology solutions tailored to your enterprise; protecting critical data, optimizing operations as well as enabling business continuity and sustainable digital growth.
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // CHANGE THIS NUMBER TO ADJUST SLIDE DURATION
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[580px] max-h-[700px] flex items-center overflow-hidden pb-8 md:pb-0">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={typeof slide.title === 'string' ? slide.title : `Hero Slide ${index + 1}`}
            fill
            className="object-cover object-right md:object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Smooth Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 to-white/15 md:to-transparent"></div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 w-full relative z-20">
        <div className="max-w-2xl">
          <div className="flex items-center mb-4">
            <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
              {slides[currentSlide].tagline}
            </span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-[#001433] leading-[1.05] mb-6 tracking-tight transition-opacity duration-500 pr-2 md:pr-4"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-base md:text-lg text-slate-700 mb-8 leading-relaxed transition-opacity duration-500 font-medium max-w-[95%] md:max-w-xl">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#solutions"
              className="bg-golomon-secondary text-white px-7 py-3.5 md:px-8 md:py-4 rounded-md font-semibold hover:bg-orange-700 transition-colors shadow-md shadow-orange-500/20 text-sm md:text-base"
            >
              Explore Our Solutions
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900 text-white px-7 py-3.5 md:px-8 md:py-4 rounded-md font-semibold hover:bg-golomon-primary transition-colors shadow-md text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-5 left-6 sm:left-12 md:left-20 lg:left-28 z-30 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-golomon-secondary"
                : "w-2 bg-slate-400/60 hover:bg-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Slider Controls with Image Previews - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex group absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full items-center justify-center bg-white/80 shadow-md transition-all border border-gray-200 overflow-hidden"
        aria-label="Previous slide"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          <Image
            src={slides[prevIndex].image}
            alt="Previous slide preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <ChevronLeft 
          size={28} 
          className="relative z-10 text-slate-800 group-hover:text-white transition-colors" 
        />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex group absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full items-center justify-center bg-white/80 shadow-md transition-all border border-gray-200 overflow-hidden"
        aria-label="Next slide"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          <Image
            src={slides[nextIndex].image}
            alt="Next slide preview"
            
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <ChevronRight 
          size={28} 
          className="relative z-10 text-slate-800 group-hover:text-white transition-colors" 
        />
      </button>
    </section>
  );
}