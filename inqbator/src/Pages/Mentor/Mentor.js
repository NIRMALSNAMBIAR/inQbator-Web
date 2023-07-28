import React from 'react'
import './Mentor.css'
import { Link } from 'react-router-dom'

const Mentor = () => {
  return (
    <>
      <div className="mentor__container">
        <div className="mentor">
          <div className="mentor__nav-container">
            <div className='mentor__nav'>
              <Link to="/">
                <img src="./assets/event-logo.svg" alt="" loading='lazy' />
              </Link>
              <div>
                <p>Become Mentor</p>
                <img src="./assets/mentor-user-tie.svg" alt="" loading='lazy' />
              </div>
            </div>
          </div>
          <div className='mentor__head'>
            <div>
              <h1>Can you bring people’s<br /> idea into reality?</h1>
              <p>If this is what your heart responded, you have a super power. InQbator platform will Embrace your wondrous Super Power as your heart responds with awe-inspiring beauty. InQbator stands by your side, devoted to nurturing and empowering Founders. Let compassion, love, and support guide  journey of an Entrepreneur With self-discovery as you unleash your incredible potential. </p>
              <div>Become a mentor</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mentor__body">

        {/* What mentors have to do*/}
        <div className="mentor__what">
          <h1>What makes a inQbator mentor<br />A inQbator Mentor?</h1>
          <div className='mentor__what-img'>
            <img src="./assets/mentor-what1.svg" alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
          </div>
          <div className='mentor__what-img'>
            <img src="./assets/mentor-what2.svg" alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
          </div>
          <div className='mentor__what-img'>
            <img src="./assets/mentor-what3.svg" alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
          </div>
        </div>

        {/* Impact section*/}
        <div className="mentor__impact-container">
          <div className="mentor__impact">
            <div className="mentor__impact-head">
              <h1>One more step to start seeing your impact on the world</h1>
              <p>Blueprint to start making your impact on the world.</p>
            </div>

            {/* card 1 */}
            <h1>1. Set up your long-term mentorship offering</h1>
            <div className='mentor__impact-card'>
              <div className="mentor__impact-card-left">
                <div className="mentor__impact-card-left1">
                  <h1>a. Mentorship area</h1>
                  <p>Describe your unique mentorship style i.e.: Goals & topics you would cover, frequency of sessions & follow-ups, etc.</p>
                </div>
                <div className="mentor__impact-card-left2">
                  <h1>b. Pricing</h1>
                  <p>Set your own monthly pricing. Edit anytime.</p>
                </div>
                <div className="mentor__impact-card-left3">
                  <h1>c. Availability</h1>
                  <p>Deliver mentorship at your preferred timings. Be it weekends or post office hours. You control your calendar.</p>
                </div>
              </div>
              <div className="mentor__impact-card-right">
                <img src="./assets/mentor-impact1.svg" alt="" />
              </div>
            </div>

            {/* card 2 */}
            <h1>2. Build your profile to stand out & attract the right mentees</h1>
            <div className='mentor__impact-card'>
              <div className="mentor__impact-card-left">
                <div className="mentor__impact-card-left1">
                  <h1>a. Mentor Profile</h1>
                  <p>Enhance your mentor identity by adding a picture, bio and all your achievements</p>
                </div>
                <div className="mentor__impact-card-left2">
                  <h1>b. Group Sessions</h1>
                  <p>Deliver stand-out group sessions and select personal mentees from the audience.</p>
                </div>
                <div className="mentor__impact-card-left3">
                  <h1>c. Content Resources</h1>
                </div>
              </div>
              <div className="mentor__impact-card-right">
                <img src="./assets/mentor-impact1.svg" alt="" />
              </div>
            </div>

            {/* card 3 */}
            <h1>3. Up skill your mentees by driving every aspect of their preparation</h1>
            <div className='mentor__impact-card'>
              <div className="mentor__impact-card-left">
                <div className="mentor__impact-card-left1">
                  <h1>a. Mentorship area</h1>
                  <p>Describe your unique mentorship style i.e.: Goals & topics you would cover, frequency of sessions & follow-ups, etc.</p>
                </div>
                <div className="mentor__impact-card-left2">
                  <h1>b. Pricing</h1>
                  <p>Set your own monthly pricing. Edit anytime.</p>
                </div>
                <div className="mentor__impact-card-left3">
                  <h1>c. Availability</h1>
                  <p>Deliver mentorship at your preferred timings. Be it weekends or post office hours. You control your calendar.</p>
                </div>
              </div>
              <div className="mentor__impact-card-right">
                <img src="./assets/mentor-impact1.svg" alt="" />
              </div>
            </div>


          </div>
        </div>


      </div>
      {/* roap of what mentors have to do */}
      <div className="mentor__map-container">
        <div className="mentor__map">
          <div className="mentor__map-head">
            <h1>Engaging in mentorship on inQbator is immensely gratifying, bringing forth multifaceted rewards.</h1>
            <div>Become Mentor</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mentor