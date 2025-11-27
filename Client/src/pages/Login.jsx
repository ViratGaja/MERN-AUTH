import React, { useState } from 'react'
import {assets} from '../assets/assets'
const Login = () => {
  const [state,setState]= useState('sign up')
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <img src={assets.logo} className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' alt="" />
      <div>
        <h2>{state==="sign up"?"Create account":"Login to your account!"}</h2>
        <p>{state==="sign up"?"Create your account":"Login to your account!"}</p>
      </div>
    </div>
  )
}

export default Login