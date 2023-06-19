import React, { useEffect, useState } from 'react';
import PopupForm from './PopupForm';
import styles from './AddTuition.module.css';
import TuitionBox from '../TuitionBox/TuitionBox';

const AddTuition = () => {
  const [tuitions, setTuitions] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchTuitions = async () => {
      const response = await fetch('/api/tuitions');
      const json = await response.json();

      if (response.ok) {
        setTuitions(json);
      }
    };

    fetchTuitions();
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormSubmit = async (tuitionData) => {
    const response = await fetch('/api/tuitions', {
      method: 'POST',
      body: JSON.stringify(tuitionData),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();

    if (response.ok) {
      setTuitions([...tuitions, json]);
      toggleFormVisibility();
    } else {
      console.error(json.error);
    }
  };

  return (
    <div className={styles.addTuition}>
      <h1>Welcome</h1>
      <p>You can add tuition here</p>
      <button onClick={toggleFormVisibility}>Add Tuition</button>

      {isFormVisible && <PopupForm onClose={toggleFormVisibility} onSubmit={handleFormSubmit}/>}

      <div>
        <h2>Tuitions</h2>
        {tuitions &&
          tuitions.map((tuition) => (
            <TuitionBox tuition={tuition} key={tuition._id} />
          ))}
      </div>
    </div>
  );
};

export default AddTuition;