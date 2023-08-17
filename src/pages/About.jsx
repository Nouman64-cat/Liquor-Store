import React from 'react';
import { Navbar, Footer } from '../components';
import wine_glasses from '../assets/wine_glasses.jpg';
import liquor_goat from '../assets/liquor_goat.png'
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <img
              src={liquor_goat}
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-semibold mb-4">About Us</h1>
            <p className="text-gray-600 mb-6">
              Welcome to 3 Thirsty Goat Liquors, your premier destination for quality spirits and beverages.
              We are passionate about providing you with the finest selection of drinks to suit every occasion.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts curates a diverse range of products, from exquisite wines to premium whiskeys,
              ensuring that your taste buds are delighted with every sip.
            </p>
            <p className="text-gray-600">
              With a commitment to exceptional customer service, we're here to help you explore new flavors and find
              the perfect drink for your gatherings, celebrations, or quiet moments of indulgence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
