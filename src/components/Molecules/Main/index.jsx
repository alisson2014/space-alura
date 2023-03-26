import { Menu, Banner, Gallery, Popular } from "../../Atoms";
import styles from "./main.module.scss";

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
