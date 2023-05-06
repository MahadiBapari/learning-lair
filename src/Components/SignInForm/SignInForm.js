import styles from './SignInForm.module.css'
import React, { useState } from 'react';
import LogoDark from '../../images/logoDark.png'

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className={styles.signInForm}>
        <div className={styles.signIn_box}>

                <img src={LogoDark} alt='Logo' />
            
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
                    
                
                
                <button className={styles.btn} type="submit">Sign In</button>
                </form>
                
                <p>Dont have an account?</p>
                <button className={styles.btn2}>Sign Up</button>


        </div>
        
    </div>
    
  );
}

export default SignInForm;