import React from 'react'
import thirsty from '../assets/thirsty.png'
import { Link } from 'react-router-dom'	
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
const Footer = () => {
  const handleClick =() =>{
    const phoneNumber = '+1 719-264-7930'; // Replace with your desired phone number
    window.location.href = `tel:${phoneNumber}`;
  }
  return (
    <>
    <div className='flex mt-[18rem] full h-[20rem] bg-[#08AEF2]'>
      <div className="flex flex-col items-center align-center justify-center w-[20rem] bg-[#2F2F2F] relative mt-[-13rem] mb-10 ml-10 px-10 py-2">
      <img src={thirsty} alt="" className='w-[15rem] h-[15rem] p-0 m-0'/>
      <h2 className="text-white text-justify">Next to Walmart store shopping Located in: Austin Bluffs Plaza Address: 4150 Austin Bluffs Pkwy, Colorado Springs, CO 80918</h2>
      </div>
      <div className="flex justify-around gap-[7rem] ml-[5rem] mt-[4rem]">
        <div className="flex flex-col text-white">
          <h2 className="text-2xl mb-4">Visit</h2>
          <div className="flex flex-col gap-3" >
            <Link to="/">
          <h2  className='hover:opacity-80'>&#8250; Home</h2>
          </Link>
          <Link to="/about">
          <h2 className='hover:opacity-80'>&#8250; About us</h2>
          </Link>
          <Link to="/all-items">
          <h2 className='hover:opacity-80'>&#8250; Reservation</h2>
          </Link>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <h2 className="text-2xl mb-4">Social</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 hover:opacity:80 hover:cursor-pointer">
          <FaFacebook className='text-2xl cursor-pointer hover:opacity-80'/>
          <h2>https://www.facebook.com</h2>
          </div>
           <div className="flex items-center gap-3 hover:opacity:80 hover:cursor-pointer">
          <FaInstagram className='text-2xl cursor-pointer hover:opacity-80'/>
          <h2>https://www.instagram.com</h2>
          </div>
           <div onClick={handleClick} className="flex items-center gap-3 hover:opacity:80 hover:cursor-pointer">
          <BsFillTelephoneFill className='text-2xl cursor-pointer hover:opacity-80'/>
          <h2>122352436</h2>
          </div>
          </div>
        </div>
         <div className="flex flex-col text-white">
          <h2 className="text-2xl mb-3">Contact</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 hover:opacity:80 hover:cursor-pointer">
          <CgMail className='text-3xl cursor-pointer hover:opacity-80'/>
          <h2>example@gmail.com</h2>
          </div>
          <div onClick={handleClick} className="flex items-center gap-3 hover:opacity:80 hover:cursor-pointer">
          <BsFillTelephoneFill className='text-2xl cursor-pointer hover:opacity-80'/>
          <h2>12413253262</h2>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    <h2 className='text-[0.8rem] text-white relative mt-[-2rem] ml-[36rem]'>Copyrights &#169; 3 Thirsty Goat Liquors </h2>
    </>
  )
}

export default Footer