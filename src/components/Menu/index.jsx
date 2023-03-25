import React from "react";
import styles from "./menu.module.scss";
import {
  maisCurtidas,
  maisVistas,
  novasImagens,
  home,
  surpreendaMe,
} from "../../assets";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="home ativo" />
          <a href="/">Inicio</a>
        </li>

        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="mais visitas" />
          <a href="/">Mais visitadas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novasImagens} alt="imagens novas" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
