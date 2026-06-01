"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop"

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

export default function AboutPage() {
  const s1 = useVisible(0.1);
  const s2 = useVisible(0.2);
  const s3 = useVisible(0.2);
  const s4 = useVisible(0.2);
  const s5 = useVisible(0.2);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{ minHeight: "70vh", display: "flex", alignItems: "flex-end", padding: "12rem 4rem 6rem", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&auto=format&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.12)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.4) 60%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 70%, rgba(124,58,237,0.12) 0%, transparent 60%)" }} />
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
            <div style={{ width: "24px", height: "1px", background: "var(--purple)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Who We Are
            </span>
          </div>
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "0.95", marginBottom: "2rem" }}>
            Built to make
            <br />
            <span style={{ color: "var(--text-secondary)" }}>intelligence</span>
            <br />
            universal.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: "1.7" }}>
            We exist to close the gap between where technology is and where people actually live. AI should not be a privilege. It should be everywhere.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "8rem 4rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          ref={s2.ref}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "start",
            opacity: s2.visible ? 1 : 0,
            transform: s2.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Our Mission
              </span>
            </div>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>001</span>
          </div>
          <div>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.2", marginBottom: "2rem" }}>
              We are solving the automation problem.
              <span style={{ color: "var(--text-secondary)" }}> One business at a time.</span>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Across industries, the same story plays out. Businesses are drowning in manual processes, disconnected systems, and decisions made on gut feeling instead of intelligence. The tools to fix this exist. But they are locked behind complexity, cost, and access.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              That's why we exist. We create technology that actually works for real people whether it's a trading intelligence platform anyone can use, or a custom automation system built for a specific business.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
              Our approach is simple: identify the problem, build the solution, ship it. No unnecessary complexity. No waiting for permission. Just intelligent systems that make life and work better.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "8rem 4rem", background: "var(--bg-secondary)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Our Vision
            </span>
          </div>

          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "1.1", marginBottom: "5rem", maxWidth: "800px" }}>
            A world where intelligence
            <span style={{ color: "var(--teal)" }}> lives in everything.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {[
              {
                number: "01",
                title: "AI For Everyone",
                desc: "We believe AI should not live only in tech companies and research labs. It should be in farms, factories, clinics, and homes. We are building the bridge.",
                color: "var(--teal)",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
              },
              {
                number: "02",
                title: "Smart Machines Everywhere",
                desc: "Every manual machine is a smart machine waiting to happen. We convert disconnected hardware into intelligent systems that monitor, alert, and adapt.",
                color: "var(--purple)",
                image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&auto=format&fit=crop&q=80",
              },
              {
                number: "03",
                title: "Automation At Scale",
                desc: "Our ultimate mission is to make automation accessible to every business that needs it. No matter the size, no matter the industry — intelligence should be standard.",
                color: "var(--gold)",
                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderRight: index < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  overflow: "hidden",
                  opacity: s3.visible ? 1 : 0,
                  transform: s3.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease ${index * 0.15}s`,
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)", transition: "transform 0.6s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
                <div style={{ padding: "2rem" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: item.color, letterSpacing: "0.1em", display: "block", marginBottom: "0.75rem" }}>
                    {item.number}
                  </span>
                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.3rem", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "8rem 4rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              What We Stand For
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { title: "Radical Accessibility", desc: "Intelligence should not be gated by budget or geography. We price fairly, build practically, and solve for the real world." },
              { title: "Zero Tolerance for Mediocrity", desc: "Everything we ship is built to the highest standard. If it is not excellent, it does not leave our hands." },
              { title: "Builders Over Talkers", desc: "We prove capability through product. Market Llama exists. More will follow. We let the work speak." },
              { title: "Technology as a Tool", desc: "We don't build for the sake of building. Every system we create solves a real problem for real people." },
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "4rem",
                  padding: "2.5rem 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  alignItems: "center",
                  opacity: s4.visible ? 1 : 0,
                  transform: s4.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease ${index * 0.1}s`,
                }}
              >
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.2rem", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
                  {value.title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  {value.desc}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 4rem", textAlign: "center" }}>
        <div
          ref={s5.ref}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            opacity: s5.visible ? 1 : 0,
            transform: s5.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            You found the right
            <span style={{ color: "var(--purple)" }}> team.</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "3rem" }}>
            We are hungry, we are capable, and we are ready to build something remarkable with you.
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
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}