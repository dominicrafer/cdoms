import SectionHeader from "../../../components/ui/section-header";
import Image from "../../../components/ui/image";
import Chip from "../../../components/ui/chip";
import { Carousel } from "react-responsive-carousel";
import Button from "../../../components/ui/button";

const Projects = () => {
  return (
    <section className="mx-auto w-full px-6">
      <SectionHeader title="Projects" />
      <section className="flex flex-col gap-2 mt-4 p-3 relative before:content-[''] before:w-0.5 before:h-full before:bg-neutral-500 before:top-0 before:absolute before:-left-0 before:rounded-md ">
        <div className="flex gap-2 justify-between">
          <div>
            <h3>Portfolio</h3>
            <p className="text-neutral-300">
              A personal portfolio showcasing my frontend development projects,
              design skills, and passion for building clean, user-focused web
              experiences. This is the website you're looking right now.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <div className="flex gap-2 mt-4">
                <Chip title="React" />
                <Chip title="TypeScript" />
                <Chip title="Tailwind" />
              </div>

              <div className="flex gap-2">
                <Button variant="primary" icon="GithubIcon">
                  View GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Carousel showThumbs={false}>
          {[
            <div className="border border-neutral-500 rounded-md p-2">
              <Image alt="project-1" src="public/project-1.jpg" />
            </div>,
          ]}
        </Carousel>
      </section>
    </section>
  );
};

export default Projects;
