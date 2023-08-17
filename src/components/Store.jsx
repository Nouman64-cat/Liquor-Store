import React from 'react'
import MapComponent from './MapComponent'
import clock_logo from '../assets/clock_logo.png'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FcClock } from 'react-icons/fc';
const Store = () => {
  const handleReserve = () => {
    const phoneNumber = '+1 719-264-7930'; // Replace with your desired phone number
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="flex justify-center mt-10 mb-10 "  >
      <div className="flex justify-around items-center w-[60rem] p-10 shadow-2xl drop-shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out">
        <div className="flex flex-col shadow-2xl p-5">
          <MapComponent />
          <p className="w-[25.5rem] mt-4">Next to Walmart store shopping
            Located in: Austin Bluffs Plaza
            Address: 4150 Austin Bluffs Pkwy, Colorado Springs, CO 80918</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 ">
            <h1 className="text-3xl ">Store Hours</h1>
            <FcClock size={40}/>
          </div>
            <p >Wednesday, 10 AM–9 PM</p>
            <p >Thursday, 10 AM–9 PM</p>
            <p >Friday, 10 AM–10 PM</p>
            <p >Saturday, 10 AM–10 PM</p>
            <p >Sunday, 10 AM–8 PM</p>
            <p >Monday, 10 AM–9 PM</p>
            <p className='mb-10'>Tuesday, 10 AM–9 PM</p>
          <button onClick={handleReserve} className='shadow-2xl bg-[#08AEF2] border-2 border-[#08AEF2] mt-[6rem] px-3 py-2 text-white rounded-full hover:bg-white hover:border-2 hover:border-[#08AEF2] hover:text-[#2F2F2F] transition duration-300 ease-in-out hover:drop-shadow-2xl'>
            <div className="flex justify-center items-center gap-4">
            <BsFillTelephoneFill size={20} />
            <h1 >Reserve a drink</h1>
            </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Store