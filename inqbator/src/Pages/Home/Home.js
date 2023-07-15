import React from 'react'
import './Home.css'
import { SlidingCompany } from '../../components'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="home__top">

          <div className="home__left-box">
            <div className="home__left-head">
              <img src="./assets/home-text.png" alt="" />
            </div>
            <div className="home__left-bottom">
              <h1>Your Startup.</h1>
              <div className="home__left-bottom-call">
                <img src="./assets/telephone.png" alt="" />
                <p>Book a free call</p>
              </div>
            </div>
          </div>

          <div className="home__right">
            <img src="./assets/Group-Chat.png" alt="" />
          </div>

        </div>

        <div className="home__social">
          <div className='home__social-discord' >
            <img src="./assets/discord-icon.png" alt="" />
            <p>Join Discord Community</p>
          </div>
          <div className='home__social-inqbator'>
            <img src="./assets/logo.png" alt="" />
            <p>Build Your Startup</p>
          </div>
        </div>
      </div>
      <SlidingCompany />
    </>
  )
}

export default Home