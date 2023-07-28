import React, { useEffect } from 'react'
import './Home.css'
import { Card, Footer, HomeCycle, HomeFeedback, HomeSuccess, Slider } from '../../components'
import { Link } from 'react-router-dom'
import Navbar2 from '../../components/Navbar2'

const Home = () => {

  const cardDetails = [
    {
      "number": "1",
      "text": "Shortlist a mentor for you according to your idea & Preference",
      "btntext": 'View Mentors'
    },
    {
      "number": "2",
      "text": "Book a free session to see how the mentor can help you",
      "btntext": 'Book a Free Trial'
    },
    {
      "number": "3",
      "text": "Start getting mentored with long term mentorship with your mentor",
      "btntext": 'Get Started'
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <Navbar2 />
        <div className='home'>
          <div className="home__top">

            <div className="home__left-box">
              <div className="home__left-head">
                <h1>Ideate<br/>Innovate<br/>In<span>Q</span>bate</h1>
              </div>
              <div className="home__left-bottom">
                <h1>Your Startup.</h1>
                <Link>
                  <div className="home__left-bottom-call">
                    <img src="./assets/telephone.png" alt="" loading="lazy"/>
                    <p>Book a free call</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="home__right">
              <div>
                <img src="./assets/home-group.png" alt="" loading="lazy"/>
              </div>
            </div>

          </div>

          <div className="home__social">
            <div>
              <Link className='home__social-discord' to="https://discord.gg/qTWxjfebR3" target='_blank'>
                <img src="./assets/discord-icon.png" alt="" loading="lazy"/>
                <p>Join Discord Community</p>
              </Link>
            </div>
            <Link to="/freementorship" className='home__social-inqbator'>
              <div className='home__social-freeMentor'>
                <img src="./assets/logo.png" alt="" loading="lazy"/>
                <p>Free Mentorship</p>
              </div>
              <div className='home__social-freeMentortext'>
                <p>There is a<span> FREE Trail Session </span>that you can use to find your perfect match**</p>
              </div>
            </Link>
            <Link to="/mentor" className='home__social-mentor'>
              <img src="./assets/mentor.png" alt="" loading="lazy"/>
              <p>Become a Mentor</p>
            </Link>
          </div>
        </div>
        <Slider />
        <div className="home__card">
          <div className='home__card-head'>
            <h1>Let's Start Up!</h1>
            <img src="./assets/biglogo.png" alt="" loading="lazy" />
          </div>
          <div className="home__cardMain">
            {cardDetails.map((card, index) => (
              <Card key={index} number={card.number} text={card.text} buttonText={card.btntext} />
            ))}
          </div>
        </div>
        <HomeCycle />
      

        <HomeSuccess />
        <HomeFeedback />
      </div>
      <Footer />
    </>
  )
}

export default Home