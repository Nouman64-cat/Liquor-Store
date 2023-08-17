import React from 'react'
import { Link } from 'react-router-dom'
import liquor_goat from '../assets/liquor_goat.png'
const Navbar = () => {
  return (
    <div className='p-3 flex justify-between align-center items-center w-full bg-[#08AEF2] text-white'>
     <img src={liquor_goat} alt="liquor_goat" className="w-[7rem]" />
      <div className='flex justify-around gap-4'>
        <Link to='/'>
        <h1 className='cursor-pointer hover:opacity-60 '>Home</h1>
        </Link>
        <Link to='/about'>
          <h1 className='cursor-pointer hover:opacity-60'>About</h1>
        </Link>
        <a href ="#carousel">
          <h1 className='cursor-pointer hover:opacity-60'>Products</h1>
        </a>
      </div>
      <div className='flex justify-around'>
        <Link to = "/all-items">
          <button className='border-2 border-white px-4 rounded-full py-2 hover:bg-white hover:text-[#08AEF2] transition duration-300 ease-in-out'>
            <h1>Search All items</h1>
            
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar