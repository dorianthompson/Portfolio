import React from "react";
import './Intro.css';
import Github from '../../img/icons/Github.png';
import LinkedIn from '../../img/icons/LinkedIn.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span>Hi! I'm</span>
                    <span>Dorian Thompson</span>
                    <span>Frontend Developer with backend experience, who enjoys creating and improving the user experience of a webpage</span>
                </div>
                <button className="button intro-button">
                    Hire Me
                </button>
                <div className="intro-icons">
                    <a  target="_blank" href="https://github.com/dorianthompson">
                        <img src={Github} alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/dorian-thompson-459171b4/">
                        <img src={LinkedIn} alt="" />   
                    </a>
                </div>
            </div>

            <div className="intro-right">
                Picture and icons
            </div>
        </div>
    )
}

export default Intro;