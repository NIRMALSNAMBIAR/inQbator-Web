import './SlidingCompany.css';
import React, { useState, useEffect } from 'react';

const SlidingCompany = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './assets/google.png',
    './assets/microsoft.png',
    './assets/IIT Bombay.png',
    './assets/goldmanSachs.png',
    './assets/harvard.png',
    './assets/IIMB.png',
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className='slide__main'>
      <h1>Our Top Mentors Come From</h1>
      <div className="slide__company">
        {/* {images.map((image) => (
        <div key={image}>
          <img src={image}/>
        </div>
      ))} */}
        <div className="slider-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slider-image ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlidingCompany
