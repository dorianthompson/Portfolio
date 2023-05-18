import React from "react";
import './Intro.css';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span>Hi! I'm</span>
                    <span>Dorian Thompson</span>
                    <span>Frontend Developer with experience also with the backend, who enjoys creating and improving the user experience of a webpage</span>
                </div>
                <button className="button intro-button">
                    Hire Me
                </button>
            </div>
            

            <div className="intro-right">
                Picture and icons
            </div>
        </div>
    )
}

export default Intro;