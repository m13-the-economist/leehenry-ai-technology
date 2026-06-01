"use client";
import { useEffect, useRef, useState } from "react";

export default function FeaturedWork() {
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

  return (
    <section
      ref={ref}
      className="featured-work-section"
      style={{
        padding: "8rem 4rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
          marginBottom: "4rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Featured Work
          </span>
        </div>
        <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
          We don't just talk.
          <span style={{ color: "var(--text-secondary)" }}> We ship.</span>
        </h2>
      </div>

      {/* Featured project card */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease 0.2s",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => window.open("https://marketllama.com", "_blank")}
      >
        <div className="featured-card-image" style={{ position: "relative", height: "450px" }}>
          <img
            src="/marketllama.png"
            alt="Market Llama"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              filter: "brightness(0.4)",
              transition: "filter 0.4s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.55)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.4)"; }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 30%, rgba(124,58,237,0.12) 0%, transparent 50%)" }} />

          <div className="featured-card-content" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  AI Trading Intelligence
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#080808", background: "var(--gold)", padding: "0.2rem 0.6rem", borderRadius: "100px", fontWeight: "600" }}>
                  LIVE
                </span>
              </div>
              <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.03em", color: "#f5f5f5", marginBottom: "0.75rem" }}>
                Market Llama
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "rgba(255,255,255,0.6)", maxWidth: "500px", lineHeight: "1.5" }}>
                A full AI-powered trading intelligence platform.
              </p>
            </div>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5f5f5", fontSize: "1.2rem", flexShrink: 0 }}>
              ↗
            </div>
          </div>
        </div>

        {/* Stats row - hidden on mobile */}
        <div className="featured-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          {[
            { label: "Type", value: "Progressive Web App" },
            { label: "AI Stack", value: "Claude AI Integration" },
            { label: "Status", value: "Live at marketllama.com" },
          ].map((stat) => (
            <div key={stat.label} style={{ padding: "1.5rem 2rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                {stat.label}
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", color: "var(--text-primary)", fontWeight: "500" }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease 0.4s",
        }}
      >
        <a
          href="/our-work"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "0.8rem 2rem",
            borderRadius: "4px",
          }}
        >
          View All Our Work →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-work-section {
            padding: 4rem 1.25rem !important;
          }
          .featured-card-image {
            height: 280px !important;
          }
          .featured-card-content {
            padding: 1.5rem !important;
          }
          .featured-card-content h3 {
            font-size: 1.5rem !important;
          }
          .featured-card-content p {
            font-size: 0.75rem !important;
          }
          .featured-stats {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
