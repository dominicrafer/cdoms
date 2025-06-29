import Content from "./content";
import Aside from "./aside";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row bg-primary w-screen h-screen px-32 py-12 gap-8">
        <Aside />
        <Content>{children}</Content>
    </div>
  );
};

export default Layout;
