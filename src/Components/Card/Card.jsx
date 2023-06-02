import React from 'react'
import './Card.css';

export const Card = ({icon, heading, description }) => {
  return (
    <div className='card'>
        <img src={icon} alt='' />
        <span>{heading}</span>
        <span>{description}</span>
    </div>
  )
}

export default Card;
