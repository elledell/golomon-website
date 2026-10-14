"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Puzzle, 
  Code2, 
  ArrowRight, 
  ArrowUpRight,
  Check, 
  Server, 
  FileCheck, 
  Cloud, 
  ShieldCheck, 
  Code, 
  Cpu
} from "lucide-react";

export default function SolutionsPage() {
  const coreSolutions = [
    {
      id: "01",
      title: "IT Consulting & Technology Services",
      shortTitle: "IT Consulting & Tech",
      description:
        "We provide strategic technology advisory, IT infrastructure management, systems integration, application implementation, and technical support, aligning technology capabilities with business priorities to improve operational efficiency, resilience, and performance.",
      tags: ["Strategic Advisory", "Systems Integration", "IT Infrastructure"],
      icon: Server,
    },
    {
      id: "02",
      title: "Technology Licensing & Procurement",
      shortTitle: "Licensing & Procurement",
      description:
        "We facilitate the sourcing, licensing, and acquisition of software, enterprise applications, cloud subscriptions, hardware, and other technology products through established vendor and distribution partnerships, helping clients make informed technology investments aligned with their operational requirements and budgets.",
      tags: ["Software Licensing", "Hardware Sourcing", "Vendor Partnerships"],
      icon: FileCheck,
    },
    {
      id: "03",
      title: "Cloud Computing",
      shortTitle: "Cloud Computing",
      description:
        "We deliver cloud infrastructure, platforms, and software services across Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS), enabling scalability, flexibility, resource optimization, and business continuity.",
      tags: ["IaaS & PaaS", "SaaS Platforms", "Business Continuity"],
      icon: Cloud,
    },
    {
      id: "04",
      title: "Cybersecurity",
      shortTitle: "Cybersecurity",
      description:
        "We provide cybersecurity solutions and services that protect organizational networks, applications, systems, and data against cyber threats, unauthorized access, data breaches, and evolving security risks, strengthening digital trust and operational resilience.",
      tags: ["Network & Data Security", "Threat Protection", "Digital Trust"],
      icon: ShieldCheck,
    },
    {
      id: "05",
      title: "Software Development & SaaS",
      shortTitle: "Software & SaaS",
      description:
        "We design, develop, deploy, and manage bespoke software applications, enterprise solutions, and SaaS platforms that streamline business processes, enhance user experiences, and support scalable digital operations.",
      tags: ["Bespoke Applications", "Enterprise Solutions", "SaaS Delivery"],
      icon: Code,
    },
    {
      id: "06",
      title: "Artificial Intelligence (AI) & Automation",
      shortTitle: "AI & Automation",
      description:
        "We develop and implement intelligent solutions, predictive models, and automated workflows that enhance productivity, streamline operations, improve decision-making, and unlock new opportunities for innovation and competitive advantage.",
      tags: ["Predictive Models", "Workflow Automation", "AI Integration"],
      icon: Cpu,
    },
  ];

  return (
    <main className="w-full bg-[#F8FAFC] flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <span className="text-golomon-primary font-bold text-xs sm:text-sm tracking-widest uppercase">
                OUR TECHNOLOGY SOLUTIONS & SERVICES
              </span>
            </div>

            <h1 
              className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black text-[#001433] leading-[1.1] mb-6 tracking-tight"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Purpose-Built<br/>
              Technology.<br/>
              <span className="text-golomon-secondary">Measurable Business<br/>Impact.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-xl">
              Our capabilities encompass strategic technology advisory, IT procurement and licensing, custom software development, cloud and computing infrastructure, cybersecurity, data management and analytics, artificial intelligence and automation as well as enterprise business applications; delivering integrated, scalable solutions that optimize performance, strengthen resilience and accelerate business transformation.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="bg-golomon-secondary text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-md text-sm sm:text-base"
              >
                Consult an Expert
              </Link>
              <a
                href="#core-capabilities"
                className="bg-transparent border-2 border-golomon-primary text-golomon-primary px-8 py-3.5 rounded-full font-bold hover:bg-golomon-primary hover:text-white transition-colors text-sm sm:text-base"
              >
                Explore 6 Core Pillars
              </a>
            </div>
          </div>

          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end">
            <Image 
              src="/solutions.jfif"
              alt="Dashboard showcasing integrated scalable environments"
              fill
              className="object-contain lg:object-right"
              priority
            />
          </div>

        </div>
      </section>

      {/* 2. ALL 6 CORE SOLUTIONS & SERVICES */}
      <section id="core-capabilities" className="w-full py-20 lg:py-28 bg-golomon-primary text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#ECF5FB]/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-golomon-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ECF5FB 1.25px, transparent 1.25px)`,
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center mb-4">
              <span className="text-[#ECF5FB] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                COMPREHENSIVE PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-5">
              Our 6 Core Technology <span className="text-golomon-secondary">Solutions & Services.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed">
              Through our ecosystem of technology vendors, manufacturers, distributors, cloud providers, and specialist partners, we help organizations identify, acquire, implement, integrate, and manage fit-for-purpose technology solutions that deliver measurable business value and support sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {coreSolutions.map((item) => (
              <Link
                key={item.id}
                href="/contact"
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 border border-white/20 hover:border-golomon-secondary transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-blue-950/25 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-golomon-primary via-blue-500 to-golomon-secondary" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ECF5FB]/0 via-transparent to-[#ECF5FB]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-7">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#ECF5FB] border border-blue-100 flex items-center justify-center text-golomon-primary group-hover:bg-golomon-secondary group-hover:text-white group-hover:border-golomon-secondary transition-all duration-300 shadow-sm">
                      <item.icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.75} />
                    </div>
                    <span className="text-2xl sm:text-4xl font-black text-golomon-primary/10 group-hover:text-golomon-secondary/20 transition-colors select-none tracking-tighter">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-xl lg:text-2xl font-extrabold text-slate-900 mb-2 sm:mb-3.5 leading-snug group-hover:text-golomon-primary transition-colors">
                    <span className="sm:hidden">{item.shortTitle}</span>
                    <span className="hidden sm:inline">{item.title}</span>
                  </h3>

                  <p className="text-xs sm:text-[15px] text-slate-600 leading-relaxed line-clamp-4 sm:line-clamp-none mb-4 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="hidden sm:flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-100">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#ECF5FB] text-golomon-primary border border-blue-100/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-golomon-primary group-hover:text-golomon-secondary transition-colors">
                      Inquire Now
                    </span>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#ECF5FB] group-hover:bg-golomon-secondary text-golomon-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TAILORED DELIVERY APPROACH */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
              FLEXIBLE, VENDOR-AWARE DELIVERY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Avoid One-Size-Fits-All <span className="text-golomon-secondary">Technology Decisions.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            We work collaboratively with clients to understand their business models, existing technology environments, and investment priorities - combining leading vendor platforms and bespoke engineering as required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-lg border border-slate-100 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#ECF5FB] rounded-xl flex items-center justify-center text-golomon-primary">
                  <Puzzle className="w-6 h-6" />
                </div>
                <span className="bg-[#ECF5FB] text-golomon-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                  Partner Ecosystem
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Source, License & Integrate Proven Platforms
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Leveraging our broad ecosystem of hardware manufacturers, software vendors, distributors, and cloud providers, we help you acquire, configure, and integrate enterprise-ready platforms aligned with your budget.
              </p>
              <div className="mb-8">
                <span className="font-bold text-slate-900">Ideal for: </span>
                <span className="text-slate-600">
                  Organizations modernizing infrastructure, cloud subscriptions, licensing, and enterprise applications rapidly.
                </span>
              </div>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-golomon-primary flex-shrink-0" /> Established vendor & distribution partnerships
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-golomon-primary flex-shrink-0" /> Seamless integration into existing IT environments
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-golomon-primary flex-shrink-0" /> Ongoing lifecycle & licensing management
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-lg border border-slate-100 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-golomon-secondary">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="bg-orange-50 text-golomon-secondary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                  Bespoke Engineering
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Build Custom Software, SaaS & AI Workflows
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We design, develop, deploy, and manage bespoke software applications, SaaS platforms, predictive models, and automated workflows tailored around your organization&apos;s unique requirements.
              </p>
              <div className="mb-8">
                <span className="font-bold text-slate-900">Ideal for: </span>
                <span className="text-slate-600">
                  Businesses eliminating manual processes, automating workflows, and building scalable digital products.
                </span>
              </div>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-golomon-secondary flex-shrink-0" /> Tailored to your exact operational workflows
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-golomon-secondary flex-shrink-0" /> Intelligent AI & workflow automation built-in
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-golomon-secondary flex-shrink-0" /> Continuous optimization as your business grows
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}