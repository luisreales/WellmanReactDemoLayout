import React from 'react';
import styles from './TimeLogComponent.module.css';

function InputField({ label, type, required, placeholder }) {
  const id = `${label.toLowerCase().replace(/\s/g, '-')}-input`;
  return (
    <div className={styles.inputField}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
        {required && <span className={styles.requiredAsterisk}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={styles.inputElement}
      />
    </div>
  );
}

export default InputField;