import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: "4rem 3rem 0rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
          {/* Column 1 - Logo & Tagline */}
          <div className="logo-col">
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
              <Image
                src="/logo.png"
                alt="Lee Henry AI & Technology"
                width={48}
                height={48}
                style={{ borderRadius: "10px" }}
              />
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: "700",
                    fontSize: "1rem",
                    color: "#f0f0f0",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Lee Henry
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: "900",
                    fontSize: "0.55rem",
                    color: "#c9a84c",
                    letterSpacing: "0.05em",
                  }}
                >
                  AI & TECHNOLOGY
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.85rem",
                color: "#555560",
                lineHeight: "1.7",
                maxWidth: "240px",
              }}
            >
              We ship our own AI products to the world and build custom solutions for businesses.
            </p>
          </div>

          {/* Column 2 - Company Links */}
          <div className="company-col">
            <span
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.7rem",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Company
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Our Work", href: "/our-work" },
                { label: "About", href: "/about" },
                { label: "Work With Us", href: "/work-with-us" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.9rem",
                    color: "#9a9a9a",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Connect Links */}
          <div className="connect-col">
            <span
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.7rem",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              Connect
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="#" style={{ fontFamily: "var(--font-syne)", fontSize: "0.9rem", color: "#9a9a9a", textDecoration: "none" }}>Instagram</a>
              <a href="#" style={{ fontFamily: "var(--font-syne)", fontSize: "0.9rem", color: "#9a9a9a", textDecoration: "none" }}>LinkedIn</a>
              <a href="#" style={{ fontFamily: "var(--font-syne)", fontSize: "0.9rem", color: "#9a9a9a", textDecoration: "none" }}>X (Twitter)</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.75rem",
              color: "#555560",
              letterSpacing: "0.05em",
            }}
          >
            © 2025 Lee Henry AI & Technology. All rights reserved.
          </span>
        </div>
      </div>

      {/* Large Background Text */}
      <div
        style={{
          marginTop: "3rem",
          overflow: "hidden",
          lineHeight: "0.85",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "0.3rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(5rem, 15vw, 14rem)",
              fontWeight: "800",
              color: "rgba(255,255,255,0.04)",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              display: "inline-block",
              userSelect: "none",
            }}
          >
            LEE HENRY
          </span>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: "600",
              fontSize: "clamp(0.8rem, 2vw, 1.2rem)",
              color: "rgba(201,168,76,0.5)",
              letterSpacing: "0.05em",
              display: "inline-block",
              userSelect: "none",
            }}
          >
            AI & TECHNOLOGY
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1.25rem 0rem 1.25rem !important;
          }
          .footer-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .logo-col {
            grid-column: span 2 !important;
            text-align: center !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .company-col {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .connect-col {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .footer-grid p {
            text-align: center !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </footer>
  );
}