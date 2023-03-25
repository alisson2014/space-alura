import { Header, Menu, Banner } from "../../components";
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
    </>
  );
};

export default Home;
