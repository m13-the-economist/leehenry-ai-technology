"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "80px",
          padding: "0.8rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(8,8,10,0.95)"
            : "rgba(8,8,10,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="logo-link"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            minWidth: 0,
            overflow: "hidden",
            flex: 1,
          }}
        >
          <Image
            src="/logo.png"
            alt="Lee Henry AI & Technology"
            width={48}
            height={48}
            className="logo-image"
            style={{ borderRadius: "10px", flexShrink: 0 }}
          />
          <div className="logo-text" style={{ display: "flex", alignItems: "baseline", gap: "0.3rem", overflow: "hidden" }}>
            <span className="logo-name" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#f0f0f0", whiteSpace: "nowrap" }}>
              Lee Henry
            </span>
            <span className="logo-tag" style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "0.65rem", color: "#c9a84c", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
              AI & TECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                color: pathname === link.href ? "#c9a84c" : "#9a9a9a",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                borderBottom: pathname === link.href ? "1px solid #c9a84c" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/work-with-us"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#080808",
              background: "#f5f5f5",
              padding: "0.55rem 1.2rem",
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Work With Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle Menu"
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "none",
            flexShrink: 0,
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "#0a0a0a",
            padding: "1.5rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: pathname === link.href ? "#c9a84c" : "#ffffff",
                  textDecoration: "none",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {link.label}
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1rem" }}>→</span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", margin: "2rem 0", minHeight: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: "400", color: "rgba(201,168,76,0.8)", letterSpacing: "0.02em" }}>
              <TypingAnimation />
            </div>
          </div>

          <div>
            <Link
              href="/work-with-us"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#080808",
                background: "#f5f5f5",
                padding: "0.8rem",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Work With Us
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .mobile-menu-btn {
          display: none;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }

          .navbar {
            height: 70px !important;
            padding: 0.6rem 1rem !important;
          }

          .logo-link {
            gap: 0.5rem !important;
          }

          .logo-image {
            width: 36px !important;
            height: 36px !important;
          }

          .logo-name {
            font-size: 0.9rem !important;
          }

          .logo-tag {
            font-size: 0.45rem !important;
          }

          .mobile-menu-btn svg {
            width: 24px !important;
            height: 24px !important;
          }

          .mobile-menu-overlay {
            top: 70px !important;
          }
        }
      `}</style>
    </>
  );
}

// Typing Animation Component
function TypingAnimation() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Building the future.",
    "AI for everyone.",
    "Intelligence everywhere.",
    "Solve real problems.",
    "Ship with purpose.",
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
      {typedText}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1rem",
          backgroundColor: "#c9a84c",
          marginLeft: "2px",
          animation: "blink 1s step-end infinite",
          verticalAlign: "middle",
        }}
      />
    </>
  );
}