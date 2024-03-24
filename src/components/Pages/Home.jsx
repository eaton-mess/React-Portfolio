import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import profilePicture from '../../assets/images/ProfilePicture.jpeg';
import portfolioLogo from '../../assets/images/PortfolioLogo.png';
import TechStack from '../TechStack';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP
import './index.css';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

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
        gsap.from("h1, h3", { opacity: 0, x: +100, duration: 1, delay: 0.5 });

        // Animating paragraphs when they come into view on scroll
        const paragraphs = document.querySelectorAll('.fadeInOnScroll');
        paragraphs.forEach(paragraph => {
            gsap.from(paragraph, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: paragraph,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Fade in the portfolio logo
        gsap.from("#button", { opacity: 0, y: 50, duration: 1, delay: 0.5, scrollTrigger: { trigger: "#button", start: 'top 50%', end: 'bottom 50%', toggleActions: 'play none none none' } });

        // Fade in the TechStack component
        gsap.from(".techStack", { opacity: 0, y: 50, duration: 1, delay: 0.5, scrollTrigger: { trigger: ".techStack", start: 'top 50%', end: 'bottom 50%', toggleActions: 'play none none none' } });
    }, []);

    return (
        <>
            <Container className="heroSection">
                <h1 style={{ marginTop: '2em' }}>Lauren Eaton</h1>
                <h3 style={{ marginBottom: '4em' }}>Frontend Developer</h3>
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
