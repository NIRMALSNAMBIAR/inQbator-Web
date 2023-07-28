import './Slider.css';
import React, { useRef, useState } from 'react';

const Slider = () => {

  const images = [
    '',
    './assets/microsoft.png',
    './assets/IIT Bombay.png',
    './assets/goldmanSachs.png',
    './assets/harvard.png',
    './assets/IIMB.png',
  ];

  return (<>
    <div className="slide-padders">
      <div className="slide-container-1280">
        <div className="slide-container-1280-width">

          <div className="sliding">
            <div className='slide__main'>

              <h1>Our Top Mentors Come From</h1>

              <div className="slide__company">

                <div class="slide-logos">
                  <div class="slide-logos-slide">

                    <img src="./assets/google.png" alt="" />
                    <img src="./assets/microsoft.png" alt="" />
                    <img src="./assets/goldmanSachs.png" alt="" />
                    <img src="./assets/harvard.png" alt="" />
                    <img src="./assets/IIMB.png" alt="" />
                    <img src="./assets/IIT Bombay.png" alt="" />

                  </div>
                  <div class="slide-logos-slide">

                    <img src="./assets/google.png" alt="" />
                    <img src="./assets/microsoft.png" alt="" />
                    <img src="./assets/goldmanSachs.png" alt="" />
                    <img src="./assets/harvard.png" alt="" />
                    <img src="./assets/IIMB.png" alt="" />
                    <img src="./assets/IIT Bombay.png" alt="" />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mentors__statsMain">
        <div className="mentors__stats">
          <img src="./assets/Stats_star.png" alt="" />
          <div>
            <h1>100+</h1>
            <p>Mentorship Provided</p>
          </div>
        </div>
        <div className="mentors__stats">
          <img src="./assets/Stats_hike.png" alt="" />
          <div>
            <h1>150%</h1>
            <p>Average Hike</p>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default Slider
