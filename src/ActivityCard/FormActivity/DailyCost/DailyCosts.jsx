import React from 'react';
import styles from './DailyCosts.module.css';
import CostSummary from './CostSummary';
import EntryForm from './EntryForm';
import CostTable from './CostTable';
import ActionButtons from './ActionButtons';

function DailyCosts() {
  return (
    <main className={styles.dailyCostsContainer}>
      <CostSummary />
      <EntryForm />
      <section className={styles.costTableSection}>
        <header className={styles.tableHeader}>
          <h2 className={styles.tableTitle}>
            Added Cost <span className={styles.resultCount}>(7 results)</span>
          </h2>
          <ActionButtons />
        </header>
        <CostTable />
      </section>
    </main>
  );
}

export default DailyCosts;