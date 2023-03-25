import popularPhotos from "./photos-popular.json";
import styles from "./popular.module.scss";

const Popular = () => {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularPhotos.map((popularPhoto) => {
          return (
            <li key={popularPhoto.id}>
              <img
                src={popularPhoto.path}
                alt={popularPhoto.alt}
                title={popularPhoto.alt}
              />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
};

export default Popular;
