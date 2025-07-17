import SectionHeader from "../../../components/ui/section-header";
import TechCard from "../../../components/ui/tech-card";

const Skills = () => {
  return (
    <section className="w-full px-6">
      <SectionHeader
        title="Current Technologies"
        subtitle="I work with a range of modern technologies that let me build powerful and reliable solutions. Here are some of my go-to tools:"
      />

      <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 mt-4">
        <TechCard
          title="Git"
          subtitle="Version Control"
          icon="icons/github.svg"
          iconHexColor="#0D99FF"
        />
        <TechCard
          title="HTML"
          subtitle="Markup Language"
          icon="icons/html.svg"
          iconHexColor="#E14E1D"
        />
        <TechCard
          title="CSS"
          subtitle="Style Sheet Language"
          icon="icons/css.svg"
          iconHexColor="#0277BD"
        />
        <TechCard
          title="JavaScript"
          subtitle="Programming Language"
          icon="icons/javascript.svg"
          iconHexColor="#F0DB4F"
        />
        <TechCard
          title="TypeScript"
          subtitle="JavaScript but better"
          icon="icons/typescript.svg"
          iconHexColor="#007ACC"
        />
        <TechCard
          title="React"
          subtitle="JavaScript Library"
          icon="icons/react.svg"
          iconHexColor="#00D8FF"
        />
        <TechCard
          title="Vue"
          subtitle="JavaScript Framework"
          icon="icons/vue.svg"
          iconHexColor="#41B883"
        />
        <TechCard
          title="NextJS"
          subtitle="React Framework"
          icon="icons/nextjs.svg"
          iconHexColor="#000000"
        />
        <TechCard
          title="Remix"
          subtitle="React Framework"
          icon="icons/remix.svg"
          iconHexColor="#000000"
        />
        <TechCard
          title="Nuxt"
          subtitle="Vue Framework"
          icon="icons/nuxt.svg"
          iconHexColor="#00E676"
        />
        <TechCard
          title="Figma"
          subtitle="Design Tool"
          icon="icons/figma.svg"
          iconHexColor="#FF8A65"
        />
      </div>
    </section>
  );
};
export default Skills;
