import images from "./images.json";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img {...images[0]} />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          placeholder="O que você procura?"
          type="text"
        />
        <img {...images[1]} />
      </div>
    </header>
  );
};

export default Header;
