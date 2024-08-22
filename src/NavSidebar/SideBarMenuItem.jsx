import React from "react";
import styles from './NavSidebar.module.css';

function SideBarMenuItem({ label, icon, isFirst, isLast }) {
  return (
    <li className={`${styles.menuItem} ${isLast ? styles.lastItem : ''}`}>
      <div className={styles.sidebarItem}>
        {icon && (
          <div className={styles.iconWrapper}>
            <img loading="lazy" src={icon} className={styles.svgicon} alt="" />
          </div>

          
        )}
        
        <div className={styles.menuLabel}>{label}</div>
      </div>
    </li>
  );
}

export default SideBarMenuItem;