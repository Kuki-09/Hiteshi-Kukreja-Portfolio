import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Education from "./Education";
import Extracurricular from "./Extracurricular";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ParticleField from "./ParticleField";
import BackToTop from "./BackToTop";
import { Toaster } from "sonner";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Animated mesh + particles */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh animate-gradient" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <ParticleField />
      </div>

      <ScrollProgress />
      <Navbar />

      <main
        className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Extracurricular />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-center" richColors />
    </div>
  );
}