import Card from "../Card";
import styles from "./cards.module.scss";

const Cards = ({ items }) => {
  return (
    <ul className={styles.cards}>
      {items.map((item) => {
        return <Card {...item} />;
      })}
    </ul>
  );
};

export default Cards;
