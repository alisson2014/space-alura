import { Header, Menu, Gallery, Banner, Footer } from "../../components";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
      </main>
      <div className={styles.gallery}>
        <Gallery />
      </div>
      <Footer />
    </>
  );
};

export default Home;
