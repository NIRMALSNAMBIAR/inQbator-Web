import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer__main'>
      <div className="footer">
        <div className="footer__text">
          <div className="footer__left">
            <Link to="/" >
              <div className="footer__logo">
                <img src="./assets/main-logo.svg"/>
              </div>
            </Link>
            <p>inQbator is a platform that empowers young founders, entrepreneurs, students, and individuals to engage with one another on a common platform. It offers the opportunity to receive mentorship for their startup ideas and contribute to a vibrant community of entrepreneurs with a similar mindset. Through this platform, they can seek guidance from mentors to validate and implement their ideas, thereby benefiting both the country and society at large. InQbator serves as a social media and educational platform, facilitating interaction and providing a means to achieve mentorship.</p>
            <div className='footer_social'>
              <p>Follow us</p>
              <Link>
                <img src="./assets/twitter.png" alt="" />
              </Link>
              <Link>
                <img src="./assets/instagram.png" alt="" />
              </Link>
            </div>
            <h1>Copyright 2023 &copy; inQbator . All RIght Reserved.</h1>
          </div>
          <div className="footer__right">

            <div className="footer__links">
              <h1>PLATFORM</h1>
              <Link>Join Discord Community</Link>
              <Link>Free Mentorship</Link>
              <Link>Become a Member</Link>
              <Link>Book a Free Session</Link>
            </div>
            <div className="footer__links">
              <h1>COMPANY</h1>
              <Link to="about">About</Link>
              <Link>Privacy Policy</Link>
              <Link>Terms & Conditions</Link>
            </div>
            <div className="footer__links">
              <h1>QUICK LINKS</h1>
              <Link>Mentorship</Link>
              <Link>Startup Registration</Link>
              <Link>Our Services</Link>
              <Link>Contact Us</Link>
            </div>
            <div className="footer__links footer__resources">
              <h1>RESOURCES</h1>
              <Link>Newsletter</Link>
              <Link>Podcast</Link>
              <Link>Case Studies</Link>
              <Link>Perks</Link>
            </div>
            <div className="footer__links">
              <h1>SUPPORT</h1>
              <Link>FAQ</Link>
              <Link>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="footer__mainImage">
          <img src="./assets/inQbator-text.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer