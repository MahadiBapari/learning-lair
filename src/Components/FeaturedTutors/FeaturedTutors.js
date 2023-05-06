import styles from './FeaturedTutors.module.css'
import tutor1 from '../../images/tutor1.jpg'
import tutor2 from '../../images/tutor2.jpg'
import tutor3 from '../../images/tutor3.jpg'

const FeaturedTutors = () => {
    return ( 
        <div className={styles.featuredTutors}>
            <p >Find the Right Tutor for You</p>
            <h2>Featured <span>Tutors</span></h2>

            <div className={styles.tutor_row}>
                    <div className={styles.tutor_box}>
                        <img src={tutor1} alt="t1" />
                        <h3>Rafid Niloy</h3>
                        <p>Physics,Biology</p>
                    </div>
                    <div className={styles.tutor_box}>
                        <img src={tutor2} alt="t2" />
                        <h3>Mahadi Hasan</h3>
                        <p>Maths, Chemistry</p>
                    </div>
                    <div className={styles.tutor_box}>
                        <img src={tutor3} alt="t3" />
                        <h3>Safrina Kamal</h3>
                        <p>Economics, English</p>
                    </div>
                    
            </div>

             <div className={styles.register}>
                <div>
                    <h3>Want to Become a Tutor in <span>Learning Lair</span> ?  </h3>
                    <p>Learning Lair collaborate professional and talented tutors from all over Dhaka! Join us right now!</p>
                </div>
                <button className={styles.btn}>REGISTER NOW</button>
             </div>

        </div>

     );
}
 
export default FeaturedTutors;