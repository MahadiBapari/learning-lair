import React from 'react'
import styles from './SignUpFormStudent.module.css'
import { useState } from 'react';
import LogoDark from '../../images/logoDark.png'
// import { useAppContext } from '../../Context/appContext';

// const [values, setValues] = useState()

// const initialState = {
//     username: '',
//     usernumber: '',
//     email: '',
//     password: '',
//     isMember: true,
//     showAlert: false,
// }

function SignUpFormStudent() {

    // const state = useAppContext()
    // console.log(state);

    const [username, setUsername] = useState('');
    const [usernumber, setUsernumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted!', { username, usernumber, email, password });

    };

    return (
        <div className={styles.signUpFormStudent}>
            <div className={styles.signUp_box}>

                <img src={LogoDark} alt='Logo' />
                <form onSubmit={handleSubmit}>

                    <div>
                        <input placeholder='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <input placeholder='User Number' type="text" value={usernumber} onChange={(e) => setUsernumber(e.target.value)} />
                    </div>
                    <div>
                        <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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

