import styles from './TuitionBox.module.css'
import { useTuitionsContext } from '../../Hooks/useTuitionsContext'
import { useAuthContext } from '../../Hooks/useAuthContext'

const TuitionBoxbyID = ({ tuition }) => {

    const {dispatch} = useTuitionsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {

      if (!user) {
        return
      }

        const response = await fetch('/api/tuitions/' + tuition._id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
      
        const json = await response.json() 

        if (response.ok) {
          dispatch({ type: 'DELETE_TUITION', payload: json });
        }
      };

    return (
      <div className = {styles.tuition_box}>
        <h3>{tuition.classtype}</h3>
        <p><strong>Institution: </strong>{tuition.institution}</p>
        <p><strong>Subject: </strong>{tuition.subjects}</p>
        <p><strong>Location: </strong>{tuition.location}</p>
        <p><strong>Salary: </strong>{tuition.salary}</p>
        <p><strong>Description: </strong>{tuition.description}</p>
        <button onClick={handleClick} className={styles.d_button}>Delete</button>

      </div>
    )
  }
  
  export default TuitionBoxbyID;