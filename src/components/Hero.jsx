import React from 'react'
import { Link } from 'react-router-dom'
import { Company } from '../components'
import  { FaFacebook } from 'react-icons/fa'
// import './hero.css'
const Hero = () => {
  return (
    <div class="w-full flex justify-center items-center " id='hero-container'>
      {/* <img src={wine_glasses} alt="" className='w-full h-full object-cover' />
       */}
       <div className="flex flex-col mx-auto">
          <h1 className='text-4xl mb-5 text-[#2F2F2F]'>3 Thirsty Goat Liquors</h1>
          <p className="w-[30rem] mb-7 text-[#454545]">Indulge in the rich and captivating essence of Three Thirsty Goat Liquors, where each sip encapsulates the artistry of craftsmanship and the thrill of uncharted flavors.</p>
          <div className="flex gap-3">
            <Link to = "/all-items">
            <button className='border-2 border-[#2F2F2F] bg-[#2F2F2F] text-white px-4 rounded-full py-2 hover:bg-white hover:text-[#2F2F2F] transition duration-300 ease-in-out'>
              <h1>See All items</h1>
              
            </button>
          </Link>
          <a href = "https://www.facebook.com" target="_blank">
            <button className='border-2 border-black px-4 rounded-full py-2 hover:bg-[#2F2F2F] hover:border-[#2F2F2F] hover:text-white transition duration-300 ease-in-out'>
              <div className="flex items-center gap-2  ">
                <h1>Facebook</h1>
                <FaFacebook style={{color: '#08AEF2'}}/>
              </div>
              
            </button>
          </a>
        </div>
       </div>
       <div className="mr-[5rem]">
        <Company />
       </div>
    </div>
  )
}

export default Hero