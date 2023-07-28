import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({ number, text, buttonText }) => {
  return (
    <>
      <div className="card__main">
        <div className="card__number">
          {number}
        </div>
        <div className='card__content'>
          {text}
        </div>
        <Link>
          <div className="card__button">
            <p>{buttonText}</p>
            <img src="./assets/top-right-arrow.png" alt="" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Card