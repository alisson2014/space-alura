import styles from "./main.module.scss";
import Menu from "../Menu";
import Banner from "../Banner";
import Gallery from "../Gallery";
import Popular from "../Popular";

const Main = () => {
  return (
    <main>
      <section className={styles.main}>
        <Menu />
        <Banner />
      </section>
      <section className={styles.gallery}>
        <Gallery />
        <Popular />
      </section>
    </main>
  );
};

export default Main;
