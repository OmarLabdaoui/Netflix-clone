import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPlan } from './features/currentPlan';
import "./Nav.css"
function Nav() {
    const plan=useSelector(selectPlan)
    const [show,setShow]=useState(false)
    const scrollchangecolor=()=>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(()=>{
     window.addEventListener("scroll",scrollchangecolor)
     return ()=>window.removeEventListener("scroll",scrollchangecolor)
    },[])
  return (
    <div className={`Nav ${show && "nav-black"}`}>
        <div className="Nav-header">
        <Link to={`${plan?.role? "/":"/profile"}`}>  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
" className="nav_logo"/></Link>
    <Link to="/profile"><img  className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"/></Link>
        </div>


    </div>
  )
}

export default Nav