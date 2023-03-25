import styles from "./menu.module.scss";
import icons from "./icons.json";
import Item from "../Item";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map((icon) => {
          return <Item key={icon.id} image={icon.image} name={icon.name} />;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
