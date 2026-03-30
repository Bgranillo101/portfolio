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
import { BackgroundGraphics } from "@/components/BackgroundGraphics";

export default function Home() {
  return (
    <>
      <BackgroundGraphics />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Lifestyle />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
