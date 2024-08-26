import React from "react";
import styles from './DailyActivity.module.css';

function MenuSection({ title, iconSrc, children }) {
  return (
    <section className={styles.menuSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <img src={iconSrc} alt="" className={styles.sectionIcon} />
      </div>
      {children}
    </section>
  );
}

export default MenuSection;