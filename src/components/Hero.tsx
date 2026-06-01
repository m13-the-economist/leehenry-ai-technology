"use client";
import { useEffect, useState } from "react";
import MorphAnimation from "@/components/MorphAnimation";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Building the future.",
    "AI for everyone.",
    "Intelligence everywhere.",
    "Solve real problems.",
    "Ship with purpose.",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setTypedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8rem 0 0 0",
      }}
    >
      <MorphAnimation />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 60%, transparent 100%)", zIndex: 2 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 60%)", zIndex: 2 }} />

      {/* Main Content - Centered vertically */}
      <div className="hero-content" style={{ position: "relative", zIndex: 10, padding: "0 4rem", maxWidth: "1200px", width: "100%", margin: "auto 0", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(2.8rem, 9vw, 7rem)",
            fontWeight: "700",
            lineHeight: "0.92",
            letterSpacing: "-0.04em",
            marginBottom: "1rem",
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
            fontSize: "clamp(1rem, 4vw, 1.1rem)",
            color: "var(--text-secondary)",
            maxWidth: "550px",
            lineHeight: "1.6",
            marginBottom: "2rem",
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

      {/* Stats Bar - At bottom with typing animation above it on desktop */}
      <div className="hero-stats-container" style={{ position: "relative", zIndex: 10, padding: "0 4rem 2rem 0", animation: "fadeUp 0.8s ease 0.4s both" }}>
        {/* Typing Animation - Desktop only */}
        <div className="hero-typing" style={{ textAlign: "right", marginBottom: "1rem" }}>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              color: "rgba(201,168,76,0.8)",
              letterSpacing: "0.05em",
            }}
          >
            {typedText}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1rem",
                backgroundColor: "#c9a84c",
                marginLeft: "2px",
                animation: "blink 1s step-end infinite",
                verticalAlign: "middle",
              }}
            />
          </span>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{ display: "flex", justifyContent: "flex-end", gap: "3rem" }}>
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
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 0 0 0 !important;
          }

          .hero-content {
            padding: 0 1.25rem !important;
            margin-top: 2rem !important;
          }

          .hero-content h1 {
            font-size: clamp(2rem, 8vw, 2.8rem) !important;
            line-height: 1.15 !important;
          }

          .hero-content p {
            font-size: 0.9rem !important;
          }

          .hero-content a {
            padding: 0.7rem 1.2rem !important;
            font-size: 0.8rem !important;
          }

          .hero-stats-container {
            padding: 0 1.25rem 1.5rem 0 !important;
          }

          .hero-stats {
            gap: 1.5rem !important;
          }

          .hero-stats div div:first-child {
            font-size: 1rem !important;
          }

          .hero-stats div div:last-child {
            font-size: 0.5rem !important;
          }

          /* Hide typing animation on mobile */
          .hero-typing {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}