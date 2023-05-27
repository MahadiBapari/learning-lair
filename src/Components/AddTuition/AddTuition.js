import React, { useState } from 'react';
import PopupForm from './PopupForm';
import axios from 'axios';
import styles from './AddTuition.module.css'

const AddTuition = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormSubmit = (postData) => {
    axios.post('/api/posts', postData)
      .then(response => {
        // Add the created post to the existing posts array
        setPosts([...posts, response.data]);
        // Close the form
        toggleFormVisibility();
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className={styles.addTuition}>

      <h1>Welcome</h1>
      <p>You can add tuition here</p>
      <button onClick={toggleFormVisibility}>Add Tuition</button>

      {isFormVisible && <PopupForm onClose={toggleFormVisibility} onSubmit={handleFormSubmit} />}

      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.location}</h2>
          <p>{post.phone}</p>
          <p>{post.institution}</p>
          <p>{post.type}</p>
          <p>{post.subject}</p>
          <p>{post.salary}</p>
          <p>{post.extra}</p>
        </div>
      ))}
    </div>
  );
};

export default AddTuition;