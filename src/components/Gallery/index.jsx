import styles from "./gallery.module.scss";
import Tags from "../Tags";
import photos from "./photos.json";
import open from "./open.png";
import favorite from "./favorito.png";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {photos.map((photo) => {
          return (
            <li key={photo.id} className={styles.gallery__card}>
              <img
                className={styles.gallery__image}
                src={photo.image}
                alt={photo.title}
                title={photo.title}
              />
              <p className={styles.gallery__desc}>{photo.title}</p>
              <div>
                <p>{photo.credits}</p>
                <span>
                  <img src={favorite} alt="icone corção curtir" />
                  <img src={open} alt="icone de abrir modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
