"use client";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "10rem 4rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>
        {/* Left label */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--purple)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Who We Are
            </span>
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
            001
          </span>
        </div>

        {/* Right content */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: "600",
              lineHeight: "1.2",
              letterSpacing: "-0.03em",
              marginBottom: "2rem",
              color: "var(--text-primary)",
            }}
          >
            We ship products to the world.
            <br />
            <span style={{ color: "var(--text-secondary)" }}>We build systems for companies.</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: "1.8",
              marginBottom: "2rem",
              maxWidth: "560px",
            }}
          >
            Lee Henry AI & Technology exists to close the gap between where technology is and where people actually live. We build intelligent products anyone can use and custom systems that solve specific business problems.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: "1.8",
              maxWidth: "560px",
            }}
          >
            From Market Llama to logistics automation we've proven we can build. Now we're bringing intelligence to everyone.
          </p>

          {/* Accent line */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: "3rem",
            }}
          >
            {[
              { value: "AI", label: "Products", color: "var(--teal)" },
              { value: "Custom", label: "Systems", color: "var(--purple)" },
              { value: "24/7", label: "Intelligence", color: "var(--gold)" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.5rem", fontWeight: "700", color: item.color, marginBottom: "0.25rem" }}>
                  {item.value}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}