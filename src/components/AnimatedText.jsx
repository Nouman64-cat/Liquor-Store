import React from 'react'
import './text.css'
const AnimatedText = () => {
  return (
    <div className='wrapper'>
      <div className='static-text'>
        We have
      </div>
      <ul className="dynamic-text">
        
        <li><span>Wine</span></li>
        <li><span>Beer</span></li>
        <li><span>Fireball</span></li>
        <li><span>Vodka</span></li>
        <li><span>Rum</span></li>
        
        <li><span>Gin</span></li>
      </ul>
    </div>
  )
}

export default AnimatedText