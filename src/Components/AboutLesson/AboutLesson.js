import styles from './AboutLesson.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'


function AboutLesson() {
  return (
    <div className={styles.aboutLesson}>
                
                
    <h2>Multi-Categorical <span>Lesson</span> </h2>
    <div className={styles.info_row}>
        
        <div className={styles.info_box2}>

            <div className={styles.list}>
                
                    <ul>
                        <li><FontAwesomeIcon icon={faChair} /></li>
                        <li><FontAwesomeIcon icon={faDesktop} /></li>
                        <li><FontAwesomeIcon icon={faFile} /></li>
                        <li><FontAwesomeIcon icon={faFileLines} /></li>
                        <li><FontAwesomeIcon icon={faBookOpen} /></li>
                    </ul>
            
                    <ul>
                        <li>Tutoring</li>
                        <li>Online Tutoring</li>
                        <li>Project Planning</li>
                        <li>Assignment Help</li>
                        <li>Topic Based</li>
                        
                    </ul>
                
                    
            </div>
           
        </div>
        <div className={styles.info_box1}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit 
            amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit.
            </p>
        </div>
        
    </div>    
</div>
  )
}

export default AboutLesson