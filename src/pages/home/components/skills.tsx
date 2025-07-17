import SectionHeader from "../../../components/ui/section-header";
import TechCard from "../../../components/ui/tech-card";
import githubIcon from "../../../assets/icons/github.svg";
import htmlIcon from "../../../assets/icons/html.svg";
import cssIcon from "../../../assets/icons/css.svg";
import jsIcon from "../../../assets/icons/javascript.svg";
import tsIcon from "../../../assets/icons/typescript.svg";
import reactIcon from "../../../assets/icons/react.svg";
import vueIcon from "../../../assets/icons/vue.svg";
import nextIcon from "../../../assets/icons/nextjs.svg";
import remixIcon from "../../../assets/icons/remix.svg";
import nuxtIcon from "../../../assets/icons/nuxt.svg";
import figmaIcon from "../../../assets/icons/figma.svg";
const Skills = () => {
  return (
    <section className="w-full px-6">
      <SectionHeader
        title="Current Technologies"
        subtitle="I work with a range of modern technologies that let me build powerful and reliable solutions. Here are some of my go-to tools."
      />

      <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 mt-4">
        <TechCard
          title="Git"
          subtitle="Version Control"
          icon={githubIcon}
          iconHexColor="#0D99FF"
        />
        <TechCard
          title="HTML"
          subtitle="Markup Language"
          icon={htmlIcon}
          iconHexColor="#E14E1D"
        />
        <TechCard
          title="CSS"
          subtitle="Style Sheet Language"
          icon={cssIcon}
          iconHexColor="#0277BD"
        />
        <TechCard
          title="JavaScript"
          subtitle="Programming Language"
          icon={jsIcon}
          iconHexColor="#F0DB4F"
        />
        <TechCard
          title="TypeScript"
          subtitle="JavaScript but better"
          icon={tsIcon}
          iconHexColor="#007ACC"
        />
        <TechCard
          title="React"
          subtitle="JavaScript Library"
          icon={reactIcon}
          iconHexColor="#00D8FF"
        />
        <TechCard
          title="Vue"
          subtitle="JavaScript Framework"
          icon={vueIcon}
          iconHexColor="#41B883"
        />
        <TechCard
          title="NextJS"
          subtitle="React Framework"
          icon={nextIcon}
          iconHexColor="#000000"
        />
        <TechCard
          title="Remix"
          subtitle="React Framework"
          icon={remixIcon}
          iconHexColor="#000000"
        />
        <TechCard
          title="Nuxt"
          subtitle="Vue Framework"
          icon={nuxtIcon}
          iconHexColor="#00E676"
        />
        <TechCard
          title="Figma"
          subtitle="Design Tool"
          icon={figmaIcon}
          iconHexColor="#FF8A65"
        />
      </div>
    </section>
  );
};
export default Skills;
