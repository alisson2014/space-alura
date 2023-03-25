import { logo, search } from "./assets";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do alura space" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          placeholder="O que você procura?"
          type="text"
        />
        <img src={search} alt="icone de lupa" />
      </div>
    </header>
  );
};

export default Header;
