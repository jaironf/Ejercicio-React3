import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='img-container'>
        <img src='../../src/assets/Logo.png' alt="Logo" className='img'/>
        <button class="button">
            <span><Link to="/reserve">Reserve</Link></span>
        </button>
    </div>
  )
}

export default Home