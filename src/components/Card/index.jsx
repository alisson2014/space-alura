import styles from "./card.module.scss";
import open from "./icons/open.png";
import favorite from "./icons/favorito.png";

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
          <img src={favorite} alt="icone corção curtir" />
          <img src={open} alt="icone de abrir modal" />
        </span>
      </div>
    </li>
  );
};

export default Card;
