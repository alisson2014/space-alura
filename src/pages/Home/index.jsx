import { Header, Menu, Banner, Footer } from "../../components";
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
      <Footer />
    </>
  );
};

export default Home;
