import Career from "./components/career";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Homepage() {
  return (
    <section className="flex flex-col gap-16 items-start">
      <Skills />
      <Career />
      <Projects />
    </section>
  );
}
