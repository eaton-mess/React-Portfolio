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
        const fadeOnScroll = () => {
            const paragraphs = document.querySelectorAll('.fadeInOnScroll');
            paragraphs.forEach(paragraph => {
                const topPosition = paragraph.getBoundingClientRect().top;
                const bottomPosition = paragraph.getBoundingClientRect().bottom;

                const windowHeight = window.innerHeight;
                if (topPosition < windowHeight && bottomPosition > 0) {
                    gsap.to(paragraph, { opacity: 1, duration: 1 });
                }
            });
        };

        fadeOnScroll();

        window.addEventListener('scroll', fadeOnScroll);

        return () => {
            window.removeEventListener('scroll', fadeOnScroll);
        };
    }, []);

    return (
        <>
            <Container className="heroSection">
                <h1>Lauren Eaton</h1>
                <h3 style={{
                    marginBottom: '3em'
                }}>Frontend Developer</h3>
                <img className="profilePicture" id="headshot" src={profilePicture} alt="profile picture" />
                <p className="aboutMeText fadeInOnScroll" id="aboutMeText">
                    <span onMouseEnter={() => handleTextChange('greeting', 'Nice to meet you')} onMouseLeave={() => handleTextChange('greeting', '初めまして')}>
                        {texts.greeting}
                    </span>
                </p>
                <p className="fadeInOnScroll">
                    My name is Lauren, a language aficionado turned aspiring web wizard. With a degree in Japanese and over 8 years navigating the labyrinth of translation, I've deciphered intricate linguistic puzzles and fostered cross-cultural connections.
                </p>
                <p className="fadeInOnScroll">
                    With a profound love for technology as my compass, I embarked on a journey through code, commencing with a Frontend Developer Bootcamp. This expedition has equipped me with the skills to craft intuitive user interfaces and navigate the intricate landscape of web development. Fueled by a relentless pursuit of excellence, I approach each project as an opportunity for growth and innovation.
                </p>
                <p className="fadeInOnScroll">
                    Please do dive in!
                </p>
                <p className="aboutMeText fadeInOnScroll" id="aboutMeText">
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
