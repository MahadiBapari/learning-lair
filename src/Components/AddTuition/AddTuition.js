import React, { useEffect, useState } from 'react';
import PopupForm from './PopupForm';
import styles from './AddTuition.module.css';
import TuitionBoxbyID from '../TuitionBox/TuitionBoxbyID';
import { useTuitionsContext } from '../../Hooks/useTuitionsContext';

const AddTuition = () => {
  const { tuitions, dispatch } = useTuitionsContext();
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchTuitions = async () => {
      const response = await fetch('/api/tuitions');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TUITIONS', payload: json });
      }
    };

    fetchTuitions();
  }, [dispatch]);

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
      dispatch({ type: 'CREATE_TUITIONS', payload: json });
      toggleFormVisibility();
    } else {
      console.error(json.error);
    }
  };

  return (
    <div className={styles.addTuition}>
      <h1>Welcome</h1>
      <p>You can add tuition here</p>
      <button onClick={toggleFormVisibility} className={styles.add_button}>Add Tuition</button>

      {isFormVisible && <PopupForm onClose={toggleFormVisibility} onSubmit={handleFormSubmit} />}

      <div>
        <h2>Tuitions</h2>
        {tuitions &&
          tuitions.map((tuition) => (
            <TuitionBoxbyID tuition={tuition} key={tuition._id} />
          ))}
      </div>
    </div>
  );
};

export default AddTuition;