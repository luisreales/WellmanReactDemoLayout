import React from 'react';
import styles from './TimeLogComponent.module.css';
import TimeLogTableHeader from './TimeLogTableHeader';
import TimeLogTableRow from './TimeLogTableRow';

function TimeLogTable() {
  const tableData = [
    {
      timeFrom: '0:00',
      timeTo: '06:45',
      timespan: '6.75',
      code: '12-Run Casing & Casing',
      category: 'Normal',
      fromDepth: '100',
      toDepth: '200',
      phase: 'Drilling',
      comments: 'The equipment was mobilized and assembled 100% to commence drilling. Pressures were recorded, and the well.',
    },
    // ... Add more data objects for other rows
  ];

  return (
    <div className={styles.timeLogTable}>
      <TimeLogTableHeader />
      <div className={styles.tableBody}>
        {tableData.map((row, index) => (
          <TimeLogTableRow key={index} data={row} />
        ))}
      </div>
    </div>
  );
}

export default TimeLogTable;