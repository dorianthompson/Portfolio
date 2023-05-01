import React from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <div className="navbar-name">DT</div>
            </div>

            <div className="navbar-right">
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Certifications</li>
                    <li>Projects</li>
                </ul>
            </div>

            <button className="portfolio-button">
                Contact
            </button>
        </div>
    )
}