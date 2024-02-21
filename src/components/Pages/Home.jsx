import Container from 'react-bootstrap/Container';
import profilePicture from '../../assets/images/ProfilePicture.jpeg';
import portfolioLogo from '../../assets/images/PortfolioLogo.png';
import './Home.css'

const Home = () => {
    return (
        <>
            <Container className="heroSection">
            <h1>Lauren Eaton - Developer</h1>
                    <img className="profilePicture" id="headshot" src={profilePicture} alt="profile picture"></img>
                <p className="aboutMeText">
                    Konnichiwa! 🎌 My name is Lauren, a language aficionado turned aspiring web wizard. With a degree in Japanese and over 8 years navigating the labyrinth of translation, I've deciphered intricate linguistic puzzles and fostered cross-cultural connections.</p>
                <p>
                    However, my love for technology has always whispered in the background like a mischievous spirit. So, armed with a thirst for new challenges, I embarked on an odyssey through the realms of code, setting sail with EdX's Frontend Developer Bootcamp.</p>
                <a href="/projects">
                    <img
                        className="portfolioButton"
                        id="button"
                        src={portfolioLogo}
                        alt="button for portfolio page"
                    />
                </a>
            </Container>
        </>
    )
}


export default Home