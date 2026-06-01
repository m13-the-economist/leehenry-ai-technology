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

export default function PortfolioPage() {
  const s1 = useVisible(0.1);
  const s2 = useVisible(0.2);
  const s3 = useVisible(0.2);
  const s4 = useVisible(0.2);

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

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "flex-end", padding: "12rem 4rem 6rem", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&auto=format&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.12)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.4) 60%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
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
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "0.95", marginBottom: "2rem" }}>
            We don't talk.
            <br />
            <span style={{ color: "var(--text-secondary)" }}>We ship.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: "1.7" }}>
            Products we've shipped to the world. Systems we've built for businesses. And what's coming next.
          </p>
        </div>
      </section>

      {/* Our Shipped Products */}
      <section style={{ padding: "8rem 4rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          ref={s2.ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            opacity: s2.visible ? 1 : 0,
            transform: s2.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Shipped Products
            </span>
          </div>

          {/* Market Llama Card */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              cursor: "pointer",
              marginBottom: "3rem",
            }}
            onClick={() => window.open("https://marketllama.com", "_blank")}
          >
            <div style={{ position: "relative", height: "450px" }}>
              <img
                src="/marketllama.png"
                alt="Market Llama"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "brightness(0.4)", transition: "filter 0.4s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.55)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.4)"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 30%, rgba(124,58,237,0.12) 0%, transparent 50%)" }} />

              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      AI Trading Intelligence
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "#080808", background: "var(--gold)", padding: "0.2rem 0.6rem", borderRadius: "100px", fontWeight: "700" }}>
                      LIVE
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "700", letterSpacing: "-0.04em", color: "#f5f5f5", marginBottom: "1rem" }}>
                    Market Llama
                  </h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "550px", lineHeight: "1.6" }}>
                    A full AI powered trading intelligence platform.
                  </p>
                </div>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5f5f5", fontSize: "1.4rem", flexShrink: 0 }}>
                  ↗
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="/products"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "0.7rem 1.8rem",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              View All Products →
            </a>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section style={{ padding: "8rem 4rem", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-secondary)" }}>
        <div
          ref={s3.ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            opacity: s3.visible ? 1 : 0,
            transform: s3.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Client Projects
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "3rem" }}>
            {clientProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  padding: "2.5rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = project.color;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: project.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {project.category}
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-dim)", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "100px" }}>
                    {project.status}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.6rem", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1rem", color: "var(--text-primary)" }}>
                  {project.name}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects + Open Slot */}
      <section style={{ padding: "8rem 4rem" }}>
        <div
          ref={s4.ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            opacity: s4.visible ? 1 : 0,
            transform: s4.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--purple)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Current + Next
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {currentProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  padding: "2.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: project.color, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                  {project.category}
                </span>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.3rem", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                  {project.name}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {project.description}
                </p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--text-dim)", display: "block", marginTop: "1rem" }}>
                  {project.status}
                </span>
              </div>
            ))}

            {/* Open slot — Your project here */}
            <div
              style={{
                padding: "2.5rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                Your Project
              </span>
              <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.3rem", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                Slot Open
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                We are actively taking on new clients. Bring us your problem and we will build the solution.
              </p>
              <a
                href="/work-with-us"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--gold)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--gold)",
                  paddingBottom: "2px",
                }}
              >
                Claim this slot →
              </a>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }} />

          {/* Bottom CTA */}
          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Your project belongs
              <span style={{ color: "var(--teal)" }}> on this page.</span>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
              We are building the portfolio of the most intelligent company in Africa. Be part of it.
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
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}