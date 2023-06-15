import React from 'react'
import SignInForm from '../Components/SignInForm/SignInForm'

function SignInStudent() {

  const data ={
    name: "Student/Guardian",
    navLink: "/signupstudent"
  }  
  return (
    <div>
        <SignInForm {... data}/>
    </div>
  )
}

export default SignInStudent