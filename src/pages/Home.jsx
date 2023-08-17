import React from 'react'
import { AnimatedText, CardCarousel, Company, Description, Footer, Navbar, Store } from '../components'
import { FaBeer } from 'react-icons/fa';
import { Hero } from '../components'
import fireball from '../assets/fireball.jpeg'
import vodka from '../assets/vodka.jpeg'
import smirnoff from '../assets/smirnoff.jpeg'
import jack from '../assets/jack.jpeg'
import taaka from '../assets/taaka.jpeg'

const cardData = [
  { title: 'Chinese Fireball', description: 'An intriguing cocktail that combines distinct flavors to create a memorable drinking experience', image: fireball, },
  { title: 'Smirnoff', description: 'A well-known brand of vodka recognized for its purity and versatility', image: vodka, },
  { title: 'Smirnoff Vodka', description: 'A classic and widely enjoyed spirit that serves as a base for various cocktails', image: smirnoff, },
  { title: 'Jack Daniels', description: 'A popular American whiskey known for its smooth and distinctive flavor', image: jack, },
  { title: 'Taaka', description: 'A brand of vodka offering an affordable option for those seeking a straightforward and accessible spirit', image: taaka },

  // Add more card data as needed
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='w-full flex justify-center items-center gap-3'>
        <FaBeer className="text-4xl  champagne-gradient" />
        <AnimatedText/>
      </div>
      <Description />
      <CardCarousel items={cardData} />
      {/* <Company /> */}
      <Store />
      <Footer />
    </>
  )
}

export default Home