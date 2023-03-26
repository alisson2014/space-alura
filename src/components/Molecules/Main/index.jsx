import styles from "./main.module.scss";
import Menu from "../../Atoms/Menu";
import Banner from "../../Atoms/Banner";
import Gallery from "../../Atoms/Gallery";
import Popular from "../../Atoms/Popular";

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
