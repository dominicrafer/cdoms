import Button from "../ui/button";
import Image from "../ui/image";
import Icon from "../ui/icon";

const Aside = () => {
  const downloadResume = () => {
    console.log("download");
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <aside className="w-full p-6 flex flex-col justify-between h-screen text-white text-center lg:text-left lg:min-w-[400px] lg:max-w-[400px] lg:sticky lg:top-0">
      <section>
        <Image
          src="profile.jpg"
          alt="profile-pic"
          className="rounded-full w-[300px] mx-auto"
        ></Image>
        <h1 className="mt-4 text-accent">Christian Dominic Rafer</h1>
        <h2>Frontend Developer</h2>
        <div className="flex justify-between items-center">
          <p className="flex gap-1.5 text-neutral-400 mt-2">
            <Icon type="LocationIcon" size="sm" />
            Laguna, Philippines
          </p>
          <div className="flex gap-2 items-center py-1 px-2 bg-green-500/20 rounded-md relative">
            <div className="w-2 h-2 animate-ping rounded-full bg-green-500"></div>
            <span className="absolute left-2 inline-flex size-2 rounded-full bg-green-500"></span>
            <small className="text-green-500">Open to work</small>
          </div>
        </div>

        <a
          href="mailto:raferdominic@gmail.com"
          className="flex items-center gap-2 text-neutral-400 mt-1 transition duration-300 hover:text-accent hover:font-bold"
        >
          <Icon size="sm" type="EmailIcon" />
          raferdominic@gmail.com
        </a>
        <span className="text-2xs mt-2 block opacity-60 leading-5 text-justify hover:opacity-100 transition-opacity duration-300">
          I'm a Frontend Developer who builds and maintains web apps using
          modern frameworks like
          <b className="text-accent"> Vue/Nuxt</b>,
          <b className="text-accent"> React/NextJS</b>, and{" "}
          <b className="text-accent">Remix</b>. I specialize in transforming
          UI/UX designs into responsive, high-performance interfaces using
          technologies like <b className="text-accent">HTML</b>,
          <b className="text-accent"> CSS</b>, and{" "}
          <b className="text-accent">JavaScript</b>.
        </span>

        <Button
          variant="primary"
          icon="FileDownloadIcon"
          className="mt-4 w-full justify-center lg: inline-flex"
          onClick={downloadResume}
        >
          Resume
        </Button>
      </section>
      <section className="hidden lg:block">
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
      </section>
    </aside>
  );
};

export default Aside;
