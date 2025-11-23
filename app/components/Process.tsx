const PHASES = [
  {
    step: "01",
    title: "Discover",
    description: "We map your product universe, surface the key sparks, and prototype interaction loops that feel distinctly yours."
  },
  {
    step: "02",
    title: "Design & Train",
    description: "Collaborative sprints blend human artistry with AI copilots—design systems, content, and automations evolve in sync."
  },
  {
    step: "03",
    title: "Launch & Amplify",
    description: "We instrument analytics, growth loops, and adaptive content layers so your experience stays fresh post-ship."
  }
];

export function Process() {
  return (
    <section id="process">
      <div className="wrapper" style={{ display: "grid", gap: "2.25rem" }}>
        <div style={{ maxWidth: "620px" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 5vw, 3.3rem)", marginBottom: "1rem" }}>Agentic by design</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.85 }}>
            We co-create with your team, weaving strategy, storytelling, and systems thinking into a single operating rhythm. Expect weekly drops, transparent dashboards, and steady forward motion.
          </p>
        </div>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {PHASES.map((phase) => (
            <div
              key={phase.step}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "1.5rem",
                alignItems: "flex-start",
                padding: "1.8rem",
                borderRadius: "1.25rem",
                border: "1px solid var(--border)",
                background: "linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.8))"
              }}
            >
              <span style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.2em", color: "var(--accent-secondary)" }}>{phase.step}</span>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.3rem" }}>{phase.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.75 }}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
