import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import profilePicture from '../../assets/images/ProfilePicture.jpeg';
import portfolioLogo from '../../assets/images/PortfolioLogo.png';
import TechStack from '../TechStack';
import { gsap } from "gsap";
import './index.css';

const Home = () => {
    const [texts, setTexts] = useState({
        greeting: '初めまして',
        invitation: 'どうぞ'
    });

    const handleTextChange = (key, newText) => {
        setTexts(prevTexts => ({
            ...prevTexts,
            [key]: newText
        }));
    };

    useEffect(() => {
        gsap.from(".profilePicture", { opacity: 0, x: -100, duration: 1, delay: 0.5 });
        gsap.from("h1", { opacity: 0, y: -100, duration: 1, delay: 0.5 });
    }, []);

    return (
        <>
            <Container className="heroSection">
                <h1>Lauren Eaton - Developer</h1>
                <img className="profilePicture" id="headshot" src={profilePicture} alt="profile picture" />
                <p className="aboutMeText" id="aboutMeText">
                    <span onMouseEnter={() => handleTextChange('greeting', 'Nice to meet you')} onMouseLeave={() => handleTextChange('greeting', '初めまして')}>
                        {texts.greeting}
                    </span>
                </p>
                <p>
                    My name is Lauren, a language aficionado turned aspiring web wizard. With a degree in Japanese and over 8 years navigating the labyrinth of translation, I've deciphered intricate linguistic puzzles and fostered cross-cultural connections.</p>
                <p>
                    However, my love for technology has always whispered in the background like a mischievous spirit. So, armed with a thirst for new challenges, I embarked on an odyssey through the realms of code, setting sail with EdX's Frontend Developer Bootcamp.</p>
                <p>
                    Please do dive in!
                </p>
                <p className="aboutMeText" id="aboutMeText">
                    <span onMouseEnter={() => handleTextChange('invitation', 'Welcome')} onMouseLeave={() => handleTextChange('invitation', 'どうぞ')}>
                        {texts.invitation}
                    </span>
                </p>
                <a href="/projects">
                    <img
                        className="portfolioButton"
                        id="button"
                        src={portfolioLogo}
                        alt="button for portfolio page"
                    />
                </a>
            </Container>
            <TechStack />
        </>
    );
};

export default Home;
