import React from 'react'
import './SkillsAndServices.css';
import Computer from '../../img/icons/Computer.png';
import CodingIcon from '../../img/icons/CodingIcon.png';
import Technology from '../../img/icons/Technology.png';
import Card from '../Card/Card';
import Resume from '../../img/Resume.pdf';

const SkillsAndServices = () => {
  return (
    <div className='skillsAndServices'>
        <div className="skillsAndServices-intro">
            <span>My Skills</span>
            <span>& Interest</span>
            <span>
                My love for coding and problem solving is what lead me to obtaining these skills
                <br />
                and makes learning new technologies, frameworks, and best practices things i revel in.
            </span>
            <a href={Resume} download>
              <button className="button skillsAndServices-button">Download Resume</button>
            </a>
        </div>
        <div className="cards">
          <div style={{left: '14rem'}}>
            <Card
              icon={CodingIcon}
              heading={'Software Developer'}
              description={'React, NodeJs, Express'}
            />
          </div>
          <div style={{top: "12rem", left: "-4rem"}}>
            <Card
                icon={Technology}
                heading={'Interest'}
                description={'Frontend, Backend, and Fullstack'}
              />
          </div>
          <div style={{top: "19rem", left: "12rem"}}>
            <Card
                icon={Computer}
                heading={'Coding Languages'}
                description={'Javascript, Python, Java'}
              />
          </div> 
        </div>
    </div>
  )
}

export default SkillsAndServices