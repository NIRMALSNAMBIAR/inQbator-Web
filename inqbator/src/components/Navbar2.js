import React from 'react'
import './Navbar2.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <div className="new-nav w-nav">
            <div className="side-padders relative">
                <div className="container-180-width">
                    <div className="nav-main-flex">

                        <Link className="navbar__logo2" to="/">
                            <img className='image-100' src="./assets/main-logo.svg" alt="" />
                        </Link>
                        <nav className='nav-menu-6'>
                            <div className="nav-link-flex">
                                <div className='nav-links-wrap'>
                                    <NavLink className="nav-linking" exact to="/" activeClassName="nav-active">Home</NavLink>
                                    <NavLink className="nav-linking" to="/mentorlist" activeClassName="nav-active">Mentorship</NavLink>
                                    <NavLink className="nav-linking" to="/services" activeClassName="nav-active">Our Services</NavLink>
                                    <NavLink className="nav-linking" to="/contact" activeClassName="nav-active">Contact Us</NavLink>
                                    <NavLink className="nav-linking" to="/events" activeClassName="nav-active">Live Events</NavLink>
                                    <NavLink className="nav-linking" to="/askmentors" activeClassName="nav-active">Ask Mentors</NavLink>
                                </div>
                            </div>
                        </nav>
                        <div className="nav-button-wrap">
                            <Link exact to='/' className="nav-auth-text">Sign Up / Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2  