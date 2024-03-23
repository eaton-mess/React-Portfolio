import React from 'react';
import TechImage from '../../assets/images/techstack.png';
import './index.css';

const TechStack = () => {
    return (
        <div className="techStackContainer">
            <img className="techStack" src={TechImage} alt="tech stack" />
        </div>
    )
}

export default TechStack;
