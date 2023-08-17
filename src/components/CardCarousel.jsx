// src/components/CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css'; // Create this CSS file for styling

const CardCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true, // Set infinite scrolling
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Automatically scroll
    autoplaySpeed: 2000, // Duration between each scroll
    pauseOnHover: true, // Pause on hover
    cssEase: 'linear',
  };

  return (
    <div className="card-carousel gap-10 pt-10 pb-10" id="carousel">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col align-center justify-center items-center" id="carousel-card">
            {/* Render your card content here */}
            <img src={item.image} alt={`Card ${index + 1}`} />
            <h1 className="text-xl text-[#2F2F2F] mt-3">{item.title}</h1>
            <p className="text-[#2F2F2F] px-4 pb-4">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
