import { useState } from "react";
import styles from "./gallery.module.scss";
import photos from "./photos.json";
import Tags from "../Tags";
import Cards from "../Cards";

const Gallery = () => {
  const [items, setItems] = useState(photos);
  const tags = [...new Set(photos.map((photo) => photo.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return tag === photo.tag;
    });
    setItems(newPhotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtered={filterPhotos} setItems={setItems} />
      <Cards items={items} />
    </section>
  );
};

export default Gallery;
