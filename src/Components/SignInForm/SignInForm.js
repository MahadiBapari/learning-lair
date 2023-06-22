import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logoDark.png';
import styles from './SignInForm.module.css';
import { useLogin } from '../../Hooks/useLogin';

const SignInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password)
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button className={styles.btn} type="submit">Sign In</button>
          <Link to="/tuition">
          {/* <button className={styles.btn}>Sign In</button> */}
          </Link>

        </form>
        <p>Don't have an account?</p>
        <Link to={props.navLink} className={styles.btn2}>Register Now</Link>
      </div>
    </div>
  );
};

export default SignInForm;