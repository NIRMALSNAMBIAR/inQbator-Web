import React from 'react'
import "./EventsCard.css";

const EventsCard = ({bgColor}) => {
  return (
    <>
      <div className="eventcard">
        <div className="eventcard__tophead">
          <img src="./assets/logo.svg" alt="" />
          <h1>inQbator | Level-Up</h1>
        </div>
        <div className="eventcard__bio" style={{backgroundColor: `${bgColor}`}}>
          <div className="eventcard__bio-img">
            <img src="./assets/profile-img.jpg" alt="" />
          </div>
          <h3>Eliminate Your Interview Anxiety</h3>
          <h1>Enhance Your Performance as an Interviewee</h1>
          <div className="eventscard__bio-bottom">
            <div className='eventscard__bio-bottom1'>
              <h3><span>Date:-</span>Sun, 23nd July</h3>
              <h3><span>Time:-</span>12:00 PM</h3>
            </div>
            <div className='eventscard__bio-bottom2'>
              <h3>Akshay Kumar</h3>
              <p>Mern Stack Developer</p>
            </div>
          </div>
        </div>
        <h1>Eliminate Your Interview Anxiety : <br />
          Enhance Your Performance as an
          Interviewee</h1>
        <div className='eventcard__mentor'>
          <div className='eventcard__mentor-img'>
            <img src="./assets/profile-img.jpg" alt="" />
          </div>
          <div className='eventcard__mentor-text'>
            <h1>Akshay Kumar</h1>
            <p>MERN Stack Develoler</p>
          </div>
        </div>
        <div className="eventcard__btn">
          <div className='eventcard__btn-time'>
            <img src="./assets/events-calender.svg" alt="" />
            <h1>July 23, 12.00 (GMT + 5:30)</h1>
          </div>
          <div className='eventcard__btn-main'>
            Register
          </div>
        </div>
      </div>
    </>
  )
}

export default EventsCard