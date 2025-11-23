import Image from "next/image";

const SHOWCASE_ITEMS = [
  {
    title: "Nimbus Exchange",
    description: "An adaptive fintech dashboard where traders collaborate with AI copilots to surface the next move.",
    image: "/assets/showcase-finance.svg"
  },
  {
    title: "Echo Atlas",
    description: "Immersive travel storytelling blending cinematic visuals with real-time trip planning assistance.",
    image: "/assets/showcase-travel.svg"
  },
  {
    title: "Materia Labs",
    description: "Science-grade knowledge base with semantic search, conversational insights, and accelerated discovery.",
    image: "/assets/showcase-science.svg"
  }
];

export function Showcase() {
  return (
    <section id="showcase">
      <div className="wrapper" style={{ display: "grid", gap: "2.5rem" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", marginBottom: "0.75rem" }}>Signature launches</h2>
          <p style={{ margin: "0 auto", maxWidth: "650px", color: "var(--muted)", lineHeight: 1.8 }}>
            We architect flagships that feel cinematic yet effortless. Each product is built with modular intelligence so teams can evolve rapidly without losing magic.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
          }}
        >
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "rgba(15, 23, 42, 0.7)",
                display: "flex",
                flexDirection: "column",
                minHeight: "100%"
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16 / 10" }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.8rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.35rem" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
