import styles from "./main.module.scss";
import Menu from "../Menu";
import Banner from "../Banner";

const Main = () => {
  return (
    <main>
      <section className={styles.main}>
        <Menu />
        <Banner />
      </section>
    </main>
  );
};

export default Main;
