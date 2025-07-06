import Content from "./content";
import Aside from "./aside";
import SpotlightCursor from "./spotlight";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-12 bg-[#131924] h-screen ">
      <SpotlightCursor />
      <Aside />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
