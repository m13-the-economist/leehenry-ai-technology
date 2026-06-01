"use client";
import { useEffect, useRef, useState } from "react";

export default function Statement() {
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
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "var(--bg-secondary)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
      >
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "700",
            lineHeight: "1.1",
            letterSpacing: "-0.04em",
            marginBottom: "3rem",
          }}
        >
          The future belongs to those
          <br />
          <span style={{ color: "var(--text-secondary)" }}>who build with intelligence.</span>
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            lineHeight: "1.7",
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem",
          }}
        >
          Whether you're buying our products or hiring us to build for you we're here to make intelligence work for you.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/products"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              fontSize: "0.95rem",
              color: "#080808",
              background: "#f5f5f5",
              padding: "1rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              display: "inline-block",
            }}
          >
            Explore Products
          </a>
          <a
            href="/work-with-us"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              fontSize: "0.95rem",
              color: "var(--text-primary)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "1rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              display: "inline-block",
            }}
          >
            Need a Custom Build?
          </a>
        </div>
      </div>
    </section>
  );
}