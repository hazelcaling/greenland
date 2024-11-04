import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../assets/styles/NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo"><img src="/images/logo-g.png" alt="" /></div>
            <button className="menu-toggle">
                &#9776; {/* Hamburger icon */}
            </button>
            <ul className="nav-links">
                <li><Link to='/accommodations'>Accommodations</Link></li>
                <li><Link to='/amenities'>Amenities</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/activities'>Activities</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
                <li><Link to='/booking'>Booking</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
