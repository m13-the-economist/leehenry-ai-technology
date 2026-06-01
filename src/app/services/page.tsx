"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

function useVisible(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const services = [
  {
    number: "01",
    title: "AI Integration",
    tagline: "Make your business think.",
    color: "var(--teal)",
    description: "We embed artificial intelligence directly into your existing operations. Not as a gimmick — as a genuine upgrade to how your business processes information and makes decisions.",
    includes: ["Custom AI model integration", "Intelligent data pipelines", "Automated decision systems", "Natural language interfaces", "Predictive analytics"],
    industries: ["Finance", "Logistics", "Healthcare", "Retail", "Manufacturing"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Process Automation",
    tagline: "Stop doing it manually.",
    color: "var(--purple)",
    description: "We identify the tasks eating your team's time and replace them with intelligent automated systems. From data entry to complex multi-step workflows — if it's repetitive, we automate it.",
    includes: ["Workflow automation", "Document processing", "API integrations", "Scheduled task systems", "Real-time monitoring dashboards"],
    industries: ["Operations", "Finance", "HR", "Supply Chain", "Customer Service"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Smart Systems",
    tagline: "Your machines, upgraded.",
    color: "var(--gold)",
    description: "We take your disconnected hardware and manual machines and make them intelligent. Real-time monitoring, predictive alerts, and data collection that gives you full visibility into your operations.",
    includes: ["IoT sensor integration", "Real-time monitoring", "Predictive maintenance alerts", "Remote control systems", "Performance dashboards"],
    industries: ["Manufacturing", "Agriculture", "Energy", "Construction", "Facilities"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Custom Software",
    tagline: "Built for your problem.",
    color: "var(--teal)",
    description: "When off-the-shelf tools don't cut it, we build exactly what you need. Web platforms, mobile apps, internal tools, enterprise systems — designed around your specific workflow.",
    includes: ["Web applications", "Mobile apps", "Internal tools", "Enterprise platforms", "API development"],
    industries: ["Any industry", "Startups", "Enterprise", "Government", "NGOs"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
  },
];

const process = [
  { step: "01", title: "Discover", desc: "We come to you, learn your business, and identify exactly where intelligence can create the most impact." },
  { step: "02", title: "Design", desc: "We map out the solution architecture — what we'll build, how it connects, and what it will cost." },
  { step: "03", title: "Build", desc: "Our team executes with precision. Regular updates, transparent progress, no surprises." },
  { step: "04", title: "Deploy", desc: "We launch, train your team, and stay on to make sure everything runs perfectly." },
];

export default function ServicesPage() {
  const heroVis = useVisible(0.1);
  const processVis = useVisible(0.2);
  const ctaVis = useVisible(0.3);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "12rem 4rem 6rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1800&auto=format&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.15)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.5) 60%, transparent 100%)" }} />
        </div>
        <div
          ref={heroVis.ref}
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            opacity: heroVis.visible ? 1 : 0,
            transform: heroVis.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Custom Builds
            </span>
          </div>
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "1", marginBottom: "1.5rem" }}>
            What We Build
            <br />
            <span style={{ color: "var(--text-secondary)" }}>For Your Business.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "500px", lineHeight: "1.7" }}>
            We don't sell generic software. We come into your business, understand your problems, and build exactly what you need.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <ServiceSection key={index} service={service} reverse={index % 2 !== 0} />
      ))}

      {/* Process */}
      <section
        style={{
          padding: "8rem 4rem",
          background: "var(--bg-secondary)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          ref={processVis.ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            opacity: processVis.visible ? 1 : 0,
            transform: processVis.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--purple)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              How We Work
            </span>
          </div>
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "5rem" }}>
            From problem to
            <span style={{ color: "var(--text-secondary)" }}> live system.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {process.map((step, index) => (
              <div
                key={index}
                style={{
                  opacity: processVis.visible ? 1 : 0,
                  transform: processVis.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease ${index * 0.15}s`,
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.1em", display: "block", marginBottom: "1rem" }}>
                  {step.step}
                </span>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.4rem", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "8rem 4rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          ref={ctaVis.ref}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            opacity: ctaVis.visible ? 1 : 0,
            transform: ctaVis.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Ready to get
            <span style={{ color: "var(--teal)" }}> intelligent?</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "3rem" }}>
            Tell us your business problem. We'll come back with exactly how we'd solve it.
          </p>
          <a
            href="/work-with-us"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "0.95rem",
              color: "#080808",
              background: "#f5f5f5",
              padding: "1rem 2.5rem",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

function ServiceSection({ service, reverse }: { service: typeof services[0], reverse: boolean }) {
  const { ref, visible } = useVisible(0.2);

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 4rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
          direction: reverse ? "rtl" : "ltr",
        }}
      >
        {/* Image */}
        <div
          style={{
            direction: "ltr",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : `translateX(${reverse ? "40px" : "-40px"})`,
            transition: "all 0.8s ease",
            borderRadius: "12px",
            overflow: "hidden",
            height: "400px",
            position: "relative",
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${service.color.replace("var(--teal)", "rgba(13,148,136,0.2)").replace("var(--purple)", "rgba(124,58,237,0.2)").replace("var(--gold)", "rgba(201,168,76,0.2)")} 0%, transparent 70%)` }} />
        </div>

        {/* Content */}
        <div
          style={{
            direction: "ltr",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : `translateX(${reverse ? "-40px" : "40px"})`,
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: service.color, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
            {service.number}
          </span>
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
            {service.title}
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: service.color, marginBottom: "1.5rem", fontStyle: "italic" }}>
            {service.tagline}
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "2rem" }}>
            {service.description}
          </p>
          <div style={{ marginBottom: "2rem" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              What's Included
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {service.includes.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: service.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {service.industries.map((ind) => (
              <span key={ind} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--text-dim)", border: "1px solid rgba(255,255,255,0.06)", padding: "0.3rem 0.7rem", borderRadius: "100px" }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}