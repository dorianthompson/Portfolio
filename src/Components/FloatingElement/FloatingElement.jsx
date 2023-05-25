import React from 'react';
import './FloatingElement.css';


const FloatingElement = ({image, topText, bottomText}) => {
    return (
        <div className='floatingElement'>
            <img src={image} alt=''/>
            <span>
                {topText}
                <br />
                {bottomText}
            </span>
        </div>
    )
}

export default FloatingElement;