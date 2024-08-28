import React from 'react';
import styles from './TimeLogComponent.module.css';
import EntryForm from './EntryForm';
import TimeLogInfo from './TimeLogInfo';
import TimeLogTable from './TimeLogTable';

function TimeLogComponent() {
  return (
    <main className={styles.timeLogContainer}>
      <EntryForm />
      <TimeLogInfo />
      <TimeLogTable />
    </main>
  );
}

export default TimeLogComponent;