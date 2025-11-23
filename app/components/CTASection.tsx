import Link from "next/link";

export function CTASection() {
  return (
    <section id="cta" style={{ paddingBottom: "7rem" }}>
      <div
        className="wrapper"
        style={{
          background: "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(249, 115, 22, 0.25))",
          borderRadius: "2rem",
          padding: "3.5rem clamp(2rem, 4vw, 4rem)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          display: "grid",
          gap: "1.5rem",
          justifyItems: "center",
          textAlign: "center",
          boxShadow: "0 25px 60px rgba(15, 23, 42, 0.55)"
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "rgba(5, 9, 26, 0.75)",
            background: "rgba(255, 255, 255, 0.65)",
            padding: "0.45rem 1rem",
            borderRadius: "999px"
          }}
        >
          Now onboarding Q3 collaborations
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.1rem)", margin: 0 }}>
          Build the flagship your audience can&apos;t ignore.
        </h2>
        <p style={{ color: "rgba(5, 9, 26, 0.8)", maxWidth: "620px", lineHeight: 1.8 }}>
          Tell us about your product and we&apos;ll craft a launch roadmap within 72 hours. Every engagement starts with a collaborative workshop.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="mailto:hello@agentic.studio"
            style={{
              padding: "0.95rem 2.3rem",
              borderRadius: "999px",
              background: "#05091a",
              color: "white",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.85rem"
            }}
          >
            Book workshop
          </Link>
          <Link
            href="/deck.pdf"
            style={{
              padding: "0.95rem 2.3rem",
              borderRadius: "999px",
              border: "1px solid rgba(5, 9, 26, 0.24)",
              background: "rgba(255, 255, 255, 0.85)",
              color: "#05091a",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.85rem"
            }}
          >
            Download deck
          </Link>
        </div>
      </div>
    </section>
  );
}
