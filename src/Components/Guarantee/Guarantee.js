import styles from './Guarantee.module.css'

const Guarantee = () => {
    return ( 
        <div className={styles.guarantee}>
                <p >All tutors are Guaranteed by Us</p>
                <h2>100% <span>Guaranteed</span> </h2>

                <div className={styles.info_row}>
                    <div className={styles.info_box}>
                        <h3>Professional Tutor</h3>
                        <p>
                        Learning Lair provides expert guidance and support for students in a variety of subjects, including math, science, language arts, music, exam preparation, assignments etc. Our experienced tutors work one-on-one with students to develop personalized learning plans that address their unique needs and learning styles.
                        </p>
                    </div>
                    <div className={styles.info_box}>
                        <h3>Real Results only</h3>
                        <p>
                        Learning Lair provides expert guidance and support for students in a variety of subjects, including math, science, language arts, music, exam preparation, assignments etc. Our experienced tutors work one-on-one with students to develop personalized learning plans that address their unique needs and learning styles.
                        </p>
                    </div>
                    <div className={styles.info_box}>
                        <h3>Certified</h3>
                        <p>
                        Learning Lair provides expert guidance and support for students in a variety of subjects, including math, science, language arts, music, exam preparation, assignments etc. Our experienced tutors work one-on-one with students to develop personalized learning plans that address their unique needs and learning styles.
                        </p>
                    </div>
                    
                </div>    
        </div>
     );
}
 
export default Guarantee;