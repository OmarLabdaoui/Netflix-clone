import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './Request'
function Banner() {
    function trauck(streng,n){
    return streng?.length>n? streng.substr(0,n-0)+"...":streng
    }
const [movies,setMovies]=useState([])
    useEffect(()=>{
     async function fetchData(){
     const request= await axios.get(requests.fetchNetflixOriginals);
     setMovies(request.data.results[
       Math.floor(Math.random() *request.data.results.length-1)
     ])
     return request
     }
     fetchData()
    },[])
    console.log(movies)
  return (
    <header className="banner" style={{ backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center center"}}>

<div className="banner__contents">
    <h1 className="banner__title">{movies?.title||movies?.title||movies?.original_name}</h1>
    <div className="banner__button">
<button className="bannner__btn">Play</button>
<button className="bannner__btn">Add To List</button>
    </div>
    <h1 className="banner__desc">{trauck(movies?.overview,150)}

   
    
    
    
    
    </h1>
</div>
<div className="banner__vide"/>
        
    </header>
  )
}

export default Banner