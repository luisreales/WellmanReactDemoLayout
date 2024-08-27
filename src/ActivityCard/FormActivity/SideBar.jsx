import React from 'react';
import styles from './FormActivity.module.css';

const dateHistory = [
  { date: 'Dec 11, 2023', isActive: false },
  { date: 'Dec 10, 2023', isActive: true },
  { date: 'Dec 09, 2023', isActive: false },
  { date: 'Dec 08, 2023', isActive: false },
  { date: 'Dec 07, 2023', isActive: false },
  { date: 'Dec 06, 2023', isActive: false },
  { date: 'Dec 05, 2023', isActive: false },
  { date: 'Dec 04, 2023', isActive: false },
  { date: 'Dec 03, 2023', isActive: false },
  { date: 'Dec 02, 2023', isActive: false },
  { date: 'Dec 01, 2023', isActive: false },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Date History</h2>
      <nav className={styles.dateHistoryMenu}>
        {dateHistory.map((item, index) => (
          <button key={index} className={`${styles.dateHistoryItem} ${item.isActive ? styles.activeDate : ''}`}>
            {item.date}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;