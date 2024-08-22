import React from "react";
import styles from './Header.module.css';

function IconButton({ iconSrc, alt }) {
  return (
    <div className={styles.iconButton}>
      <div className={styles.iconButtonInner}>
        <button className={styles.button}>
          <img src={iconSrc} alt={alt} className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
}

export default IconButton;