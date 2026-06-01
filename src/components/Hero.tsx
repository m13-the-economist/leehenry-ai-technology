"use client";
import { useEffect, useState } from "react";
import MorphAnimation from "@/components/MorphAnimation";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "8rem 0 6rem 0",
      }}
    >
      <MorphAnimation />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 60%, transparent 100%)", zIndex: 2 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 60%)", zIndex: 2 }} />

      <div style={{ position: "relative", zIndex: 10, padding: "0 4rem", maxWidth: "1200px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            animation: "fadeUp 0.8s ease forwards",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "var(--teal)" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Lee Henry AI & Technology
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: "700",
            lineHeight: "0.95",
            letterSpacing: "-0.04em",
            marginBottom: "2rem",
            animation: "fadeUp 0.8s ease 0.1s both",
          }}
        >
          Products for the world.
          <br />
          <span style={{ color: "var(--teal)" }}>Systems for your business.</span>
        </h1>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "550px",
            lineHeight: "1.7",
            marginBottom: "3rem",
            animation: "fadeUp 0.8s ease 0.2s both",
          }}
        >
          We ship our own products to the world and build custom solutions for companies ready to level up.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.3s both" }}>
          <a
            href="/products"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "0.9rem",
              color: "#080808",
              background: "#f5f5f5",
              padding: "0.9rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Explore Our Products →
          </a>
          <a
            href="/work-with-us"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              fontSize: "0.9rem",
              color: "var(--text-primary)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "0.9rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--teal)"; (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
          >
            Need a Custom Build?
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "4rem",
          display: "flex",
          gap: "3rem",
          animation: "fadeUp 0.8s ease 0.4s both",
          zIndex: 10,
        }}
      >
        {[
          { number: "01", label: "Product Shipped" },
          { number: "∞", label: "Custom Builds" },
          { number: "EST.", label: "2025" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.5rem", fontWeight: "700", color: "var(--text-primary)" }}>
              {stat.number}
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--text-secondary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}