import React from 'react';
import styles from './SignUpFormStudent.module.css';
import { useState } from 'react';
import axios from 'axios';
import LogoDark from '../../images/logoDark.png';

function SignUpFormTutor() {
    const [name, setUsername] = useState('');
    const [phonenumber, setUsernumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState('');
    const [certificates, setCertificates] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name,
            phonenumber,
            email,
            password,
            picture,
            certificates,
        };

        console.log(formData);

        axios
            .post('http://localhost:4000/api/tutorRegister', formData)
            .then((response) => {
                console.log('Registration successful!', response.data);
            })
            .catch((error) => {
                console.error('Registration failed:', error);
            });
    };

    const handlePictureUpload = (event) => {
        setPicture(event.target.files[0]);
    };

    const handleCertificateUpload = (event) => {
        const files = Array.from(event.target.files).slice(0, 8); // Limit to a maximum of 8 files
        setCertificates(files);
    };

    return (
        <div className={styles.signUpFormStudent}>
            <div className={styles.signUp_box}>
                <img src={LogoDark} alt='Logo' />
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder='Full Name'
                            type='text'
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Phone Number'
                            type='text'
                            value={phonenumber}
                            onChange={(e) => setUsernumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Password'
                            type='text'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Upload Your Picture'
                            type='file'
                            accept='image/*'
                            onChange={handlePictureUpload}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Upload Your Certificates along with NID'
                            type='file'
                            accept='image/*'
                            multiple
                            onChange={handleCertificateUpload}
                        />
                    </div>
                    <button className={styles.btn} type='submit'>
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpFormTutor;