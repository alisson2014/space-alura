import { Header, Main, Gallery, Footer } from "../../components";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <div className={styles.gallery}>
        <Gallery />
      </div>
      <Footer />
    </>
  );
};

export default Home;
