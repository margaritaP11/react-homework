import React from "react";
import styles from "./Header.module.css";
import Logo from '../../assets/Logo.svg'
const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={Logo}
        alt="Spotyfi Logo"
        className={styles.logo}
      />

    </header>
  );
};

export default Header;
