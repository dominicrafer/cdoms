import Content from "./content";
import Navbar from "./navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-12 bg-primary">
      <div className="mx-auto flex flex-col gap-8">
        <Navbar />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
