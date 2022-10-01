import React from 'react'
import Nav from '../Nav.js'
import './HomeScreen.css'
import Banner from '../Banner.js'
import requests from '../Requests'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Header */}
        <Nav />
        {/* Banner */}
        <Banner />
        



        {/* Rows */}
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  )
}

export default HomeScreen