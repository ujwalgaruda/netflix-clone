






import './LoginScreen.css'

import React from 'react'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen-navbar'>
            <img className='loginScreen-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            <div className='loginScreen-buttonsContainer'>
            <button className='loginScreen-langButton'>English</button>
            <button className='loginScreen-button'>Sign In</button>
            </div>
            
            
        </div>
        <div className='loginScreen-gradient' />
        
    </div>
  )
}

export default LoginScreen




/* .loginScreen{
    height: 100vh;
    background-image: url("https://img.wallpapersafari.com/desktop/1680/1050/24/74/zgeTuV.jpg"), linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100% );
    background-size: cover;
}

.loginScreen-gradient {
    width: 100%;
    z-index: 1;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4) ;
}

.loginScreen-navbar{
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
}

.loginScreen-logo{
    width: 150px;
    object-fit: contain;
}

.loginScreen-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    margin-right: 20px;
    margin-left: 20px;
} */