import React from 'react'
import SignInForm from '../Components/SignInForm/SignInForm'

function SignInStudent() {

  const data ={
    name: "Student/Guardian"
  }  
  return (
    <div>
        <SignInForm {... data}/>
    </div>
  )
}

export default SignInStudent