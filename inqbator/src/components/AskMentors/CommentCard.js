import React from 'react'
import './CommentCard.css'

const CommentCard = () => {
  return (
    <>
      <div className="ccard__main">
        <div className="ccard__name">
          <div>
            <img src="./assets/profile-img.jpg" alt="" />
          </div>
          <h1>Asked by Akshay Kumar | Working Professional | MERN Stack Developer</h1>
        </div>
        <h2>How do I upskill myself to go from Junior to Senior developer?</h2>
        <p>To upskill yourself and progress from a junior to a senior developer, consider the following steps:<br />
          1. Master the Fundamentals: Ensure you have a strong foundation in computer science fundamentals, including data structures, algorithms, and object-oriented programming. Solidify your knowledge of programming languages commonly used in your field.<br />
          2. Gain Industry Experience: Seek opportunities to work on challenging projects that expose you to a variety of technologies and scenarios. Look for projects that involve complex problem-solving, architecture design, and scalability considerations...(read more)</p>

        <div className='ccard__ansby'>
          <div className='ccard__ansby-img'>
            <img src="./assets/profile-img.jpg" alt="" />
          </div>
          <div className='ccard__ansby-text'>
            <h1>Akshay Kumar</h1>
            <p>Mern Stack Developer</p>
          </div>
        </div>

        <div className="ccard__viewprofile">

        </div>
      </div>
    </>
  )
}

export default CommentCard