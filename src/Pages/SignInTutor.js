import React from 'react'
import SignInForm from '../Components/SignInForm/SignInForm'

function SignInTutor() {
    const data ={
        name: "Tutor"
      }  
      return (
        <div>
            <SignInForm {... data}/>
        </div>
      )
}

export default SignInTutor