import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner'
import { selectUser } from '../features/UserSlice'
import "./HommeSecreen.css"
import Login from './Login'
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'

function HommeSecreen() {

  return (
    <div className='homme'>

<Nav/>

<Banner/>
<Row title="NETEFLIX ORIGINALS"
fetchUrl={requests.fetchNetflixOriginals}
isLargeRow
/>


<Row title="Tranding Nows"
fetchUrl={requests.fetchTrending}
/>
<Row title="Top Rated"
fetchUrl={requests.fetchTopRated}
/>
<Row title="Actions Movies"
fetchUrl={requests.fetchActionsMovies}
/>
<Row title="Comedy Movies"
fetchUrl={requests.fetchComedyMovies}
/>
<Row title="Horror Movies"
fetchUrl={requests.fetchHorrorMovies}
/>
<Row title="Romance Movies"
fetchUrl={requests.fetchRomanceMovies}
/>
<Row title="Documentaries"
fetchUrl={requests.fetchDocumentaries}
/>


    </div>
  )
}

export default HommeSecreen