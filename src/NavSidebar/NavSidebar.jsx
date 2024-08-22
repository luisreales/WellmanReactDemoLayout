import React from "react";
import styles from './NavSidebar.module.css';
import MenuItem from './SideBarMenuItem';


const menuItems = [
  { label: "Create", icon: '/assets/icons/icon-create.png' },
  { label: "Dashboard",icon: '/assets/icons/icon-dashboard.png'  },
  { label: "Activities" , icon: '/assets/icons/icon-activities-active.svg'},
  { label: "Wells", icon: '/assets/icons/icon-well.png' },
  { label: "AFEs", icon: '/assets/icons/icon-afe.png' },
  { label: "Pads" , icon: '/assets/icons/icon-pad.png' },
  { label: "Facilities" , icon: '/assets/icons/icon-facilities.png' },
  { label: "Pipelines" , icon: '/assets/icons/icon-pipeline.png' },
  { label: "Reports" , icon: '/assets/icons/icon-report.png' },
  { label: "Admin", icon: '/assets/icons/icon-settings.png' },
];

function NavSidebar() {
  return (
    <nav className={styles.navSidebar}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6383e8f7b808c43189f6045f02f6942ab95c0ebecc86bd0b8f7e0a1813f3b49?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" className={styles.logo} alt="Company logo" />
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} icon={item.icon} isFirst={index === 0} isLast={index === menuItems.length - 1} />
        ))}
      </ul>
      <div className={styles.separator} />
    </nav>
  );
}

export default NavSidebar;