import styles from "./item.module.scss";

const Item = ({ image, name }) => {
  return (
    <li className={styles.item}>
      <img src={image} alt={name} title={name} />
      <a href="/" title={name}>
        {name}
      </a>
    </li>
  );
};

export default Item;
