import styles from './Hero.module.css'

const Hero = () => {
    return ( 

        <div className={styles.hero}>
            <h2>Elevate Your Education with One-on-One Tutoring</h2>
            <div>
                <button className={styles.btn}>Hire a Tutor</button>
                <button className={styles.btn}>Become a Tutor</button>
            </div>
        </div>

     );
}
 
export default Hero;