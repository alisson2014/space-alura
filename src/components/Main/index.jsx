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
      <div className={styles.gallery}>
        <Gallery />
        <Popular />
      </div>
    </main>
  );
};

export default Main;
