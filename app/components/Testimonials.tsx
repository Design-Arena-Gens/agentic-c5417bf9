const TESTIMONIALS = [
  {
    quote:
      "They operate like an extension of our founding team. Every release felt cinematic and data-backed, shipping twice as fast as our in-house roadmap.",
    name: "Jules Morton",
    role: "CEO, Nimbus Exchange"
  },
  {
    quote:
      "Our travelers now plan trips with an AI concierge that speaks in our brand voice. Conversion climbed 46% within the first month.",
    name: "Leena Vargas",
    role: "Head of Experience, Echo Atlas"
  },
  {
    quote:
      "Agentic Studio rebuilt our research workflows with delightful automation. Scientists love it, and our onboarding dropped from weeks to days.",
    name: "Dr. Soren Imai",
    role: "Director, Materia Labs"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrapper" style={{ display: "grid", gap: "2rem" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 5vw, 3.3rem)", marginBottom: "0.75rem" }}>Trusted by teams shaping the future</h2>
          <p style={{ maxWidth: "620px", margin: "0 auto", color: "var(--muted)", lineHeight: 1.8 }}>
            We partner with visionaries building what comes next—from emerging startups to global labs.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              style={{
                padding: "1.9rem",
                borderRadius: "1.25rem",
                border: "1px solid var(--border)",
                background: "rgba(15, 23, 42, 0.75)",
                display: "grid",
                gap: "1rem"
              }}
            >
              <blockquote style={{ margin: 0, color: "var(--muted)", fontStyle: "italic", lineHeight: 1.8 }}>
                “{testimonial.quote}”
              </blockquote>
              <figcaption>
                <strong style={{ display: "block", fontSize: "1rem" }}>{testimonial.name}</strong>
                <span style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "0.9rem" }}>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
