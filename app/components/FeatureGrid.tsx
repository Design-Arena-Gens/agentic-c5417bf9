const FEATURES = [
  {
    title: "Agentic Design Systems",
    description: "Modular UI kits fused with AI-driven personalization so every visitor feels the experience adapt in real time.",
    icon: "⚡"
  },
  {
    title: "Launch-Ready Infrastructure",
    description: "Next.js foundations, first-class performance, and analytics baked in to keep your product production-ready from day one.",
    icon: "🚀"
  },
  {
    title: "Immersive Storytelling",
    description: "Motion, soundscapes, and rich interactions choreographed to guide attention and spark emotional resonance.",
    icon: "🎞️"
  },
  {
    title: "Ethical Automation",
    description: "Transparent AI workflows that respect user trust, with human safeguards and continuous learning loops.",
    icon: "🛡️"
  }
];

export function FeatureGrid() {
  return (
    <section id="features">
      <div className="wrapper">
        <div style={{ display: "grid", gap: "2rem" }}>
          <div style={{ maxWidth: "620px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>A studio engineered for momentum</h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              Every engagement is orchestrated by designers, developers, and AI copilots working as one organism. We ship beautiful interfaces that learn, iterate, and outperform.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.6rem"
            }}
          >
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: "1.8rem",
                  borderRadius: "1.2rem",
                  border: "1px solid var(--border)",
                  background: "var(--card-bg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  minHeight: "220px",
                  boxShadow: "0 20px 40px rgba(15, 23, 42, 0.45)"
                }}
              >
                <div style={{ fontSize: "1.5rem" }}>{feature.icon}</div>
                <h3 style={{ margin: 0, fontSize: "1.35rem" }}>{feature.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
