import React from 'react'
import './MentorCard.css'
import { Link } from 'react-router-dom';

const MentorCard = () => {
  return (
    <div className='mentorcard'>
      <div className="mentorcard__top">
        <div className='mentorcard__top-left'>

          {/* Profile */}
          <div className="mentorcard__image">
            <img src="./assets/profile-img.jpg" alt="" />
          </div>
          <div className="mentorcard__des">
            <h1>Akshay Kumar</h1>
            <div><i className="fa-solid fa-star" /> 5.0 rating | 10+ Mentees</div>
            <p>Embracing the constant journey of learning is the key to growth, paving a practical path towards becoming an industry-standard designer</p>
          </div>
        </div>

        <div className='mentorcard__top-right'>

          {/* Company */}
          <div className="mentorcard__company">

            <div>
              <div className='mentorcard__company-img'>
                <img src="./assets/mentorcard-company.png" alt="" />
              </div>
              <div className='mentorcard__company-des'>
                <h1>Nutanix</h1>
                <p>Designer - 1</p>
              </div>
            </div>

            <div>
              <div className='mentorcard__company-img'>
                <img src="./assets/mentorcard-company.png" alt="" />
              </div>
              <div className='mentorcard__company-des'>
                <h1>3+ Years of Experience</h1>
                <p>also worked at Toshiba</p>
              </div>
            </div>

          </div>

          {/* Skills */}
          <div className='mentorcard__skills'>
            <div className='mentorcard__skills-head'>
              <img src="./assets/mentorlist-book.svg" alt="" />
              <h1>Skills & Experties : </h1>
            </div>
            <div>
              <div>Figma</div>
              <div>User Flows</div>
              <div>User Flows</div>
              <div>Wireframes</div>
              <div>Prototyping</div>
              <div>Presentation</div>
              <div>UI/UX</div>
              <div>User Reasearch</div>
              <div>Wireframes</div>
              <div>Prototyping</div>
              <div>Presentation</div>
              <div>UI/UX</div>
              <div>User Reasearch</div>
              <span>+ more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mentorcard__bottom">
        <div className='mentorcard__bottom-left'>
          <div className="mentorcard__area mentorcard__bottom-style">
            <div>
              <img src="./assets/mentorcard-area.svg" alt="" />
              <h1>For : </h1>
            </div>
            <h1>Market Strategy | Product for Market Fit | Team Building  </h1>
          </div>
          <div className="mentorcard__sector mentorcard__bottom-style">
            <div>
              <img src="./assets/mentorcard-sector.svg" alt="" />
              <h1>Traget Sector : </h1>
            </div>
            <h1>Market Strategy | Product for Market Fit | Team Building  </h1>
          </div>
        </div>

        {/* bottom-mid */}
        <div className='mentorcard__bottom-midmain'>
          <div>
            <div className="mentorcard__bottom-mid">
              <div>
                <img src="./assets/mentorcard-phone.svg" alt="" />
                <h1>Sessions : </h1>
              </div>
              <h1>3 session(s)/week</h1>
            </div>
            <div className="mentorcard__bottom-mid">
              <div>
                <img src="./assets/mentorcard-chat.svg" alt="" />
                <h1>Chat : </h1>
              </div>
              <h1>Within 12 hours</h1>
            </div>
          </div>
          
          <div>
            <div className="mentorcard__bottom-mid">
              <div>
                <img src="./assets/mentorcard-tick.svg" alt="" />
                <h1>Taks & Followup : </h1>
              </div>
              <h1>Every 2 days</h1>
            </div>
            <div className="mentorcard__bottom-mid">
              <div>
                <img src="./assets/mentorcard-bag.svg" alt="" />
                <h1>Investor referrals : </h1>
              </div>
              <h1>& more</h1>
            </div>
          </div>

        </div>
        {/* bottom right  */}
        <div className='mentorcard__bottom-right'>
          <h1>₹499/ Session</h1>
          <Link to="/profile">
            <div className="mentorcard__viewprofile">
              View Profile
            </div>
          </Link>
          <div className='mentorcard__booksession'>
            Book a FREE Mentorship Session
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorCard