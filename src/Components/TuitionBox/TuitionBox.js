import styles from './TuitionBox.module.css'

const TuitionBox = ({ tuition }) => {

    return (
      <div className = {styles.tuition_box}>
        <h3>{tuition.classtype}</h3>
        <p><strong>Institution: </strong>{tuition.institution}</p>
        <p><strong>Subject: </strong>{tuition.subjects}</p>
        <p><strong>Location: </strong>{tuition.location}</p>
        <p><strong>Salary: </strong>{tuition.salary}</p>
        <p><strong>Description: </strong>{tuition.description}</p>
        <p><strong>Tuition ID: </strong>{tuition._id}</p>
        <p>{tuition.createdAt}</p>

      </div>
    )
  }
  
  export default TuitionBox