import React from 'react';
import styles from './TimeLogComponent.module.css';

function DropdownField({ label, options, required }) {
  const id = `${label.toLowerCase().replace(/\s/g, '-')}-dropdown`;
  return (
    <div className={styles.dropdownField}>
      <label htmlFor={id} className={styles.dropdownLabel}>
        {label}
        {required && <span className={styles.requiredAsterisk}>*</span>}
      </label>
      <select id={id} required={required} className={styles.dropdownElement}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownField;