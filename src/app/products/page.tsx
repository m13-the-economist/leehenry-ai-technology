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

export default function ProductsPage() {
  const s1 = useVisible(0.1);
  const s2 = useVisible(0.2);
  const s3 = useVisible(0.2);

  const products = [
    {
      name: "Market Llama",
      tagline: "AI powered trading intelligence",
      description: "Real time chart analysis, signal alerts, and an intelligent copilot that learns your strategy and tells you when to act.",
      status: "Live",
      link: "https://marketllama.com",
      color: "var(--gold)",
      image: "/marketllama.png",
      features: ["Real time signals", "Chart analysis", "AI copilot", "PWA ready"],
    },
    {
      name: "Coming Soon",
      tagline: "Next product in development",
      description: "We're building something new. Follow us to be the first to know when we ship.",
      status: "Coming Soon",
      link: "#",
      color: "var(--teal)",
      image: "",
      features: ["Stay tuned", "Launch alert", "Early access"],
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: "50vh", display: "flex", alignItems: "flex-end", padding: "12rem 4rem 6rem", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&auto=format&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.1)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.4) 60%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
        </div>
        <div
          ref={s1.ref}
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            opacity: s1.visible ? 1 : 0,
            transform: s1.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Our Products
            </span>
          </div>
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "0.95", marginBottom: "2rem" }}>
            Technology we ship
            <br />
            <span style={{ color: "var(--text-secondary)" }}>to the world.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "500px", lineHeight: "1.7" }}>
            Ready to use AI products built by us. No custom work required just tools that work out of the box.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={s2.ref} style={{ padding: "8rem 4rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            opacity: s2.visible ? 1 : 0,
            transform: s2.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem" }}>
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.3s ease",
                  cursor: product.link !== "#" ? "pointer" : "default",
                }}
                onMouseEnter={(e) => {
                  if (product.link !== "#") {
                    (e.currentTarget as HTMLElement).style.borderColor = product.color;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
                onClick={() => {
                  if (product.link !== "#") window.open(product.link, "_blank");
                }}
              >
                {product.image ? (
                  <div style={{ height: "240px", overflow: "hidden" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        filter: "brightness(0.7)",
                        transition: "filter 0.3s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.85)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.7)"; }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      height: "240px",
                      background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(13,148,136,0.05) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "3rem", color: "rgba(255,255,255,0.1)" }}>⌘</span>
                  </div>
                )}
                <div style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.8rem", fontWeight: "700", letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
                      {product.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.7rem",
                        color: product.status === "Live" ? "#080808" : "var(--text-secondary)",
                        background: product.status === "Live" ? product.color : "rgba(255,255,255,0.08)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "100px",
                        fontWeight: "600",
                      }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: product.color, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {product.tagline}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                    {product.description}
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.7rem",
                          color: "var(--text-dim)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          padding: "0.25rem 0.7rem",
                          borderRadius: "100px",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  {product.link !== "#" && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: product.color,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                      }}
                    >
                      Try it now →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for custom builds */}
      <section
        ref={s3.ref}
        style={{
          padding: "8rem 4rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "var(--bg-secondary)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            opacity: s3.visible ? 1 : 0,
            transform: s3.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Need something
            <span style={{ color: "var(--teal)" }}> custom built?</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "3rem" }}>
            We also build tailor made software and hardware for businesses. Tell us your problem and we will build the solution.
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
            Request a Custom Build
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}