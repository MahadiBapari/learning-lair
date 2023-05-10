import styles from './SignInLandingPage.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

const SignInLandingPage = () => {
  return (

    <div className={styles.signInLandingPage}>
        <div className={styles.mainBox}>

                <Link className={styles.link} to="/signintutor">
                <div className={styles.box}>
                    <h2>Tutors</h2>
                    <p>Im looking for tuition</p>
                </div>
                </Link>
                <Link className={styles.link} to="/signinstudent">
                <div className={styles.box}>
                    <h2>Guardian/Student</h2>
                    <p>Im looking for expert tutors</p>
                </div>
                </Link>
                
                
        </div>
    </div>
    
  )
}

export default SignInLandingPage