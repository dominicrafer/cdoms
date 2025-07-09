import Content from "./content";
import Aside from "./aside";
import SpotlightCursor from "./spotlight";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-[#131924]">
      <div className="max-w-screen-xl flex mx-auto gap-16 justify-center">
        <SpotlightCursor />
        <Aside />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
