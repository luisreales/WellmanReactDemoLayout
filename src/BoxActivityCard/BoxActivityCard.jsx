import React from "react";
import styles from './BoxActivityCard.module.css';
import ActivityCard from "../ActivityCard/ActivityCard";
import BoxActivitySideGeneral from "../BoxActivitySideGeneral/BoxActivitySideGeneral"
function BoxActivityCard() {
  return (
    <main className={styles.container}>
        <ActivityCard />
        <BoxActivitySideGeneral />
    </main>
  );
}

export default BoxActivityCard;