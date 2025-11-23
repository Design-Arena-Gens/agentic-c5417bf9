import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ padding: "3rem 1.5rem", borderTop: "1px solid var(--border)", background: "rgba(5, 9, 26, 0.92)" }}>
      <div
        className="wrapper"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.5rem", alignItems: "center" }}
      >
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <strong style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.9rem" }}>Agentic Studio</strong>
          <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Designing expressive, intelligent products for teams on the frontier.</span>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "0.85rem" }}>
          <Link href="mailto:hello@agentic.studio">hello@agentic.studio</Link>
          <span style={{ color: "var(--border)" }}>•</span>
          <Link href="https://www.linkedin.com">LinkedIn</Link>
          <span style={{ color: "var(--border)" }}>•</span>
          <Link href="https://dribbble.com">Dribbble</Link>
        </div>
      </div>
      <div className="wrapper" style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--muted)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <span>© {new Date().getFullYear()} Agentic Studio. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
