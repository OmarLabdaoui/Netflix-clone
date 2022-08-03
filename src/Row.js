import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"
function Row({title,fetchUrl,isLargeRow=false}) {
  const [movies,setMovies]=useState([])
  const base_Url="https://image.tmdb.org/t/p/original/"
  useEffect(()=>{
   async function fetchdata(){
       const request=await axios.get(fetchUrl);
       setMovies(request.data.results)
       return request
   }
   fetchdata()
  },[fetchUrl])
  console.log(movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
        {movies.map(movie=>(
            <img className={`row_poster ${isLargeRow && "row_pasterlarge"}`} key={movie.id} src={`${base_Url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
        ))}
        </div>
    </div>
  )
}

export default Row