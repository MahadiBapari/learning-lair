import React, { useState } from 'react';
import axios from 'axios';
import LogoDark from '../../images/logoDark.png';
import styles from './SignUpFormStudent.module.css';

function SignUpFormTutor() {
    const [name, setName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState(null);
    const [certificates, setCertificates] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phonenumber', phonenumber);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('picture', picture);

        certificates.forEach((certificate, index) => {
            formData.append(`certificates[${index}]`, certificate);
        });

        console.log(formData)
        axios
            .post('http://localhost:4000/api/tutorregister', formData)
            .then((response) => {
                console.log('Registration successful!', response.data);
            })
            .catch((error) => {
                console.error('Registration failed:', error);
            });
    };

    const handlePictureUpload = (event) => {
        const file = event.target.files[0];
        setPicture(file);
    };

    const handleCertificateUpload = (event) => {
        const files = Array.from(event.target.files).slice(0, 8);
        setCertificates(files);
    };

    return (
        <div className={styles.signUpFormStudent}>
            <div className={styles.signUp_box}>
                <img src={LogoDark} alt="Logo" />
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder="Full Name"
                            name='name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Phone Number"
                            name='phonenumber'
                            type="text"
                            value={phonenumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Email"
                            name='email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Upload Your Picture"
                            type="file"
                            name='picture'
                            accept="image/*"
                            onChange={handlePictureUpload}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Upload Your Certificates along with NID"
                            type="file"
                            name='certificates'
                            accept="image/*"
                            multiple
                            onChange={handleCertificateUpload}
                        />
                    </div>
                    <button className={styles.btn} type="submit">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpFormTutor;