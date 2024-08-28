import React from 'react';
import NavBar from './NavBar';
import Sidebar from './SideBar';
import styles from './FormActivity.module.css';


function FormActiviy() {
  const navBarProps = {
    title: 'Daily Costs',
    activity: 'Drilling 3D',
    well: 'RES DEMO HZ 05-26-032-09W4',
    isCompleted: false,
  };

  return (
    <main className={styles.dailyCostsContainer}>
      <Sidebar />
      
      <NavBar {...navBarProps} />
     
    </main>
  );
}

export default FormActiviy;