import styles from "./footer.module.scss";
import socialIcon from "./social.json";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__social}>
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
    </footer>
  );
};

export default Footer;
