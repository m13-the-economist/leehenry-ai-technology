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
        {/* Product screenshot */}
        <div style={{ position: "relative", height: "500px", overflow: "hidden" }}>
          <img
            src="/marketllama.png"
            alt="Market Llama"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              filter: "brightness(0.45)",
            }}
          />

          {/* Overlay gradient */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)" }} />

          {/* Content overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "3rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
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
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "500px", lineHeight: "1.6" }}>
               A full AI-powered trading intelligence platform.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1.5rem" }}>

              <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5f5f5", fontSize: "1.3rem" }}>
                ↗
              </div>
            </div>
          </div>
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
    </section>
  );
}
