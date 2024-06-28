import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import imageUrl from "../assets/images/avatar-icon.png"
import "./Header.css"

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const navLink = ({ isActive }) => isActive ? "nav-item" : null

    const toggleMenu = () => {
        setIsOpen(prevOpen => !prevOpen)
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <button onClick={toggleMenu}>
                <div className="hamburger">
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
            </button>
            <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
                <div className="navbar">
                    <ul className="nav-links">
                        <li><NavLink to="/host" className={navLink}>Host</NavLink></li>
                        <li><NavLink to="/about" className={navLink}>About</NavLink></li>
                        <li><NavLink to="/vans" className={navLink}>Vans</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Link to="login" className="login-link">
                <img src={imageUrl} className="login-icon" />
            </Link>
        </header>
    )
}