import React, { useEffect, useState } from 'react';
import TuitionBox from "../TuitionBox/TuitionBox"
import styles from "./TuitionDashboard.module.css"


const TuitionDashboard = () => {
    
        const [tuitions, setTuitions] = useState(null)
      
        useEffect(() => {
          const fetchTuitions = async () => {
            const response = await fetch('/api/tuitions')
            const json = await response.json()
      
            if (response.ok) {
              setTuitions(json)
            }
          }
      
          fetchTuitions()
        }, [])
      
        return (
          <div >
            <div className={styles.tuition_dashboard}>
              <h2>All Tuitions</h2>
              {tuitions && tuitions.map(tuition => (
                <TuitionBox tuitions={tuition} key={tuition._id} />
              ))}
            </div>
    
          </div>
        )
              
};


export default TuitionDashboard