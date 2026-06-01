export default function Problem() {
    const problems = [
      {
        number: "01",
        title: "Manual processes killing your speed",
        description:
          "Your team is spending hours on tasks that should take seconds. Data entry, tracking, reporting — all done by hand while your competitors automate.",
      },
      {
        number: "02",
        title: "Disconnected systems, no intelligence",
        description:
          "Your machines and software don't talk to each other. No real-time data. No alerts. No visibility into what's actually happening in your business.",
      },
      {
        number: "03",
        title: "Decisions made on gut, not data",
        description:
          "Without intelligent systems, you're guessing. The businesses that win in the next decade will be the ones that let AI inform every decision.",
      },
    ];
  
    return (
      <section
        style={{
          padding: "8rem 3rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#c9a84c",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.75rem",
              color: "#c9a84c",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            The Problem
          </span>
        </div>
  
        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: "800",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            marginBottom: "5rem",
            maxWidth: "700px",
          }}
        >
          Most Lagos businesses are still
          <span style={{ color: "#c9a84c" }}> running on manual.</span>
        </h2>
  
        {/* Problem list — no boxes, just elegant rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                gap: "2rem",
                padding: "3rem 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.8rem",
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  paddingTop: "0.25rem",
                }}
              >
                {problem.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#f0f0f0",
                  lineHeight: "1.3",
                  letterSpacing: "-0.02em",
                }}
              >
                {problem.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.95rem",
                  color: "#9a9a9a",
                  lineHeight: "1.7",
                }}
              >
                {problem.description}
              </p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
      </section>
    );
  }
  