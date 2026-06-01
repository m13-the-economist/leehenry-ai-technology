"use client";
import { useEffect, useRef, useState } from "react";

export default function ServiceTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { number: "01", title: "AI Integration", desc: "Embed intelligence directly into your operations.", color: "var(--teal)" },
    { number: "02", title: "Process Automation", desc: "Replace manual work with systems that run themselves.", color: "var(--purple)" },
    { number: "03", title: "Smart Systems", desc: "Turn disconnected machines into intelligent networks.", color: "var(--gold)" },
    { number: "04", title: "Custom Software", desc: "Built precisely for your problem. Nothing generic.", color: "var(--teal)" },
  ];

  return (
    <section
      ref={ref}
      className="service-teaser-section"
      style={{
        padding: "8rem 4rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="service-teaser-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem", flexWrap: "wrap", gap: "2rem" }}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                What We Do
              </span>
            </div>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.2" }}>
              Four ways we make
              <br />
              <span style={{ color: "var(--text-secondary)" }}>your business smarter.</span>
            </h2>
          </div>
          <a
            href="/services"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "0.7rem 1.5rem",
              borderRadius: "4px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
              display: "inline-block",
            }}
          >
            View All Services →
          </a>
        </div>

        <div className="service-teaser-list" style={{ display: "flex", flexDirection: "column" }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 1fr auto",
                gap: "2rem",
                padding: "2rem 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                alignItems: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.8s ease ${0.1 * index + 0.3}s`,
                cursor: "pointer",
              }}
              onClick={() => window.location.href = "/services"}
            >
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: service.color, letterSpacing: "0.1em" }}>
                {service.number}
              </span>
              <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: "600", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                {service.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                {service.desc}
              </p>
              <span style={{ color: service.color, fontSize: "1rem" }}>↗</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-teaser-section {
            padding: 4rem 1.25rem !important;
          }
          .service-teaser-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-bottom: 3rem !important;
          }
          .service-item {
            grid-template-columns: 50px 1fr !important;
            gap: 1rem !important;
            padding: 1.5rem 0 !important;
          }
          .service-item h3 {
            grid-column: 2 / 3 !important;
            grid-row: 1 / 2 !important;
          }
          .service-item p {
            grid-column: 2 / 3 !important;
            grid-row: 2 / 3 !important;
          }
          .service-item span:first-child {
            grid-row: 1 / 2 !important;
          }
          .service-item span:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
