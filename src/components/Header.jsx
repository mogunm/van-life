import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

export default function Header(){

    const navLink = ({ isActive }) => isActive ? "nav-link" : null

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" className={navLink}>Host</NavLink>
                <NavLink to="/about" className={navLink}>About</NavLink>
                <NavLink to="/vans" className={navLink}>Vans</NavLink>
            </nav>
        </header>
    )
}