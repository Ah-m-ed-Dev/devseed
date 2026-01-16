import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Projects from "@/sections/projects";
import About from "@/sections/about";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
