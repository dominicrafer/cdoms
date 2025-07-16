import Content from "./content";
import Aside from "./aside";
import SpotlightCursor from "./spotlight";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-[#131924]">
      <div className="sm:max-w-screen-md lg:flex-row lg:gap-4 md:max-w-screen-xl flex flex-col justify-center items-center lg:items-start lg:mx-auto">
        <SpotlightCursor />
        <Aside />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
