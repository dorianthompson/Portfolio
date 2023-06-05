import React from 'react';
import './Footer.css';
import FooterImg from '../../img/FooterImg.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className="footer">
        <img src={FooterImg} alt="" style={{width: '100%'}} />
        <div className="footer-content">
            <span>thompsondorian2@gmail.com</span>
            <div className="footer-icons">
                <a  href="https://github.com/dorianthompson" target="_blank" rel="noreferrer">
                    <Github color='black' size='3rem'/>
                </a>
                <a href="https://www.linkedin.com/in/dorian-thompson-459171b4/" target="_blank" rel="noreferrer">
                    <LinkedIn color='black' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer