import styles from './Information.module.css'
import { Link } from 'react-router-dom';

const Information = () => {
    return ( 
        <div className={styles.information}>
                
                <p >We provide the best tutoring service</p>
                <h2>Useful <span>Information</span> </h2>
                <div className={styles.info_row}>
                    <div className={styles.info_box1}>
                        <h3>Who are we</h3>
                        <p>
                        Learning Lair provides expert guidance and support for students in a variety of subjects, including math, science, language arts, music, exam preparation, assignments etc. Our experienced tutors work one-on-one with students to develop personalized learning plans that address their unique needs and learning styles.
                        </p>
                    </div>
                    <div className={styles.info_box2}>
                        <h3>Focused Curriculum</h3>
                        <p>and others</p>
                        <div className={styles.list}>
                            
                                <ul>
                                    <li>Curriculum</li>
                                    <li>English Medium</li>
                                    <li>Bangla Medium</li>
                                    <li>English Version</li>
                                    <li>Arabic Medium</li>
                                </ul>
                        
                                <ul>
                                    <li>Others</li>
                                    <li>University</li>
                                    <li>Music</li>
                                    <li>Instrument</li>
                                    <li>Exam Preparation</li>
                                    
                                </ul>
                            
                                
                        </div>
                       
                    </div>
                    <div className={styles.read}>
                    {/* <Link to="">Read more</Link> */}
                    <p>Read more</p>
                    </div>
                </div>    
        </div>
     );
}
 
export default Information;