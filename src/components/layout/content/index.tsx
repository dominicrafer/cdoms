import styles from "./styles.module.css";
const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>
    {children}
  </div>;
};

export default Content;
