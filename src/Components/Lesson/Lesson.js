import styles from './Lesson.module.css'

const Lesson = () => {
    return ( 
        <div className={styles.lesson}>
            <h2>Multi-categorical <span>Lessons</span></h2>
            <div className={styles.info_box}>
                <div className={styles.inside_info_box}>
                    <h3>Find the <span>Best Tutor</span> for <span>multiple categorical</span> lessons</h3>
                    <ul>
                        <li>Tutoring</li>
                        <li>Online Tutoring</li>
                        <li>Project planning</li>
                        <li>Assignment Help</li>
                        <li>Topic based Session</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Lesson;