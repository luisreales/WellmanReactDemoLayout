import React from "react";
import styles from './NavBar.module.css';

function NotificationBadge({ count }) {
  return (
    <div className={styles.notificationBadge}>
      <div className={styles.badgeContent}>{count}</div>
    </div>
  );
}

export default NotificationBadge;