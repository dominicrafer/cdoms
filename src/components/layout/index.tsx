import Content from "./content";
import Aside from "./aside";
import styles from "./styles.module.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <aside className={styles.aside}>
        <Aside />
      </aside>
      <main className={styles.content}>
        <Content>{children}</Content>
      </main>
    </div>
  );
};

export default Layout;
