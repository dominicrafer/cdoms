import Icon from "../../components/ui/icon";
import Career from "./components/career";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Homepage() {
  return (
    <section className="flex flex-col gap-16 items-start">
      <Skills />
      <Career />
      <Projects />

      <div className="lg:hidden px-6 text-center">
        <div className="flex gap-2 items-center justify-center mt-4 lg:justify-start">
          <a
            href="https://www.linkedin.com/in/christian-dominic-rafer-ab7382151/cdoms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent duration-500"
          >
            <Icon type="LinkedInIcon" size="lg" />
          </a>
          <a
            href="https://github.com/dominicrafer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent duration-500"
          >
            <Icon type="GithubIcon" size="lg" />
          </a>
        </div>
        <p className="text-neutral-400 text-xs mt-4">
          © 2025 Christian Dominic Rafer. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
