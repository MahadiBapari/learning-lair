import styles from './QueryBox.module.css'

import React from 'react'

function QueryBox() {
  return (
    <div className={styles.queryBox}>
            <p >Send us a message</p>
            <h2>Get in <span>Touch</span></h2>

            <div className={styles.input_box}>
                <p>We would love to hear from you and answer any questions you may have! Send us a message and we will respond as soon as we can.</p>
            <div className={styles.contact_form}>
                <form
                    action=""
                    method="POST">

                    <div className={styles.input_insideBox}>
                        <input
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        autoComplete="off"
                        required
                        />

                        <input
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                        autoComplete="off"
                        required
                        />
                    </div>
                    
                    <textarea
                    placeholder="Your message"
                    cols="30"
                    rows="20"
                    autoComplete="off"
                    required></textarea>

                    <button type="submit" className={styles.btn}>SEND</button>
                    {/* <input type="submit" value="SEND" /> */}
                </form>
        </div>
            </div>        

        </div>
  )
}

export default QueryBox