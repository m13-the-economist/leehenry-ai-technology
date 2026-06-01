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

export default function WorkWithUsPage() {
  const s1 = useVisible(0.1);
  const s2 = useVisible(0.2);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="workwith-hero"
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&auto=format&fit=crop&q=80"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.1)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 50%, rgba(13,148,136,0.1) 0%, transparent 60%)" }} />
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
            <div style={{ width: "24px", height: "1px", background: "var(--teal)" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "var(--teal)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Work With Us
            </span>
          </div>
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(2.5rem, 8vw, 7rem)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "1.1", marginBottom: "1.5rem" }}>
            Let's build
            <br />
            <span style={{ color: "var(--text-secondary)" }}>something</span>
            <br />
            remarkable.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.9rem, 3vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: "500px", lineHeight: "1.6" }}>
            Tell us your problem. We will tell you exactly how we solve it. No fluff, no generic pitches — just honest conversation about what is possible.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="workwith-content" style={{ padding: "8rem 4rem" }}>
        <div
          ref={s2.ref}
          className="workwith-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "6rem",
            alignItems: "start",
            opacity: s2.visible ? 1 : 0,
            transform: s2.visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Left - Info */}
          <div className="workwith-info">
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              Tell us your problem.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "2rem" }}>
              We work with businesses of all sizes. Whether you have a clear brief or just a problem you want solved — reach out and we will figure it out together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "Email", value: "leehenrycap@gmail.com", href: "mailto:leehenrycap@gmail.com" },
                { label: "Location", value: "Lagos, Nigeria", href: "#" },
                { label: "Response Time", value: "Within 24 hours", href: "#" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1.25rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.3rem" }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "var(--text-primary)", fontWeight: "500" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: "2rem" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                Follow Our Journey
              </span>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {["Instagram", "X", "LinkedIn"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "4px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--teal)"; (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="workwith-form">
            {submitted ? (
              <div
                style={{
                  background: "rgba(13,148,136,0.05)",
                  border: "1px solid rgba(13,148,136,0.2)",
                  borderRadius: "16px",
                  padding: "3rem 2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.5rem, 4vw, 1.8rem)", fontWeight: "700", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
                  Message received.
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  We will be in touch within 24 hours. We are already looking forward to hearing more about your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "2rem",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {[
                      { label: "Your Name", name: "name", placeholder: "John Adeyemi", type: "text" },
                      { label: "Company", name: "company", placeholder: "Adeyemi Logistics Ltd", type: "text" },
                      { label: "Email", name: "email", placeholder: "john@company.com", type: "email" },
                    ].map((field) => (
                      <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required={field.name !== "company"}
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "8px",
                            padding: "0.75rem 1rem",
                            color: "var(--text-primary)",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.85rem",
                            outline: "none",
                            transition: "border 0.2s",
                          }}
                          onFocus={(e) => { e.target.style.border = "1px solid rgba(13,148,136,0.4)"; }}
                          onBlur={(e) => { e.target.style.border = "1px solid rgba(255,255,255,0.08)"; }}
                        />
                      </div>
                    ))}

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <label style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Tell Us Your Problem
                      </label>
                      <textarea
                        name="message"
                        placeholder="We have 20 delivery drivers and tracking them manually is costing us time and money..."
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "8px",
                          padding: "0.75rem 1rem",
                          color: "var(--text-primary)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.85rem",
                          outline: "none",
                          resize: "vertical",
                          transition: "border 0.2s",
                        }}
                        onFocus={(e) => { e.target.style.border = "1px solid rgba(13,148,136,0.4)"; }}
                        onBlur={(e) => { e.target.style.border = "1px solid rgba(255,255,255,0.08)"; }}
                      />
                    </div>

                    {error && (
                      <p style={{ color: "#e74c3c", fontSize: "0.8rem", textAlign: "center" }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "700",
                        fontSize: "0.85rem",
                        color: "#080808",
                        background: "#f5f5f5",
                        padding: "0.85rem",
                        borderRadius: "8px",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        width: "100%",
                        transition: "opacity 0.2s",
                        opacity: loading ? 0.7 : 1,
                      }}
                      onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
                      onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />

      <style>{`
        @media (max-width: 768px) {
          .workwith-hero {
            padding: 8rem 0rem 3rem 0rem !important;
          }
          .workwith-hero > div {
            padding: 0 1rem !important;
          }
          .workwith-content {
            padding: 3rem 0rem !important;
          }
          .workwith-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding: 0 1rem !important;
          }
          .workwith-info {
            text-align: center !important;
          }
          .workwith-info div[style*="display: flex"][style*="flex-direction: column"] {
            align-items: center !important;
          }
          .workwith-info div[style*="display: flex"][style*="gap: 0.75rem"] {
            justify-content: center !important;
          }
          .workwith-form form > div {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}