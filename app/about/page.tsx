"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Lightbulb, 
  Handshake, 
  ArrowRight,
  Download,
  CheckCircle2,
  FileText,
  Layers,
  MessageSquare,
  Scaling,
  Users
} from "lucide-react";

export default function AboutPage() {
  const commitments = [
    {
      title: "Understanding Our Clients",
      description:
        "We listen, understand the business and design technology around real needs, objectives and growth ambitions.",
    },
    {
      title: "Delivering Practical Solutions",
      description:
        "We provide integrated, fit-for-purpose and scalable technology that solves real business challenges.",
    },
    {
      title: "Creating Measurable Value",
      description:
        "We focus on outcomes that improve efficiency, productivity, visibility, reliability and overall business performance.",
    },
    {
      title: "Pursuing Excellence and Innovation",
      description:
        "We combine technical expertise, disciplined delivery and continuous innovation to ensure our solutions remain relevant and effective.",
    },
    {
      title: "Building Trusted Partnerships",
      description:
        "We operate with integrity, accountability and responsiveness, building lasting relationships with our clients and technology partners.",
    },
  ];

  const coreValues = [
    {
      title: "Professional Integrity",
      description:
        "We uphold the highest standards of ethical conduct, transparency and accountability in everything we do.",
      Icon: ShieldCheck,
      bg: "bg-[#ECF5FB]",
      iconColor: "text-golomon-primary",
    },
    {
      title: "Industry Collaboration",
      description:
        "We build strategic partnerships and leverage collective expertise to deliver integrated solutions and shared success.",
      Icon: Handshake,
      bg: "bg-orange-50",
      iconColor: "text-golomon-secondary",
    },
    {
      title: "Technology Innovation",
      description:
        "We harness emerging technologies and forward-thinking solutions to drive transformation and sustainable competitive advantage.",
      Icon: Lightbulb,
      bg: "bg-[#ECF5FB]",
      iconColor: "text-golomon-primary",
    },
    {
      title: "Client Centricity",
      description:
        "We align our solutions with our clients' business objectives to deliver measurable value and lasting impact.",
      Icon: Target,
      bg: "bg-orange-50",
      iconColor: "text-golomon-secondary",
    },
  ];

  const whyChooseUs = [
    {
      number: "01",
      title: "Professional & Disciplined Delivery",
      description:
        "We apply structured methodologies, robust project governance and clearly defined workflows to ensure every engagement is executed efficiently, transparently and in accordance with the highest standards of quality, accountability and professionalism.",
      Icon: Layers,
    },
    {
      number: "02",
      title: "Transparent & Responsive Communication",
      description:
        "We prioritize clear, timely and purposeful communication throughout every engagement, ensuring expectations are well defined, progress is transparent and stakeholders remain aligned from initial planning through implementation and ongoing support.",
      Icon: MessageSquare,
    },
    {
      number: "03",
      title: "Practical & Scalable Solutions",
      description:
        "We design and deliver fit-for-purpose technology solutions aligned with business requirements, balancing functionality, scalability, operational efficiency and cost-effectiveness to maximize technology investment and deliver sustainable business value.",
      Icon: Scaling,
    },
    {
      number: "04",
      title: "Client-Centred Partnerships",
      description:
        "We develop a deep understanding of each client's strategic objectives, operational environment and growth priorities. Through collaborative engagement and trusted long-term partnerships, we deliver tailored solutions and responsive support that adapt to evolving business needs and create lasting value.",
      Icon: Users,
    },
  ];

  return (
    <main className="w-full bg-white flex flex-col">
      
      {/* 1. About Hero Section (Flush with Navbar - pt-20 removed) */}
      <section className="relative w-full py-20 lg:py-28 bg-[#ECF5FB]/50 overflow-hidden border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center mb-5">
            <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
              ABOUT GOLOMON LIMITED
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-golomon-primary leading-tight tracking-tight mb-6 max-w-4xl">
            Powering Progress Through Integrated Technology.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            Golomon Limited is a Technology Solutions Provider (TSP) delivering integrated IT products, services and solutions that empower organizations to build, modernize, manage and optimize their technology environments.
          </p>

          {/* Hero Actions including Downloadable Company Profile */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Golomon Company Profile v2.pdf"
              download="Golomon Company Profile v2.pdf"
              className="inline-flex items-center gap-2.5 bg-golomon-secondary text-white px-7 py-4 rounded-md font-bold text-sm sm:text-base hover:bg-orange-700 transition-colors shadow-md shadow-orange-500/20"
            >
              <Download className="w-5 h-5" />
              Download Golomon's Profile 
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-4 rounded-md font-bold text-sm sm:text-base hover:bg-golomon-primary transition-colors shadow-md"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Company Overview & Business Background */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative w-full h-[450px] lg:h-[580px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/8.png"
                alt="Golomon Limited Business Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-golomon-primary/10 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-b-4 border-golomon-secondary">
                <span className="block text-xs font-bold uppercase tracking-widest text-golomon-secondary mb-1">
                  Business Type
                </span>
                <span className="block text-xl font-extrabold text-slate-900">
                  Technology Solutions Provider (TSP)
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">
                  Sector: Information Technology (IT)
                </span>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
                  BUSINESS BACKGROUND
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Our Story
              </h2>

              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  Golomon Limited was established to address the growing need for integrated, commercially viable technology solutions that align with business strategy, enhance operational performance and enable sustainable growth. As organizations increasingly rely on technology to drive efficiency, competitiveness and innovation, many continue to face fragmented IT environments, legacy systems, manual processes, disconnected platforms and complex multi-vendor ecosystems that constrain performance and limit business value.
                </p>
                <p>
                  We bridge this gap by combining strategic technology advisory, engineering expertise and integrated solution delivery to align technology investments with business priorities and long-term organizational objectives. Our approach extends beyond the provision of IT products and services. We work in partnership with our clients to understand their business models, strategic ambitions, operational challenges, existing technology landscapes as well as evolving requirements; translating these insights into practical, scalable and business-focused technology solutions.
                </p>
                <p>
                  Through a broad ecosystem of leading technology platforms, hardware manufacturers, software providers, cloud service partners, distributors and specialist implementation firms, Golomon delivers flexible, vendor-agnostic solutions tailored to each client's unique requirements. This ecosystem-driven approach enables us to navigate complex technology choices, integrate complementary capabilities and develop purpose-built solutions that maximize technology investments, strengthen operational resilience and deliver measurable business outcomes.
                </p>
                <p>
                  At Golomon, our focus is on making technology work strategically for business; transforming complexity into clarity, investments into value and digital capabilities into sustainable competitive advantage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Split + 5 Commitments */}
      <section className="w-full py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            
            {/* Mission Card (Light) */}
            <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-100 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ECF5FB] rounded-full -translate-y-1/2 translate-x-1/3 opacity-80 z-0"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-golomon-primary rounded-full flex items-center justify-center shadow-md">
                    <Target className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-golomon-primary font-bold text-[13px] tracking-[0.2em] uppercase">
                      Why We Exist
                    </span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
                      Our <span className="text-golomon-secondary">Mission</span>
                    </h2>
                  </div>
                </div>

                <p className="text-2xl lg:text-[1.65rem] font-bold text-slate-900 mb-6 leading-[1.35]">
                  To help businesses harness technology to simplify operations, improve performance and achieve sustainable growth through practical, integrated and scalable solutions.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10">
                  We provide integrated, fit-for-purpose and scalable technology that solves real business challenges and creates measurable operational value.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                {["Practical", "Integrated", "Scalable"].map((tag) => (
                  <span key={tag} className="px-5 py-2.5 bg-[#ECF5FB] text-golomon-primary rounded-full text-sm font-bold border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Vision Card (Dark) */}
            <div className="bg-[#00225A] p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 100 0 L 100 150 L 300 250 L 500 250" stroke="#ECF5FB" strokeWidth="2" fill="none" />
                  <path d="M 400 0 L 400 100 L 200 200" stroke="#CD5007" strokeWidth="2" fill="none" />
                  <circle cx="500" cy="250" r="4" fill="#ECF5FB" />
                  <circle cx="200" cy="200" r="4" fill="#CD5007" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-golomon-secondary rounded-full flex items-center justify-center shadow-md">
                    <Eye className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-golomon-secondary font-bold text-[13px] tracking-[0.2em] uppercase">
                      Where We&apos;re Going
                    </span>
                    <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">
                      Our <span className="text-[#ECF5FB]">Vision</span>
                    </h2>
                  </div>
                </div>

                <p className="text-2xl lg:text-[1.65rem] font-bold text-white mb-6 leading-[1.35]">
                  To be a trusted leading technology solutions partner, enabling businesses to achieve sustainable growth through technology.
                </p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10">
                  We operate with integrity, accountability and responsiveness, building lasting relationships with our clients and technology partners.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                {["Trusted Partner", "Innovation", "Sustainable Growth"].map((tag) => (
                  <span key={tag} className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-bold border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          </div>

          {/* 5 Strategic Commitments */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/80 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-golomon-secondary font-bold text-xs tracking-widest uppercase block mb-2">
                OUR COMMITMENTS
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                How We Deliver on Our Mission & Vision
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-golomon-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values Section - Inline Floating Card Design */}
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-[#ECF5FB]/60 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col xl:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full xl:w-1/3 flex flex-col justify-center">
            <span className="text-golomon-primary font-bold text-[13px] tracking-[0.2em] uppercase mb-3">
              THE PRINCIPLES THAT GUIDE US
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Core <span className="text-golomon-secondary">Values</span>
            </h2>
            <div className="h-1 w-16 bg-golomon-primary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed pr-4">
              Every solution we architect and every partnership we build is anchored in four core principles that define how we operate and deliver value.
            </p>
          </div>

          {/* Right: Floating Columns Card */}
          <div className="w-full xl:w-2/3 bg-white rounded-3xl shadow-2xl p-6 lg:p-10 border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {coreValues.map((val, idx) => (
                <div key={idx} className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0" : "pt-2 sm:pt-0"} sm:px-4 lg:px-6`}>
                  <div className={`w-12 h-12 ${val.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <val.Icon className={`${val.iconColor} w-6 h-6`} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Golomon Section */}
      <section className="w-full py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center mb-4">
              <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
                THE GOLOMON ADVANTAGE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Why Choose Golomon.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.number}
                className="bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-200/70 hover:border-golomon-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-golomon-primary group-hover:bg-golomon-primary group-hover:text-white transition-colors">
                      <item.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-golomon-secondary/40 transition-colors">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA + Download Company Profile Section */}
      <section className="w-full py-24 bg-golomon-primary relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center text-white flex flex-col items-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-golomon-secondary">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Advance Your Technology Strategy?
          </h2>
          <div className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed space-y-4">
            <p>
              Partner with Golomon Limited to transform your technology environment through integrated, scalable as well as business-aligned solutions that drive operational excellence and measurable business outcomes.
            </p>
            <p>
              Connect with our team to explore how we can support your strategic objectives or download our corporate profile to share our capabilities with your stakeholders.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-golomon-secondary text-white px-8 py-4 rounded-md font-bold text-base md:text-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              Talk to Our Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="/Golomon Company Profile v2.pdf"
              download="Golomon Company Profile v2.pdf"
              className="inline-flex items-center gap-2.5 bg-white text-golomon-primary px-8 py-4 rounded-md font-bold text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Golomon's Profile
            </a>
          </div>
        </div>
      </section>
      
    </main>
  );
}