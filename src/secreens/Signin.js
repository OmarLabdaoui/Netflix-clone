import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../features/UserSlice';
import { auth } from '../firebase'
import "./Signin.css"
function Signin() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const dispatch=useDispatch()
    const registerr=(e)=>{
      e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((user)=>{
            dispatch(login({
              uid:user.user.uid,
              email:user.user.email,
            }))
        })
        .catch((error)=>{
          alert(error.message)})
    }
    const logiin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((user)=>{
          dispatch(login({
            email:user.user.email,
          }))
        })
        .catch((error)=>{
          alert(error.message)
        })
    }
  return (
    <div className='Signsin'>
<form>
    <h1 >Sign In</h1>
    <input type="email" placeholder="Email Adresse"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit' onClick={logiin}>Sign In</button>
   <h4>  <span className='span'>New To Netflix ?</span> <span className='span1' onClick={registerr}> Sign Up Now.</span></h4>
</form>

    </div>
  )
}

export default Signin