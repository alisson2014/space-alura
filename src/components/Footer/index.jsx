import styles from "./footer.module.scss";
import { facebook, instagram, twitter } from "../../assets";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__social}>
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
      <p>Desenvolvido por Alisson</p>
    </header>
  );
};

export default Header;
