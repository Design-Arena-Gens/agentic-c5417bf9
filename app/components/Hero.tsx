import Link from "next/link";

export function Hero() {
  return (
    <section id="top" style={{ position: "relative", paddingTop: "8rem" }}>
      <div className="wrapper" style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            background: "rgba(56, 189, 248, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--muted)",
            marginBottom: "1.5rem"
          }}
        >
          Next-gen digital studio
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 4.8rem)", marginBottom: "1.5rem", lineHeight: 1.05 }}>
          Craft intelligent experiences that move faster than imagination.
        </h1>
        <p style={{ maxWidth: "720px", margin: "0 auto 2.5rem", color: "var(--muted)", fontSize: "1.15rem", lineHeight: 1.7 }}>
          Agentic Studio combines creative direction, AI systems, and human-first craftsmanship so your product feels alive, adaptive, and unmistakably yours.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="#cta"
            style={{
              padding: "0.95rem 2.2rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
              color: "#05091a",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.85rem"
            }}
          >
            Launch a project
          </Link>
          <Link
            href="#showcase"
            style={{
              padding: "0.95rem 2.2rem",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              background: "rgba(15, 23, 42, 0.55)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.85rem"
            }}
          >
            Explore our work
          </Link>
        </div>
      </div>
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2), transparent 55%)"
        }}
      />
    </section>
  );
}
