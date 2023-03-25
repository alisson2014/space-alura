import styles from "./footer.module.scss";
import socialIcon from "./social.json";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__social}>
        {socialIcon.map((icon) => {
          return (
            <img
              key={icon.id}
              src={icon.image}
              alt={icon.name}
              title={icon.name}
            />
          );
        })}
      </div>
      <p>Desenvolvido por Alisson</p>
    </header>
  );
};

export default Header;
