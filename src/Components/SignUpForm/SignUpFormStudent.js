import React from 'react'
import styles from './SignUpFormStudent.module.css' 
import { useState } from 'react';
import LogoDark from '../../images/logoDark.png'

function SignUpFormStudent() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted!', { email, username, password });
      // ekhane backend chodaia further processing maraba
    };
  
    return (
        <div className={styles.signUpFormStudent}>
                <div className={styles.signUp_box}>

                        <img src={LogoDark} alt='Logo' />
                        <form onSubmit={handleSubmit}>
                            
                        <div>
                            <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input placeholder='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <input placeholder='Password' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        
                            <button className={styles.btn} type="submit">Sign up</button>
                        </form>
                   
                    
                </div>
                
        </div>

    ); 
}

export default SignUpFormStudent

