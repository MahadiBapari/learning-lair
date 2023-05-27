import React, { useState } from 'react';
import PopupForm from './PopupForm.js';

function AddTuition() {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
    };
  return (
    <div>
        <h1>Welcome</h1>
        <p>You can add tuition here</p>
        <div>
            <button onClick={toggleFormVisibility}>Add Tuition</button>

            {isFormVisible && <PopupForm onClose={toggleFormVisibility} />}
        </div>
    </div>
    

  )
}

export default AddTuition
