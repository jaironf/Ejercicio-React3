import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <span><img src="../../src/assets/logo.png" alt="logo" className='logo'/></span>
        <nav className='link'>
        <span><Link to="/">Home</Link> </span>
        <span><Link to="/reserve">Reserve</Link> </span>
        <span><Link to="/menu">Menu</Link> </span>
        </nav>
    </div>
  )
}

export default Header