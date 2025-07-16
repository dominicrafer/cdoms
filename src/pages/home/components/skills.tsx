import SectionHeader from "../../../components/ui/section-header";
import TechCard from "../../../components/ui/tech-card";

const Skills = () => {
  return (
    <section className="w-full">
      <SectionHeader
        title="Current Technologies"
        subtitle="I work with a range of modern technologies that let me build powerful and reliable solutions. Here are some of my go-to tools."
      />

      <div className="grid grid-cols-4 gap-4 mt-4">
        <TechCard
          title="Git"
          subtitle="Version Control"
          icon="/src/assets/icons/github.svg"
          iconHexColor="#0D99FF"
        />
        <TechCard
          title="HTML"
          subtitle="Markup Language"
          icon="/src/assets/icons/html.svg"
          iconHexColor="#E14E1D"
        />
        <TechCard
          title="CSS"
          subtitle="Style Sheet Language"
          icon="/src/assets/icons/css.svg"
          iconHexColor="#0277BD"
        />
        <TechCard
          title="JavaScript"
          subtitle="Programming Language"
          icon="/src/assets/icons/javascript.svg"
          iconHexColor="#F0DB4F"
        />
        <TechCard
          title="TypeScript"
          subtitle="JavaScript but better"
          icon="/src/assets/icons/typescript.svg"
          iconHexColor="#007ACC"
        />
        <TechCard
          title="React"
          subtitle="JavaScript Library"
          icon="/src/assets/icons/react.svg"
          iconHexColor="#00D8FF"
        />
        <TechCard
          title="Vue"
          subtitle="JavaScript Framework"
          icon="/src/assets/icons/vue.svg"
          iconHexColor="#41B883"
        />
        <TechCard
          title="NextJS"
          subtitle="React Framework"
          icon="/src/assets/icons/nextjs.svg"
          iconHexColor="#000000"
        />
        <TechCard
          title="Remix"
          subtitle="React Framework"
          icon="/src/assets/icons/remix.svg"
          iconHexColor="#000000"
        />
        <TechCard
          title="Nuxt"
          subtitle="Vue Framework"
          icon="/src/assets/icons/nuxt.svg"
          iconHexColor="#00E676"
        />
        <TechCard
          title="Figma"
          subtitle="Design Tool"
          icon="/src/assets/icons/figma.svg"
          iconHexColor="#FF8A65"
        />
      </div>
    </section>
  );
};
export default Skills;
