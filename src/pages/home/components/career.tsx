import Chip from "../../../components/ui/chip";
import Image from "../../../components/ui/image";
import SectionHeader from "../../../components/ui/section-header";

const Career = () => {
  return (
    <section className="mx-auto w-full">
      <SectionHeader
        title="Career"
        subtitle="I have over 7 years of experience in development. This includes both the frontend and backend roles I had."
      />
      <div className="flex flex-col gap-6 mt-4">
        <article className="flex  flex-col items-start p-3 before:content-[''] before:w-0.5 before:h-full before:bg-neutral-500 before:top-0 before:absolute before:-left-0 before:rounded-md relative">
          <div className="flex flex-row gap-4">
            <Image
              src="/public/bp.jpg"
              alt="booth-&-partners"
              className="w-28 h-28 rounded-md"
            ></Image>
            <div className="flex flex-col">
              <h3>Senior Front End Developer</h3>
              <p className="text-neutral-300">Booth & Partners Inc. | Taguig</p>
              <span className="text-neutral-300">2024 - Present</span>
              <div className="mt-4 flex gap-2">
                <Chip title="React" />
                <Chip title="TypeScript" />
                <Chip title="Shopify" />
                <Chip title="Pack Digital" />
                <Chip title="Remix" />
              </div>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-6 text-neutral-300 flex flex-col gap-4">
            <li>
              Works alongside UX Designers and other cross functional team
              members to implement website visions and designs to working code.
            </li>
            <li>
              Front-end application maintenance such as package and content
              updates.
            </li>
            <li>Develops custom application for internal use on Shopify</li>
            <li>
              Collaborates with backend developers for front-end API
              integrations
            </li>
          </ul>
        </article>
        <article className="flex  flex-col items-start p-3 before:content-[''] before:w-0.5 before:h-full before:bg-neutral-500 before:top-0 before:absolute before:-left-0 before:rounded-md relative">
          <div className="flex flex-row gap-4">
            <Image
              src="/public/ecv.png"
              alt="booth-&-partners"
              className="w-28 h-28 rounded-md"
            ></Image>
            <div className="flex flex-col">
              <h3>Cloud Developer II</h3>
              <p className="text-neutral-300">eCloudvalley | Taguig</p>
              <span className="text-neutral-300">2021 - 2024</span>
              <div className="mt-4 flex gap-2">
                <Chip title="React" />
                <Chip title="Vue" />
                <Chip title="Nuxt" />
                <Chip title="Tailwind" />
                <Chip title="Quasar" />
                <Chip title="Strapi" />
                <Chip title="AWS" />
              </div>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-6 text-neutral-300 flex flex-col gap-4">
            <li>
              Set the standards for front-end development as a Cloud Developer
              that specializes in front-end development in the team.
            </li>
            <li>
              Handled the translation of UI/UX design into front-end development
              and the API integrations with the backend developers of the team.
            </li>
            <li>
              Built a Front-end boilerplate using Vue + Nuxt + TailwindCSS +
              Quasar to kick-start the frontend setup activities of the
              projects.
            </li>
            <li>
              Successfully delivered more than 10 projects including the
              internal projects of the company utilizing the boilerplate built.
            </li>
            <li>
              Consistently entrusted with multiple concurrent projects due to
              recognized expertise in frontend development.
            </li>
          </ul>
        </article>
        <article className="flex  flex-col items-start p-3 before:content-[''] before:w-0.5 before:h-full before:bg-neutral-500 before:top-0 before:absolute before:-left-0 before:rounded-md relative">
          <div className="flex flex-row gap-4">
            <Image
              alt="booth-&-partners"
              className="w-28 h-28 rounded-md"
            ></Image>
            <div className="flex flex-col">
              <h3> Web Developer</h3>
              <p className="text-neutral-300">
                Ximex Delivery Express Inc | Alabang
              </p>
              <span className="text-neutral-300">2019 - 2021</span>
              <div className="mt-4 flex gap-2">
                <Chip title="React" />
                <Chip title="Laravel" />
                <Chip title="Lumen" />
                <Chip title="PHP" />
                <Chip title="MySQL" />
                <Chip title="Ant Design" />
              </div>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-6 text-neutral-300 flex flex-col gap-4">
            <li>Developed and maintained company IT systems</li>
            <li>
              Enhanced the Rubix Track and Trace platform with React.js and Ant
              Design
            </li>
            <li>
              Built new applications like the Express Box warehouse system and
              Payslip Automation tool using React, Laravel, and Lumen.
            </li>
            <li>Contributed to server management and migration efforts.</li>
          </ul>
        </article>
        <article className="flex  flex-col items-start p-3 before:content-[''] before:w-0.5 before:h-full before:bg-neutral-500 before:top-0 before:absolute before:-left-0 before:rounded-md relative">
          <div className="flex flex-row gap-4">
            <Image
              alt="booth-&-partners"
              className="w-28 h-28 rounded-md"
            ></Image>
            <div className="flex flex-col">
              <h3>Web Developer</h3>
              <p className="text-neutral-300">Appsilog Inc. | Alabang</p>
              <span className="text-neutral-300">2018 - 2019</span>
              <div className="mt-4 flex gap-2">
                <Chip title="PHP" />
                <Chip title="CodeIgniter" />
                <Chip title="Vue" />
                <Chip title="MySQL" />
              </div>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-6 text-neutral-300 flex flex-col gap-4">
            <li>Developed APIs for mobile applications using PHP.</li>
            <li>
              Maintained and updated client systems using PHP CodeIgniter
              (backend) and Vue.js (frontend).
            </li>
            <li>
              Managed client requests and resolved system issues efficiently.
            </li>
          </ul>
        </article>
      </div>

      {/* <div className=" mt-8">
        <article className="  -ml-[0.1rem]">
          <header className=" w-full flex justify-between items-end py-2 pr-2">
            <div className="flex items-end gap-2">
              <Image
                src="/public/bp.jpg"
                alt="b&p logo"
                className="w-20 rounded-md"
              />
              <div>
                <h3 className="text-lg">Senior Frontend Developer</h3>
                <p className="text-slate-200">Booth & Partners Inc. | Taguig</p>
              </div>
            </div>
            <span className="text-slate-300 text-xs">2024</span>
          </header>
          <ol className="text-slate-200 py-4 pr-2 pl-6 list-disc flex flex-col gap-3 bg-black/30">
            <li>
              Works alongside UX Designers and other cross functional team
              members to
              <b> implement website visions and designs to working code</b>.
            </li>
            <li>
              <b>Front-end application maintenance</b> such as package and
              content updates.
            </li>
            <li>
              <b>Implemented an observability platform</b> to their front-end
              application to monitor web performance and to track errors.
            </li>
            <li>Develops custom application for internal use on Shopify.</li>
            <li>
              Collaborates with backend developers for front-end API
              integrations.
            </li>
          </ol>
        </article>
        <article className=" col-start-2    -ml-[1px] ">
          <header className=" w-full flex justify-between items-end py-2 pl-2">
            <span className="text-slate-300 text-xs">2021</span>
            <div className="flex items-end gap-2">
              <div className="text-right">
                <h3 className="text-lg">Cloud Developer II</h3>
                <p className="text-slate-200">eCloudvalley | Taguig</p>
              </div>
              <Image
                src="/public/ecv.png"
                alt="b&p logo"
                className="w-20 rounded-md"
              />
            </div>
          </header>
          <ol className="text-slate-200 py-4 pr-2 list-disc pl-6 flex flex-col gap-3 bg-black/30">
            <li>
              Set the standards for front-end development as a Cloud Developer
              that specializes in front-end development in the team.
            </li>
            <li>
              Handled the translation of UI/UX design into front-end development
              and the API integrations with the backend developers of the team.
            </li>
            <li>
              Built a Front-end boilerplate using Vue + Nuxt + TailwindCSS +
              Quasar to kick-start the frontend setup activities of the
              projects.
            </li>
            <li>
              Successfully delivered more than 10 projects including the
              internal projects of the company utilizing the boilerplate built.
            </li>
            <li>
              Consistently entrusted with multiple concurrent projects due to
              recognized expertise in frontend development.
            </li>
          </ol>
        </article>
        <article className="   -ml-[0.1rem]">
          <header className=" w-full flex justify-between items-end py-2 pr-2">
            <div className="flex items-end gap-2">
              <div>
                <h3 className="text-lg">Web Developer</h3>
                <p className="text-slate-200">
                  Ximex Delivery Express Inc | Alabang{" "}
                </p>
              </div>
            </div>
            <span className="text-slate-300 text-xs">2019</span>
          </header>
          <ol className="text-slate-200 py-4 pr-2 pl-6 list-disc flex flex-col gap-3 bg-black/30">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quis nulla dictum, luctus nisi non, dignissim eros. Donec rutrum
              sem ultrices, finibus lorem non, euismod leo.
            </li>
            <li>
              Phasellus quis diam in neque tristique consequat. Proin consequat
              feugiat leo semper sagittis. Duis molestie enim et eros efficitur,
              non scelerisque tortor luctus. Donec cursus quam est, vitae mollis
              augue vehicula in
            </li>
          </ol>
        </article>
        <article className="col-start-2    -ml-[1px] ">
          <header className=" w-full flex justify-between items-end py-2 pl-2">
            <span className="text-slate-300 text-xs">2018</span>
            <div className="flex items-end gap-2">
              <div className="text-right">
                <h3 className="text-lg">Web Developer</h3>
                <p className="text-slate-200">Appsilog Inc. | Alabang</p>
              </div>
              <Image
                src="/public/bp.jpg"
                alt="b&p logo"
                className="w-20 rounded-md"
              />
            </div>
          </header>
          <ol className="text-slate-200 py-4 pr-2 list-disc pl-6 flex flex-col gap-3 bg-black/30">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quis nulla dictum, luctus nisi non, dignissim eros. Donec rutrum
              sem ultrices, finibus lorem non, euismod leo.
            </li>
            <li>
              Phasellus quis diam in neque tristique consequat. Proin consequat
              feugiat leo semper sagittis. Duis molestie enim et eros efficitur,
              non scelerisque tortor luctus. Donec cursus quam est, vitae mollis
              augue vehicula in
            </li>
          </ol>
        </article>
      </div> */}
    </section>
  );
};

export default Career;
