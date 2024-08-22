import React from "react";
import styles from './Header.module.css';

function PrimaryButton({ iconSrc, text }) {
  return (
    <button className={styles.primaryButton}>
      <div className={styles.primaryButtonContent}>
        <img src={iconSrc} alt="" className={styles.buttonIcon} />
        <span>{text}</span>
      </div>
    </button>
  );
}

export default PrimaryButton;