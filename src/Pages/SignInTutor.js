import React from 'react'
import SignInForm from '../Components/SignInForm/SignInForm'

function SignInTutor() {
    const data ={
        name: "Tutor",
        navLink : "/signuptutor" 
      }  
      return (
        <div>
            <SignInForm {... data}/>
        </div>
      )
}

export default SignInTutor