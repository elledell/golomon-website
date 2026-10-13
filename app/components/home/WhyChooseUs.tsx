"use client";

import { ClipboardCheck, MessageCircle, TrendingUp, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      id: "01",
      title: "Professional and Structured Delivery",
      description:
        "We apply disciplined processes, clear project governance, and structured workflows to ensure every engagement is delivered efficiently, transparently and to a high professional standard.",
      icon: ClipboardCheck,
    },
    {
      id: "02",
      title: "Clear and Responsive Communication",
      description:
        "We maintain open, timely, and purposeful communication throughout every engagement, ensuring expectations are clearly understood, progress is visible and stakeholders remain aligned from planning through implementation and support.",
      icon: MessageCircle,
    },
    {
      id: "03",
      title: "Practical, Scalable Solutions",
      description:
        "We deliver fit-for-purpose technology solutions designed around real business requirements. Our approach balances functionality, scalability, efficiency and cost to ensure technology investments deliver sustainable business value.",
      icon: TrendingUp,
    },
    {
      id: "04",
      title: "Client-centred Partnerships",
      description:
        "We take the time to understand each client's objectives, operational environment and growth priorities. By working collaboratively and building trusted relationships, we provide solutions and ongoing support that evolve with our clients' needs.",
      icon: Handshake,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full py-24 relative overflow-hidden bg-[#F8FBFE]"
    >
      {/* Subtle Blue Tech Nodes Watermark (Left Edge) */}
      <div className="absolute inset-y-0 left-0 w-[600px] opacity-[0.04] pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto object-cover stroke-[#001433]"
        >
          <path d="M0 60H120L155 95H280" strokeWidth="3" />
          <circle cx="285" cy="95" r="5" strokeWidth="3" />
          <path d="M0 130H90L130 170H230" strokeWidth="3" />
          <circle cx="235" cy="170" r="5" strokeWidth="3" />
          <rect x="30" y="210" width="90" height="55" strokeWidth="3" />
          <path d="M120 235H240L270 265H350" strokeWidth="3" />
          <circle cx="355" cy="265" r="5" strokeWidth="3" />
          <path d="M20 420V780" strokeWidth="3" />
          <path d="M40 450V820" strokeWidth="3" />
          <path d="M60 480V850" strokeWidth="3" />
          <circle cx="20" cy="785" r="4" strokeWidth="3" />
          <circle cx="40" cy="825" r="4" strokeWidth="3" />
          <circle cx="60" cy="855" r="4" strokeWidth="3" />
          <rect x="85" y="620" width="110" height="140" strokeWidth="3" />
          <path d="M195 690H310L340 720H420" strokeWidth="3" />
          <circle cx="425" cy="720" r="5" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Sticky Section Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[2px] w-8 bg-golomon-secondary"></span>
            <span className="text-golomon-secondary font-bold text-xs sm:text-sm tracking-widest uppercase">
              THE GOLOMON ADVANTAGE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Why Choose <br />
            <span className="text-golomon-primary">Golomon.</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We go beyond just supplying technology. As your trusted Technology Solutions Provider, we are committed to excellence, accountability, and sustainable growth for your business.
          </p>

          {/* Decorative Divider */}
          <div className="w-full max-w-[200px] h-px bg-slate-200"></div>
        </div>

        {/* Right Side: 2x2 Grid with Icons */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-golomon-secondary/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              {/* Icon & Number Row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#F0F6FC] text-golomon-primary flex items-center justify-center group-hover:bg-golomon-secondary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none tracking-tighter">
                  {item.id}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-golomon-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}