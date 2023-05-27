import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import LogoDark from '../../images/logoDark.png';
import styles from './SignInForm.module.css';
import axios from 'axios';

const SignInForm = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login API call
    axios.post('/api/login', { email, password })
      .then(response => {
        
        history.push('/tuition');
      })
      .catch(error => {
        // Handle login error
        setError('Invalid email or password');
        console.error(error);
      });
  };

  return (
    <div className={styles.signInForm}>
      <div className={styles.signIn_box}>
        <img src={LogoDark} alt='Logo' />
        <h2>{props.name}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder='Email'
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button className={styles.btn} type="submit">Sign In</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/signupstudent" className={styles.btn2}>Register Now</Link>
      </div>
    </div>
  );
};

export default SignInForm;