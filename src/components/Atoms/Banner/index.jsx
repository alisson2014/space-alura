import banner from "./banner.png";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__title}>
        A galeria mais completa de fotos do espaço
      </h1>
      <img src={banner} alt="banner" className={styles.banner__image} />
    </div>
  );
};

export default Banner;
