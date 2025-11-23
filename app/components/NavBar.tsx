"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" }
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-lg transition-colors"
      style={{
        backgroundColor: scrolled ? "rgba(5, 9, 26, 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent"
      }}
    >
      <div className="wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.1rem 0" }}>
        <Link href="#" aria-label="Agentic Studio home" style={{ fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.95rem" }}>
          Agentic Studio
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} style={{ fontSize: "0.9rem", color: "var(--muted)", transition: "color 180ms ease" }}>
              {item.label}
            </Link>
          ))}
          <Link
            href="#cta"
            style={{
              padding: "0.65rem 1.1rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
              color: "var(--foreground)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase"
            }}
          >
            Start Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
