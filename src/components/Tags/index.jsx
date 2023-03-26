import styles from "./tags.module.scss";
import photos from "../Gallery/photos.json";

const Tags = ({ tags, filtered, setItems }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => filtered(tag)}>
            {tag}
          </li>
        ))}
        <li onClick={() => setItems(photos)}>Todas</li>
      </ul>
    </div>
  );
};

export default Tags;
