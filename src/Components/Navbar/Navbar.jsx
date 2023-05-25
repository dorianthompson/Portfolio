import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <div className="navbar-name">
                    Dorian
                </div>
                <span>toggle</span>
            </div>

            <div className="navbar-right">
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>
                        <span>About</span>
                        <span>Me</span>
                    </li>
                    <li>Services</li>
                    <li>Certifications</li>
                    <li>Projects</li>
                </ul>
                <button className="button">Contact</button>
            </div>
        </div>
    )
}

export default Navbar;