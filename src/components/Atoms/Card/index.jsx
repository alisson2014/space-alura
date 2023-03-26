import styles from "./card.module.scss";
import assets from "./assets.json";

const Card = ({ image, title, credits }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.card__image}
        src={image}
        alt={title}
        title={title}
      />
      <p className={styles.card__desc}>{title}</p>
      <div>
        <p>{credits}</p>
        <span>
          {assets.map((asset) => (
            <img {...asset} />
          ))}
        </span>
      </div>
    </li>
  );
};

export default Card;
