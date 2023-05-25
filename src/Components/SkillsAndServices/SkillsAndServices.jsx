import React from 'react'
import './SkillsAndServices.css'

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
            <button className="button skillsAndServices-button">Download Resume</button>
            <div className="blur skillsAndServices-blur1" style={{background: "var(--gray)"}}></div>
        </div>
        <div className="cards"></div>
    </div>
  )
}

export default SkillsAndServices