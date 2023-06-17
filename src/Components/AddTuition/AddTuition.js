import React, { useEffect , useState } from 'react';
import PopupForm from './PopupForm';
import axios from 'axios';
import styles from './AddTuition.module.css'
import TuitionBox from '../TuitionBox/TuitionBox';

const AddTuition = () => {

  const [tuitions, setTuitions] = useState(null)

  useEffect(() => {
    const fetchTuitions = async () =>{
      const response = await fetch('/api/tuitions')
      const json = await response.json()

      if (response.ok){
        setTuitions(json)
    } 
    
    }
    fetchTuitions()
  }, [])

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
    console.log(postData)
  };

  return (
    <div className={styles.addTuition}>

      <h1>Welcome</h1>
      <p>You can add tuition here</p>
      <button onClick={toggleFormVisibility}>Add Tuition</button>

      {isFormVisible && <PopupForm onClose={toggleFormVisibility} onSubmit={handleFormSubmit} />}

      {posts.map((post, index) => (
        <div key={index} className="post">
          <p>{post.phonenumber}</p>
          <p>{post.institution}</p>
          <p>{post.classtype}</p>
          <p>{post.subjects}</p>
          <h2>{post.location}</h2>
          <p>{post.salary}</p>
          <p>{post.description}</p>
        </div>
      ))}

      <div>
        <h2>Tuitions</h2>
        {tuitions && tuitions.map((tuition) => (
          <TuitionBox tuition={tuition} key={tuition._id} />
        ))}
      </div>
    </div>
  );
};

export default AddTuition;