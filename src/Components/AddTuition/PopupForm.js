import React, { useState } from 'react';
import styles from './PopupForm.module.css'

const PopupForm = ({ onClose, onSubmit }) => {

  const [phonenumber, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [classtype, setType] = useState('');
  const [subjects, setSubject] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setExtra] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };
  const handleExtraChange = (e) => {
    setExtra(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      phonenumber: phonenumber,
      institution: institution,
      classtype: classtype,
      subjects: subjects,
      location: location,
      salary: salary,
      description: description,

    };

    onSubmit(postData);

    // Close the form after submission
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              value={phonenumber}
              onChange={handlePhoneChange}
            />
          </div>
          <div>
            <label htmlFor="institution">School/institution:</label>
            <input
              type="text"
              id="institution"
              value={institution}
              onChange={handleInstitutionChange}
            />
          </div>
          <div>
            <label htmlFor="classtype">Class/type:</label>
            <input
              type="text"
              id="type"
              value={classtype}
              onChange={handleTypeChange}
            />
          </div>
          <div>
            <label htmlFor="subjects">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subjects}
              onChange={handleSubjectChange}
            />
          </div>
          <div>
            <label htmlFor="location">location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div>
            <label htmlFor="salary">salary:</label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={handleSalaryChange}
            />
          </div>
          <div>
            <label htmlFor="extra">Extra Info:</label>
            <input
              type="text"
              id="extra"
              value={description}
              onChange={handleExtraChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupForm;