"use client";

export default function Services() {
    const services = [
      {
        number: "01",
        title: "AI Integration",
        description:
          "We embed artificial intelligence directly into your existing business operations. Smarter decisions, faster execution, less human error.",
        tags: ["Machine Learning", "Automation", "Data Intelligence"],
      },
      {
        number: "02",
        title: "Process Automation",
        description:
          "We identify the manual processes draining your team's time and replace them with intelligent automated systems that run 24/7.",
        tags: ["Workflow Automation", "Custom Software", "API Integration"],
      },
      {
        number: "03",
        title: "Smart Systems",
        description:
          "We take your dumb machines and disconnected hardware and make them intelligent — real-time monitoring, alerts, and data collection.",
        tags: ["IoT", "Real-time Monitoring", "Predictive Alerts"],
      },
      {
        number: "04",
        title: "Custom Software",
        description:
          "From mobile apps to enterprise platforms, we build software that solves your specific business problem. No generic solutions.",
        tags: ["Web Apps", "Mobile", "Enterprise Platforms"],
      },
    ];
  
    return (
      <section
        id="services"
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
              What We Do
            </span>
          </div>
  
          {/* Headline */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "5rem",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: "800",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                maxWidth: "500px",
              }}
            >
              Intelligence built
              <span style={{ color: "#c9a84c" }}> for your industry.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "1rem",
                color: "#9a9a9a",
                maxWidth: "350px",
                lineHeight: "1.7",
              }}
            >
              We don't sell generic software. We come into your business,
              understand your problems, and build exactly what you need.
            </p>
          </div>
  
          {/* Services grid — fluid, no heavy boxes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  padding: "3rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderRight:
                    index % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  transition: "background 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(201,168,76,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.75rem",
                    color: "#c9a84c",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#f0f0f0",
                    letterSpacing: "-0.02em",
                    marginBottom: "1rem",
                    lineHeight: "1.3",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.9rem",
                    color: "#9a9a9a",
                    lineHeight: "1.7",
                    marginBottom: "2rem",
                  }}
                >
                  {service.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: "0.7rem",
                        color: "#c9a84c",
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.15)",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "100px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div
              style={{
                gridColumn: "1 / -1",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
  