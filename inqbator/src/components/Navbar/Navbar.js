import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
            <div>
                <Link className="navbar__logo" to="/">
                    <div className="navbar__logo-img">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className="navbar__logo-text">
                        in<span className='gradient-text'>Q</span>bator
                    </div>
                </Link>
            </div>
            <div className="navbar__menu">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="gradient-text">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mentorship" activeClassName="gradient-text">Mentorship</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration" activeClassName="active">Startup Registration</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active">Our Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar__auth">
                <Link exact to="/signup" className="navbar_auth-text">Sign Up / Log In</Link>
            </div>
        </nav>
    );
};

export default Navbar;
