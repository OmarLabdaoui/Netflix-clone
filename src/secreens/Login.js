
import React, { useState } from 'react'
import "./Login.css"
import Signin from './Signin'
function Login() {
  const [signin,setSignin]=useState(false)
  const signinn=()=>{
    setSignin(true)
  }
  return (
    <div className='login'>
      <div className='login__background'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'/>
        <button className='login__button' onClick={()=>signinn()}>Sign In</button>
        <div className='login__grad'/>
      </div>
      
      
      <div className='login__body'>
      {signin? <Signin/> :
      <>
      <h1>Unlimited films,Tv Programmes and More</h1>
      <h2>Watch any Where,Cancel Any Time</h2>
      <h3>Ready to watch ? Enter Your Email to create or restart tour membership</h3>
      <div className='login__input'>
   <form>
   <input type="email"  placeholder='Email Address'/>
   <button className='login__emailbutton'  onClick={()=>signinn()}>Get Started</button>
   </form>
 </div>
 </>
}
    </div>
      
      
     
 
    </div>
  )
}

export default Login