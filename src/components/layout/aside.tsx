import Button from "../ui/button";
import Image from "../ui/image";

const Aside = () => {
  return (
    <aside className="w-[400px] min-w-[400px] h-screen  flex flex-col justify-between sticky top-0 py-12">
      <section>
        <Image
          src="/public/profile.jpg"
          alt="profile-pic"
          className="rounded-full w-[250px]"
        ></Image>
        <h1 className="mt-4 text-accent">Christian Dominic Rafer</h1>
        <h2>Frontend Developer</h2>

        <p className="flex gap-1.5 opacity-50 mt-2">
          <Image src="/src/assets/icons/location-sm.svg" alt="location" />
          Philippines, Laguna
        </p>
        <p className="flex gap-2 opacity-50 mt-1">
          <Image src="/src/assets/icons/email-sm.svg" alt="location" />
          raferdominic@gmail.com
        </p>
        <span className="text-2xs mt-2 block opacity-60 leading-5 text-justify">
          I'm a Front-End Developer with over 7 years of expqerience creating
          and maintaining web applications using modern frameworks like{" "}
          <b className="text-accent">Vue/Nuxt</b>,
          <b className="text-accent"> React/NextJS</b>, and{" "}
          <b className="text-accent">Remix</b>. I specialize in transforming
          UI/UX designs into responsive, high-performance interfaces using
          technologies like <b className="text-accent">HTML</b>,
          <b className="text-accent"> CSS</b>, and{" "}
          <b className="text-accent">JavaScript</b>
        </span>
        <div className="flex gap-2 items-center mt-4">
          <Image src="/src/assets/icons/facebook.svg" alt="facebook" />
          <Image src="/src/assets/icons/linkedin.svg" alt="linkedin" />
          <Image src="/src/assets/icons/github-sm.svg" alt="github" />
        </div>
        <Button
          variant="primary"
          icon="/src/assets/icons/download.svg"
          className="mt-4"
        >
          Resume
        </Button>
      </section>
      <section className="opacity-50 text-xs">
        <p>© 2025 Christian Dominic Rafer. Built with React & Tailwind CSS.</p>
      </section>
    </aside>
  );
};

export default Aside;
