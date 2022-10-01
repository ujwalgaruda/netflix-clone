import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom" //Navigate is used in v6 of react router dom in place of History
import './Nav.css'

function Nav(props) {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate() //Access the Navigate function 
  
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  const onProfileClick = () => {
    navigate("/profile") //Similar to history.push, its written in this format
  }

  
  const onHomeClick = () => {
    navigate("/") //Similar to history.push, its written in this format
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar) 
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
          <img onClick = {onHomeClick} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" className='nav_logo' />
          <div className='nav-menu-bar'>
            <h1 className='home-menu'>Home</h1>
            <h1 className='shows-menu'>TV Shows</h1>
            <h1 className='shows-menu'>Movies</h1>
            <h1 className='shows-menu'>Recently Added</h1>
            <h1 className='shows-menu'>My List</h1>
          </div>
        
          <img onClick = {onProfileClick} src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='nav_avatar' alt='avatar'/>
        </div>
    </div>
  )
}

export default Nav