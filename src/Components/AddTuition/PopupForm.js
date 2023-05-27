import React from 'react';
import styles from './PopupForm.module.css';

const PopupForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Close the form after submission
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Tuition Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">School/Institution:</label>
            <input type="text" id="school" name="phone" placeholder="Enter school/institution" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Class/type:</label>
            <input type="text" id="grade" name="phone" placeholder="Enter Grade" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Subjects:</label>
            <input type="text" id="Subject" name="phone" placeholder="Enter subjects" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Location:</label>
            <input type="text" id="location" name="phone" placeholder="Enter Location" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Extra Innformation:</label>
            <textarea id="message" name="message" placeholder="Add any information" />
          </div>

          <button type="submit">Submit</button>
        </form>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupForm;