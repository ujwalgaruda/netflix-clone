import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Requests'
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
      );
    }
    fetchData();
  }, [])

  console.log(movie)

    const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + "..." : string 
    }

      return (
       
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        
        
    }}>
       <div className='banner--fadebottom'/>
      <div className='banner_contents'>
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner_buttons_container'>
          <button className='banner_buttons'>
            <BsFillPlayFill className="button-icons" fill="currentColor" size="25" />
            Play
          </button>
          <button className='banner_buttons'>
            <AiOutlinePlus className="button-icons" fil="white" size="25" />
            My List</button>
        </div>
        <h1 className='banner_description'>
        {truncate(movie?.overview,150)}
        </h1>
      </div>
      
    </header>
  
  )
  }

  export default Banner
