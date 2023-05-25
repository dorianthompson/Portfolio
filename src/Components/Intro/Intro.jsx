import React from "react";
import './Intro.css';
import Github from '../../img/icons/Github.png';
import LinkedIn from '../../img/icons/LinkedIn.png';
import RedBlob from '../../img/blobs/RedBlob.png';
import BlackBlob from '../../img/blobs/BlackBlob.png';
import GrayBlob from '../../img/blobs/GrayBlob.png';
import Certificate from '../../img/icons/Certificate.png';
import LapTop from '../../img/icons/LapTop.png'
import FloatingElement from "../FloatingElement/FloatingElement";

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
                    <a  href="https://github.com/dorianthompson" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/dorian-thompson-459171b4/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="" />   
                    </a>
                </div>
            </div>

            <div className="intro-right">
                <img src={RedBlob} alt=""/>
                <img src={GrayBlob} alt=""/>
                <img src={BlackBlob} alt=""/>
                <div style={{top: '-16%', left: '75%'}}>
                    <FloatingElement image={LapTop} topText="Self" bottomText="Taught"/>
                </div>
                <div style={{top: '21rem', left: '-8rem'}}>
                    <FloatingElement image={Certificate} topText="Certificate" bottomText="Obession" />
                </div>
                <div className="blur" style={{background: 'var(--red)'}}></div>
                <div className="blur" 
                style={{
                    background: 'black',
                    top: '17rem',
                    width: '21 rem',
                    height: '11rem',
                    left: '-9rem'}}></div>
            </div>
            
        </div>
    )
}

export default Intro;