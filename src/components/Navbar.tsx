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
          padding: "1.2rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(8,8,10,0.75)"
            : "rgba(8,8,10,0.45)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo - Shifted left on mobile */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            flex: 1,
          }}
        >
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
                fontFamily: "Inter, sans-serif",
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
                fontFamily: "Inter, sans-serif",
                fontWeight: "900",
                fontSize: "0.55rem",
                color: "#c9a84c",
                letterSpacing: "0.05em",
              }}
            >
              AI & TECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                color: pathname === link.href ? "#c9a84c" : "#9a9a9a",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                borderBottom:
                  pathname === link.href
                    ? "1px solid #c9a84c"
                    : "1px solid transparent",
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
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#080808",
              background: "#f5f5f5",
              padding: "0.55rem 1.3rem",
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
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#1f1f21",
            padding: "110px 20px 40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 1.25rem",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.05)",
                  color: pathname === link.href ? "#ffffff" : "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                }}
              >
                <span>{link.label}</span>
                <span>›</span>
              </Link>
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "65%",
              transform: "translate(-50%, -50%)",
              opacity: 0.18,
            }}
          >
            <Image src="/logo.png" alt="Lee Henry AI & Technology" width={180} height={180} />
          </div>

          <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "40px" }}>
            <Link
              href="/work-with-us"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "12px",
                background: "#f5f5f5",
                color: "#080808",
                textDecoration: "none",
                fontWeight: 700,
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

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }
          
          .navbar {
            padding: 1rem 1.25rem !important;
          }
        }
      `}</style>
    </>
  );
}