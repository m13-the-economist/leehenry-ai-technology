"use client";

export default function Contact() {
    return (
      <section
        id="contact"
        style={{
          padding: "8rem 3rem",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.03) 50%, transparent 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "#c9a84c" }} />
            <span
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.75rem",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </span>
          </div>
  
          {/* Main content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                }}
              >
                Let's build something
                <span style={{ color: "#c9a84c" }}> intelligent.</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1rem",
                  color: "#9a9a9a",
                  lineHeight: "1.7",
                  marginBottom: "3rem",
                }}
              >
                Tell us your business problem. We'll tell you exactly how we can
                solve it with AI and automation. No fluff, no generic pitches —
                just honest conversation about what's possible.
              </p>
  
              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: "Email", value: "hello@leehenry.ai" },
                  { label: "WhatsApp", value: "+234 — available on request" },
                  { label: "Location", value: "Lagos, Nigeria" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                      paddingBottom: "1.5rem",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        color: "#555560",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "1rem",
                        color: "#f0f0f0",
                        fontWeight: "500",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right — Form */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "3rem",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: "Your Name", placeholder: "John Adeyemi", type: "text" },
                  { label: "Company", placeholder: "Adeyemi Logistics Ltd", type: "text" },
                  { label: "Email", placeholder: "john@company.com", type: "email" },
                ].map((field) => (
                  <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.72rem",
                        color: "#9a9a9a",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px",
                        padding: "0.85rem 1rem",
                        color: "#f0f0f0",
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.border = "1px solid rgba(201,168,76,0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                      }}
                    />
                  </div>
                ))}
  
                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.72rem",
                      color: "#9a9a9a",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Tell us your problem
                  </label>
                  <textarea
                    placeholder="We have 20 delivery drivers and tracking them manually is costing us time and money..."
                    rows={4}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      padding: "0.85rem 1rem",
                      color: "#f0f0f0",
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "border 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "1px solid rgba(201,168,76,0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid rgba(255,255,255,0.08)";
                    }}
                  />
                </div>
  
                <button
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    color: "#08080a",
                    background: "linear-gradient(135deg, #c9a84c, #e8c96d)",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    transition: "opacity 0.2s",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                >
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }