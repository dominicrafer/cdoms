import Image from "../ui/image";

const Aside = () => {
  return (
    <aside className="w-100 rounded-sm">
      <div className="relative w-fit mb-[-40px]">
        <Image alt="profile-pic" src="/public/profile.jpg" className="w-fit" />
      </div>
      <div className="bg-black/70 px-4 py-2 rounded-t-md z-10">
        <section>
          <h1 className="text-white font-semibold text-xl">
            Christian Dominic Rafer
          </h1>
        </section>
        <section className="flex flex-col gap-4 bg-black/20 p">
          <section className="flex flex-col gap-2">
            <h3 className="text-slate-200 text-md">Front End Developer</h3>
            <p className="text-slate-400 text-sm">
              I'm a front end developer who enjoys turning designs into fast,
              clean, and user-friendly websites.{" "}
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="text-slate-200 text-md">Tools & Technologies</h3>
            <div className="flex gap-4 flex-wrap">
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
              <img src="/src/assets/icons/react.svg" />
            </div>
          </section>
        </section>
      </div>
    </aside>
  );
};

export default Aside;
