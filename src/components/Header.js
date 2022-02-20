import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../images/1280px-Star_Wars_Logo.svg.png";
import ttlogo from "../images/top-trumps-logo.jpeg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Star Wars Logo" className={styles.logo} />
      <img src={ttlogo} alt="Top Trumps Logo" className={styles.ttlogo} />
    </header>
  );
}

export default Header;
