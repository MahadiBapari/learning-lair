import React from 'react'
import Map from '../Map'
import styles from './ContactBox.module.css'

function ContactBox() {
  return (
    <div className={styles.contactBox}>
        <h2>Contact <span>US</span></h2>
        <div className={styles.map_box}>
            <Map/>
            <div className={styles.inside_box}>
                <div >
                    <h3>Address</h3>
                    <p>Bashundhara,Dhaka,Bangladesh</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>LearningLair@example.com</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p>01011223344</p>
                </div>
            </div>
        </div>
    

    </div>
  )
}

export default ContactBox