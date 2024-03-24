import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faNodeJs, faBootstrap, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import TechImage from '../../assets/images/techstack.png'; 
import './index.css';

const TechStack = () => {
    const [logosVisible, setLogosVisible] = useState(false); // State to track whether logos are visible
    const logosRef = useRef(null);

    const handleImageClick = () => {
        if (!logosVisible) {
            gsap.fromTo(
                logosRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out", stagger: 0.5 }
            );
            setLogosVisible(true);
        }
    };

    return (
        <div className="techStackContainer">
            <img className="techStack" src={TechImage} alt="tech stack" onClick={handleImageClick} />
            <div ref={logosRef} className="logosContainer" style={{ opacity: 0 }}>
                <FontAwesomeIcon className="logo" icon={faHtml5} />
                <FontAwesomeIcon className="logo" icon={faCss3} />
                <FontAwesomeIcon className="logo" icon={faNodeJs} />
                <FontAwesomeIcon className="logo" icon={faBootstrap} />
                <FontAwesomeIcon className="logo" icon={faReact} />
                <FontAwesomeIcon className="logo" icon={faJs} />
            </div>
        </div>
    );
};

export default TechStack;
