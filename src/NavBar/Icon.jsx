import React from "react";
import styles from './NavBar.module.css';

function Icon({ src, alt }) {
  return <img loading="lazy" src={src} className={styles.icon} alt={alt} />;
}

export default Icon;