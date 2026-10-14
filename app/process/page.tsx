"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  Search, 
  PenTool, 
  Cpu, 
  Rocket, 
  RefreshCw,
  Layers,
  MessageSquare,
  Scaling,
  Users,
  Network,
  BarChart,
  ArrowRight,
  Download
} from "lucide-react";

export default function ProcessPage() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const whyChooseUs = [
    {
      number: "01",
      title: "Professional & Disciplined Delivery",
      description:
        "We apply structured methodologies, robust project governance and clearly defined workflows to ensure consistent execution, effective risk management and the highest standards of professionalism, accountability and delivery excellence.",
      Icon: Layers,
    },
    {
      number: "02",
      title: "Transparent & Responsive Communication",
      description:
        "We prioritize clear, timely and purposeful communication throughout every engagement, ensuring stakeholder alignment, transparent progress reporting, effective coordination and well-managed expectations.",
      Icon: MessageSquare,
    },
    {
      number: "03",
      title: "Practical & Scalable Solutions",
      description:
        "We design and deliver purpose-built technology solutions aligned with business requirements, balancing functionality, scalability, performance and cost-effectiveness to maximize long-term value and adaptability.",
      Icon: Scaling,
    },
    {
      number: "04",
      title: "Client-Centred Partnerships",
      description:
        "We build collaborative, long-term relationships grounded in a deep understanding of each client's strategic objectives, operational priorities and growth ambitions; delivering tailored solutions and responsive support that evolve with changing business needs.",
      Icon: Users,
    },
    {
      number: "05",
      title: "Strategic Technology Ecosystem",
      description:
        "We leverage an extensive ecosystem of hardware manufacturers, software vendors, distributors, cloud service providers and specialist partners to evaluate technology options objectively and deliver solutions aligned with each client's requirements, existing environment and investment priorities.",
      Icon: Network,
    },
    {
      number: "06",
      title: "Measurable Business Outcomes",
      description:
        "We align technology initiatives with tangible business objectives, focusing on improved operational efficiency, increased productivity, enhanced visibility, greater system reliability and optimized technology investments to deliver sustainable, measurable business value.",
      Icon: BarChart,
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Discovery and Needs Assessment",
      points: [
        { label: "Stakeholder Interviews", text: "We meet with business leaders and end users to map out current workflows and operational pain points." },
        { label: "Technical Audit", text: "Golomon evaluates existing IT infrastructure, hardware, legacy software and security gaps." },
        { label: "Requirements Gathering", text: "Our team defines clear project objectives, key performance indicators (KPIs) and budget parameters." }
      ],
      icon: Search,
    },
    {
      id: 2,
      title: "Strategy and Solution Design",
      points: [
        { label: "Solution Architecture", text: "Our solution architects map out the technical blueprint, focusing on scalability, resilience and security." },
        { label: "Vendor & Stack Selection", text: "We choose the right combination of cloud services, hardware, custom code or third-party software (such as productivity tools, business applications or ERP platforms)." },
        { label: "Roadmap & Proposal", text: "We deliver a data-driven implementation plan, cost breakdown and timeline to the client for approval." }
      ],
      icon: PenTool,
    },
    {
      id: 3,
      title: "Development and Customization",
      points: [
        { label: "Proof of Concept (PoC) / MVP", text: "Our engineers and developers build a scaled-down version or pilot test to validate core assumptions before full-scale deployment." },
        { label: "Coding and Integration", text: "They write and develop custom software, configure cloud or on-premise hardware and integrate disparate systems using industry standards." },
        { label: "Quality Assurance (QA) Testing", text: "We then run security audits, performance stress tests and bug fixes." }
      ],
      icon: Cpu,
    },
    {
      id: 4,
      title: "Deployment and Implementation",
      points: [
        { label: "System Rollout", text: "Golomon install, configure and launch the new technology into the live production environment." },
        { label: "User Training", text: "We conduct workshops, supply documentation and onboard employees to ensure high adoption rates." },
        { label: "Pilot Monitoring", text: "We track early performance metrics and resolve immediate operational hiccups." }
      ],
      icon: Rocket,
    },
    {
      id: 5,
      title: "Ongoing Support and Optimization",
      points: [
        { label: "Managed IT Support", text: "Golomon provides continuous helpdesk troubleshooting, server monitoring and system maintenance." },
        { label: "Updates and Upgrades", text: "We apply security patches, feature updates and infrastructure scaling as the business grows." },
        { label: "Feedback Loops", text: "Review performance data periodically to suggest proactive technological enhancements." }
      ],
      icon: RefreshCw,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = Number(entry.target.getAttribute("data-id"));
            setVisibleSections((prev) => 
              prev.includes(targetId) ? prev : [...prev, targetId]
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-white flex flex-col">
      
      {/* 1. Why Choose Golomon Section */}
      <section className="w-full pt-28 lg:pt-32 pb-24 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Organizations Choose <span className="text-golomon-secondary">Golomon</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Your trusted Technology Solutions Provider (TSP) committed to excellence, accountability and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* 2. Workflow Process Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#001a4d]">
          <img
            src="/11.png"
            alt="Global Network Map"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-golomon-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-golomon-primary/40 via-[#00225A]/50 to-[#001a4d]/70"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="text-golomon-secondary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Our <span className="text-golomon-secondary">Proven Process</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              A disciplined, step-by-step approach to transforming your technology investment into measurable business value.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2 z-0"></div>

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const isVisible = visibleSections.includes(step.id);

                return (
                  <div 
                    key={step.id} 
                    ref={(el) => {
                      if (el) sectionRefs.current[index] = el;
                    }}
                    data-id={step.id}
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
                  >
                    <div className={`hidden md:block w-[45%] ${isEven ? "order-1" : "order-3"}`}></div>

                    <div 
                      className={`absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-16 h-16 rounded-full bg-golomon-primary border-2 border-white/30 group-hover:border-golomon-secondary flex items-center justify-center z-10 order-2 transition-all duration-700 ease-out shadow-lg ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-golomon-secondary/20 flex items-center justify-center transition-colors duration-500">
                        <step.icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>

                    <div 
                      className={`w-full md:w-[45%] pl-24 md:pl-0 ${
                        isEven ? "order-3 md:text-left" : "order-1 md:text-right"
                      } transition-all duration-1000 ease-out ${
                        isVisible 
                          ? "opacity-100 translate-x-0" 
                          : `opacity-0 translate-x-12 ${isEven ? 'md:translate-x-24' : 'md:-translate-x-24'}`
                      }`}
                    >
                      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-golomon-secondary/50 hover:bg-white/15 transition-all duration-300 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                          <span className="text-4xl font-extrabold text-white/20 mb-2 block transition-colors duration-500 group-hover:text-golomon-secondary/40">
                            0{step.id}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-5">
                            {step.title}
                          </h3>
                          <ul className={`space-y-3 ${isEven ? 'md:text-left' : 'md:text-right text-left'}`}>
                            {step.points.map((point, idx) => (
                              <li key={idx} className="text-blue-50 leading-relaxed text-[15px]">
                                <strong className="text-white font-semibold">{point.label}:</strong> {point.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Banner Section */}
      <section className="w-full py-24 bg-[#F8FAFC] px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto bg-white rounded-[2.5rem] shadow-xl p-10 sm:p-12 lg:p-20 relative overflow-hidden text-center border border-slate-100">
          
          {/* Circuit Nodes Background Image - Fixed Cropping */}
          <div className="absolute inset-0 z-0 pointer-events-none flex items-start justify-center">
            <img 
              src="/13.png" 
              alt="Circuit Nodes Background" 
              className="w-full max-w-[1400px] object-contain object-top opacity-100 mix-blend-multiply"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center pt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-3xl">
              Align your enterprise investments with <span className="text-golomon-primary">measurable business outcomes</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-10">
              Engage with our team for a business discovery consultation or download our company profile to review our full suite of capabilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-golomon-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-md flex items-center gap-2 text-sm sm:text-base"
              >
                Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/Golomon-Company-Profile.pdf"
                download="Golomon-Company-Profile.pdf"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-golomon-primary hover:text-golomon-primary transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-5 h-5" /> Download Golomon's Profile (PDF)
              </a>
            </div>
          </div>
          
        </div>
      </section>
      
    </main>
  );
}