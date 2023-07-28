import React from 'react'
import './Navbar3.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar3 = () => {
    return (
        <>
            <div className="nav3__container">
                <div className="nav3">
                    <div className='nav3__logo'>
                        <Link to="/">
                            <img src="./assets/event-logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className='nav3__link'>
                        <NavLink to="/mentorlist" className="nav3__active">
                            <div className='nav3__link-mentor'>
                                <h3>Explore Mentors</h3>
                                <img src="./assets/mentor-user-tie.svg" alt="" />
                            </div>
                        </NavLink>
                        <div className='nav3__link-events'>
                            <NavLink to="/events" className="nav3__active">
                                <h3>Live Events</h3>
                            </NavLink>
                            <p>New</p>
                        </div>
                        <NavLink to="/askmentors" className="nav3__active">
                            <div className='nav3__link-askmentor'>
                                <p>Ask Mentors</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar3