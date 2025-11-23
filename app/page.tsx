import { CTASection } from "./components/CTASection";
import { FeatureGrid } from "./components/FeatureGrid";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Process } from "./components/Process";
import { Showcase } from "./components/Showcase";
import { Testimonials } from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FeatureGrid />
        <Showcase />
        <Process />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
