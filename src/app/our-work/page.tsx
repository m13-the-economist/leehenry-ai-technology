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

export default function OurWorkPage() {
  const s1 = useVisible(0.1);
  const s2 = useVisible(0.2);
  const s3 = useVisible(0.2);
  const s4 = useVisible(0.2);

  const [clientIndex, setClientIndex] = useState(0);
  const clientScrollRef = useRef<HTMLDivElement>(null);

  const shippedProducts = [
    {
      name: "Market Llama",
      category: "AI Trading Intelligence",
      description: "A full AI powered trading intelligence platform. Real time chart analysis, signal alerts, and an intelligent copilot.",
      status: "LIVE",
      link: "https://marketllama.com",
      color: "var(--gold)",
      image: "/marketllama.png",
    },
  ];

  const clientProjects = [
    {
      name: "Client Project 01",
      category: "Logistics",
      description: "Intelligent fleet tracking and dispatch system for a Lagos based logistics company. Currently in development.",
      status: "In Progress",
      color: "var(--teal)",
    },
    {
      name: "Client Project 02",
      category: "Manufacturing",
      description: "Smart machine monitoring system for a production facility. Real time alerts and predictive maintenance.",
      status: "Under Review",
      color: "var(--purple)",
    },
  ];

  const currentProjects = [
    {
      name: "Upcoming Product",
      category: "Consumer AI",
      description: "Our next product for the world. Something new is brewing.",
      status: "In Development",
      color: "var(--gold)",
    },
  ];

  const handleClientScroll = () => {
    if (!clientScrollRef.current) return;
    const scrollLeft = clientScrollRef.current.scrollLeft;
    const cardWidth = clientScrollRef.current.clientWidth * 0.85 + 16;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== clientIndex && newIndex >= 0 && newIndex < clientProjects.length) {
      setClientIndex(newIndex);
    }
  };

  const currentProduct = shippedProducts[0];

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="ourwork-hero"
        style={{
          minHeight: "50vh",
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
              Our Work
            </span>
          </div>
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2.5rem, 8vw, 7rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "1.1", marginBottom: "1.5rem" }}>
            We don't talk.
            <br />
            <span style={{ color: "var(--text-secondary)" }}>We ship.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.9rem, 3vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: "1.6" }}>
            Products we've shipped to the world. Systems we've built for businesses. And what's coming next.
          </p>
        </div>
      </section>

      {/* Shipped Products - Static Card (only one product) */}
      <section ref={s2.ref} className="shipped-section" style={{ padding: "6rem 4rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", opacity: s2.visible ? 1 : 0, transform: s2.visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Shipped Products
            </span>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }} onClick={() => window.open(currentProduct.link, "_blank")}>
            <div style={{ position: "relative", height: "450px" }}>
              <img src={currentProduct.image} alt={currentProduct.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "brightness(0.4)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: currentProduct.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{currentProduct.category}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#080808", background: currentProduct.color, padding: "0.2rem 0.6rem", borderRadius: "100px", fontWeight: "700" }}>{currentProduct.status}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.04em", color: "#f5f5f5", marginBottom: "0.75rem" }}>{currentProduct.name}</h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "rgba(255,255,255,0.6)", maxWidth: "500px", lineHeight: "1.5" }}>{currentProduct.description}</p>
                </div>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5f5f5", fontSize: "1.2rem", flexShrink: 0 }}>↗</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/products" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", padding: "0.7rem 1.8rem", borderRadius: "4px", display: "inline-block" }}>View All Products →</a>
          </div>
        </div>
      </section>

      {/* Client Projects - Desktop Grid / Mobile Scrollable Carousel */}
      <section ref={s3.ref} className="client-section" style={{ padding: "6rem 4rem", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", opacity: s3.visible ? 1 : 0, transform: s3.visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Client Projects</span>
          </div>

          {/* Desktop View - 2 Column Grid */}
          <div className="client-desktop-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {clientProjects.map((project, index) => (
              <div key={index} style={{ padding: "2rem", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", background: "rgba(255,255,255,0.02)", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: project.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.category}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-dim)", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{project.status}</span>
                </div>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1rem", color: "var(--text-primary)" }}>{project.name}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile View - Scrollable Carousel */}
          <div className="client-mobile-scroll">
            <div
              ref={clientScrollRef}
              onScroll={handleClientScroll}
              style={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                gap: "1rem",
                paddingBottom: "0.5rem",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {clientProjects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: "85%",
                    scrollSnapAlign: "start",
                    padding: "1.5rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: project.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.category}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-dim)", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "100px" }}>{project.status}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.3rem", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{project.name}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{project.description}</p>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            {clientProjects.length > 1 && (
              <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
                {clientProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setClientIndex(idx);
                      if (clientScrollRef.current) {
                        const cardWidth = clientScrollRef.current.clientWidth * 0.85 + 16;
                        clientScrollRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
                      }
                    }}
                    style={{
                      width: clientIndex === idx ? "24px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: clientIndex === idx ? "var(--teal)" : "rgba(255,255,255,0.3)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Current Projects + Open Slot */}
      <section ref={s4.ref} className="current-section" style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", opacity: s4.visible ? 1 : 0, transform: s4.visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--purple)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Current + Next</span>
          </div>

          <div className="current-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {currentProjects.map((project, index) => (
              <div key={index} style={{ padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: project.color, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>{project.category}</span>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.2rem, 3vw, 1.3rem)", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "var(--text-primary)" }}>{project.name}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)", color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.description}</p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--text-dim)", display: "block", marginTop: "1rem" }}>{project.status}</span>
              </div>
            ))}

            <div style={{ padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", transition: "all 0.3s ease" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>Your Project</span>
              <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.2rem, 3vw, 1.3rem)", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "var(--text-primary)" }}>Slot Open</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1rem" }}>We are actively taking on new clients. Bring us your problem and we will build the solution.</p>
              <a href="/work-with-us" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "var(--gold)", textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>Claim this slot →</a>
            </div>
          </div>

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1rem" }}>Your project belongs <span style={{ color: "var(--teal)" }}>on this page.</span></h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>We are building the portfolio of the most intelligent company in Africa. Be part of it.</p>
            <a href="/work-with-us" style={{ fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "#080808", background: "#f5f5f5", padding: "0.8rem 2rem", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>Start a Project</a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />

      <style>{`
        @media (max-width: 768px) {
          .ourwork-hero {
            padding: 8rem 0rem 3rem 0rem !important;
          }
          .ourwork-hero > div {
            padding: 0 1rem !important;
          }
          .shipped-section {
            padding: 3rem 0rem !important;
          }
          .shipped-section > div {
            padding: 0 1rem !important;
          }
          .client-section {
            padding: 3rem 0rem !important;
          }
          .client-section > div {
            padding: 0 1rem !important;
          }
          .current-section {
            padding: 3rem 0rem !important;
          }
          .current-section > div {
            padding: 0 1rem !important;
          }
          .current-grid {
            grid-template-columns: 1fr !important;
          }
          .current-grid > div {
            border-right: none !important;
          }
          .client-desktop-grid {
            display: none !important;
          }
          .client-mobile-scroll {
            display: block !important;
          }
          .client-mobile-scroll div::-webkit-scrollbar {
            display: none;
          }
          .shipped-section div[style*="height: 450px"] {
            height: 350px !important;
          }
          .shipped-section div[style*="padding: 3rem"] {
            padding: 1.5rem !important;
          }
        }
        @media (min-width: 769px) {
          .client-mobile-scroll {
            display: none !important;
          }
          .client-desktop-grid {
            display: grid !important;
          }
        }
      `}</style>
    </main>
  );
}