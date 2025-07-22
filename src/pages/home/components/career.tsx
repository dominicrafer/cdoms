import { useEffect } from "react";
import CareerCard from "../../../components/ui/career-card";
import SectionHeader from "../../../components/ui/section-header";

const Career = () => {
  useEffect(() => {
    const isMobileOrTablet = window.innerWidth <= 1024;

    if (!isMobileOrTablet) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("highlight-on-center");
          } else {
            entry.target.classList.remove("highlight-on-center");
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0% -35% 0%",
        threshold: 0.25,
      }
    );

    const targets = document.querySelectorAll(".career-card");
    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className="mx-auto w-full px-6">
      <SectionHeader
        title="Career"
        subtitle="I have over 7 years of experience in development. This includes both the frontend and backend roles I had."
      />
      <div className="flex flex-col gap-6 mt-4">
        <CareerCard
          logo="bp.jpg"
          role="Senior Frontend Developer"
          company="Booth & Partners Inc."
          location="Taguig, Metro Manila, PH"
          duration="2024 - Present"
          skills={["React", "TypeScript", "Shopify", "Pack Digital", "Remix"]}
          descriptions={[
            "Work alongside UX Designers and other cross functional team members to implement website visions and designs to working code.",
            "Frontend application maintenance such as package and content updates.",
            "Develop custom application for internal use on Shopify",
            "Collaborate with backend developers for frontend API integrations",
          ]}
        />
        <CareerCard
          logo="ecv.png"
          role="Cloud Developer"
          company="eCloudvalley"
          location="Taguig, Metro Manila, PH"
          duration="2021 - 2024"
          skills={[
            "React",
            "Vue",
            "Nuxt",
            "Tailwind",
            "Quasar",
            "Strapi",
            "AWS",
          ]}
          descriptions={[
            "Set the standards for frontend development as a Cloud Developer that specializes in frontend development in the team.",
            "Handled the translation of UI/UX design into frontend development and the API integrations with the backend developers of the team.",
            "Built a Frontend boilerplate using Vue + Nuxt + TailwindCSS + Quasar to kick-start the frontend setup activities of the projects.",
            "Successfully delivered more than 10 projects including the internal projects of the company utilizing the boilerplate built.",
            "Consistently entrusted with multiple concurrent projects due to recognized expertise in frontend development.",
          ]}
        />

        <CareerCard
          role="Web Developer"
          company="Ximex Delivery Express Inc"
          location="Alabang, Metro Manila, PH"
          duration="2019 - 2021"
          skills={["React", "Laravel", "Lumen", "PHP", "MySQL", "Ant Design"]}
          descriptions={[
            "Developed and maintained company IT systems.",
            "Enhanced the Rubix Track and Trace platform with React.js and Ant Design.",
            "Built new applications like the Express Box warehouse system and Payslip Automation tool using React, Laravel, and Lumen.",
            "Contributed to server management and migration efforts.",
          ]}
        />
        <CareerCard
          role="Web Developer"
          company="Appsilog Inc."
          location="Alabang, Metro Manila, PH"
          duration="2018 - 2019"
          skills={["PHP", "CodeIgniter", "Vue", "MySQL"]}
          descriptions={[
            "Developed APIs for mobile applications using PHP.",
            "Maintained and updated client systems using PHP CodeIgniter (backend) and Vue.js (frontend).",
            "Managed client requests and resolved system issues efficiently.",
          ]}
        />
      </div>
    </section>
  );
};

export default Career;
