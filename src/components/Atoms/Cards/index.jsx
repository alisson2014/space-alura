import Card from "../Card";
import styles from "./cards.module.scss";

const Cards = ({ items }) => {
  return (
    <ul className={styles.cards}>
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            credits={item.credits}
          />
        );
      })}
    </ul>
  );
};

export default Cards;
