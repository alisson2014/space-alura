import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__title}>
        A galeria mais completa de fotos do espaço
      </h1>
      <img
        src="/assets/images/other/banner.png"
        alt="banner"
        title="banner"
        className={styles.banner__image}
      />
    </div>
  );
};

export default Banner;
