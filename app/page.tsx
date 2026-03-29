import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Lifestyle } from "@/components/Lifestyle";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <div className="fixed inset-0 dot-grid opacity-30 pointer-events-none z-0" />
        <div className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Lifestyle />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
