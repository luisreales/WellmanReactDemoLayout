import React from "react";
import styles from './DailyActivity.module.css';

function SubMenu({ options }) {
  return (
    <ul className={styles.subMenu}>
      {options.map((option, index) => (
        <li key={index} className={styles.subMenuItem}>
          <button className={styles.subMenuButton}>
            <span className={styles.dot}></span>
            <span className={styles.optionLabel}>{option}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;