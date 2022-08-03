import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/UserSlice'
import { auth, db } from '../firebase'
import Nav from '../Nav'
import Plans from './Plans'
import { planinitial, selectPlan } from '../features/currentPlan'
import "./Profile.css"
function Profile() {
    const dispatch=useDispatch()
    const user =useSelector(selectUser)
 const plan =useSelector(selectPlan)
    useEffect(()=>{
        db.collection("customers").doc(user.uid).collection("subscriptions").get()
        .then((querySnapchot)=>{
             querySnapchot.forEach(async(snap)=>{
                 dispatch(planinitial({
                    role:snap.data().role,
                 }))
                   
                 
             })
         })
          },[])
  return (
    <div className='profile'>
        <Nav/>
        <div className='Profile__body'>
        <h1>Edit Profile</h1>
            <div className='profile__infos'>
           <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'/>
            
            <div  className='profile__datails'>
             
   <h2>{user?.email}</h2>
           
            <div className='profile__button'>
                <h3>Plans ( Current {plan?.role})</h3>
                
               <Plans/>
            <button onClick={()=>auth.signOut()} className="btnn">Sign Out</button>
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Profile