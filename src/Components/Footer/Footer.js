import styles from './Footer.module.css'
import Logo from '../../images/LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';

const Footer = () => {
    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    return ( 

        <footer>
                    <div className={styles.footer}>
            <div className={styles.footer_row}>

                <div className={styles.footer_box}>
                    <div className={styles.logo}>
                        <img src={Logo} alt='Logo' />
                        <h1>
                            Learning Lair
                        </h1>
                    </div>
                    <p>
                    Learning Lair provides expert guidance and support for students in a variety of subjects, including math, science, language arts, music, exam preparation, assignments etc. Our experienced tutors work one-on-one with students to develop personalized learning plans that address their unique needs and learning styles.
                    </p>
                </div>
                <div className={styles.footer_box}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link className={styles.link} to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link  className={styles.link} to="/contact">Contact Us</Link>
                        </li>
                        
                        <li>Become a Tutor</li>
                    </ul>
                </div>
                <div className={styles.footer_box}>

                    <h3>Our Contact</h3>
                    <div className={styles.contact_info}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Bashundhara,Dhaka,Bangladesh</p>
                    </div>
                    <div className={styles.contact_info}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>LearningLair@example.com</p>
                    </div>
                    <div className={styles.contact_info}>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>01011223344</p>
                    </div>
                    
                </div>

                                     
            </div>
            <div className={styles.line}></div> 
        </div>
        </footer>

        
     );
}
 
export default Footer;