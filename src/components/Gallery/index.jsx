import styles from "./gallery.module.scss";
import Tags from "../Tags";
import photos from "./photos.json";
import Card from "../Card";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {photos.map((photo) => {
          return (
            <Card
              key={photo.id}
              image={photo.image}
              title={photo.title}
              credits={photo.credits}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
