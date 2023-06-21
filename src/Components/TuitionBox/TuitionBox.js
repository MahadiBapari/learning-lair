import styles from './TuitionBox.module.css'

const TuitionBox = ({ tuitions }) => {
  return (
    <div className={styles.tuition_box}>
    
      <h3>{tuitions.classtype}</h3>
      <p><strong>Institution: </strong>{tuitions.institution}</p>
      <p><strong>Subject: </strong>{tuitions.subjects}</p>
      <p><strong>Location: </strong>{tuitions.location}</p>
      <p><strong>Salary: </strong>{tuitions.salary}</p>
      <p><strong>Description: </strong>{tuitions.description}</p>
      <p><strong>Tuition ID: </strong>{tuitions._id}</p>
      
    </div>
  )
}

export default TuitionBox