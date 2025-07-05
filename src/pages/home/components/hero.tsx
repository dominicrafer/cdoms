import Button from "../../../components/ui/button";
import Image from "../../../components/ui/image";

const Hero = () => {
  return (
    <section className="gap-10 flex items-center py-16 mx-auto max-w-screen-lg ">
      <Image
        alt="hero-pic"
        src="/public/profile.jpg"
        className="rounded-full max-w-[300px] box-shadow-default"
      />
      <div className="flex flex-col gap-3 text-shadow-default h-full">
        <header className="font-bold text-4xl tracking-wider text-secondary">
          Dominic Rafer
        </header>
        <sub className="text-xl">Front End Developer</sub>
        <p className="text-slate-300 leading-6">
          {/* I'm a front end developer who enjoys turning designs into fast, clean,
          and user-friendly websites. */}
          I’m a Front-End Developer with over{" "}
          <b className="text-secondary">7 years of experience </b>
          creating and maintaining web applications using modern frameworks like
          <b className="text-secondary"> Vue/NuxtJS </b>,{" "}
          <b className="text-secondary">React/NextJS</b>, and{" "}
          <b className="text-secondary">Remix</b>. I specialize in transforming
          UI/UX designs into responsive, high-performance interfaces using
          technologies like <b className="text-secondary">HTML</b>,
          <b className="text-secondary">CSS</b>, and
          <b className="text-secondary"> JavaScript</b>
        </p>
        <div className="flex gap-3 ">
          <Image
            alt="hero-pic"
            src="/src/assets/icons/facebook.svg"
            className="rounded-full box-shadow-default"
          />
          <Image
            alt="hero-pic"
            src="/src/assets/icons/linkedin.svg"
            className="rounded-full box-shadow-default"
          />
          <Image
            alt="hero-pic"
            src="/src/assets/icons/github-sm.svg"
            className="rounded-full box-shadow-default"
          />
        </div>
        <Button
          variant="secondary"
          className="mt-10 box-shadow-default font-bold"
        >
          View Resume
        </Button>
      </div>
    </section>
  );
};

export default Hero;
