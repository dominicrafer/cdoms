import CareerCard from "../../../components/ui/career-card";
import SectionHeader from "../../../components/ui/section-header";

const Career = () => {
  return (
    <section className="mx-auto w-full px-6">
      <SectionHeader
        title="Career"
        subtitle="I have over 7 years of experience in development. This includes both the frontend and backend roles I had."
      />
      <div className="flex flex-col gap-6 mt-4">
        <CareerCard
          logo="public/bp.jpg"
          role="Senior Front End Developer"
          company="Booth & Partners Inc."
          location="Taguig"
          duration="2024 - Present"
          skills={["React", "TypeScript", "Shopify", "Pack Digital", "Remix"]}
          descriptions={[
            "Works alongside UX Designers and other cross functional team members to implement website visions and designs to working code.",
            "Front-end application maintenance such as package and content updates.",
            "Develops custom application for internal use on Shopify",
            "Collaborates with backend developers for front-end API integrations",
          ]}
        />
        <CareerCard
          logo="public/ecv.png"
          role="Cloud Developer"
          company="eCloudvalley"
          location="Taguig"
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
            "Set the standards for front-end development as a Cloud Developer that specializes in front-end development in the team.",
            "Handled the translation of UI/UX design into front-end development and the API integrations with the backend developers of the team.",
            "Built a Front-end boilerplate using Vue + Nuxt + TailwindCSS + Quasar to kick-start the frontend setup activities of the projects.",
            "Successfully delivered more than 10 projects including the internal projects of the company utilizing the boilerplate built.",
            "Consistently entrusted with multiple concurrent projects due to recognized expertise in frontend development.",
          ]}
        />

        <CareerCard
          role="Web Developer"
          company="Ximex Delivery Express Inc"
          location="Alabang"
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
          location="Alabang"
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
