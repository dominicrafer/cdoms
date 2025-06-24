import Content from "./content";
import Aside from "./aside";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <aside>
        <Aside />
      </aside>
      <main>
        <Content>{children}</Content>
      </main>
    </div>
  );
};

export default Layout;
