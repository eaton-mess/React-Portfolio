import profilePicture from '../../assets/images/ProfilePicture.jpeg';
import photo1 from '../../assets/images/coding1.jpeg'
import photo2 from '../../assets/images/coding2.jpeg'
import photo3 from '../../assets/images/html.png'
import photo4 from '../../assets/images/css.png'
import photo5 from '../../assets/images/javascript.png'
import photo6 from '../../assets/images/node.png'
import photo7 from '../../assets/images/react.png'
import photo8 from '../../assets/images/bootstrap.png'
import photo9 from '../../assets/images/tailwind.png'
import photo10 from '../../assets/images/jquery.png'
import './index.css';

const Home = () => {
    return (
        <>
            <div className="header">
                <h1>Lauren Eaton</h1>
                <h3>Courseware Developer</h3>
                <img className="profilePicture" id="headshot" src={profilePicture} alt="profile picture" />
            </div>

<div className="imageContainer">
                <img className="laptopPhoto" src={photo1} alt="laptop photo" />
            </div>

            <div className="intro">
                <p>Thanks for stopping by!</p>
                <p>I’m a courseware developer with a background in frontend development, translation and Japanese. After diving into web development through a bootcamp, I combined my skills in tech and language to create clear, engaging learning experiences. Now, working with Rolls-Royce, I build courseware that makes complex topics accessible and interesting, crafting digital content that connects with people and makes learning feel natural.</p>
            </div>


            <div className="imageContainer">
                <img className="laptopPhoto" src={photo2} alt="laptop photo 2" />
            </div>

            <div className="techStack">
                <p id="title">Tech Stack</p>
                <img className="techStackImg" src={photo3} />
                <img className="techStackImg" src={photo4} />
                <img className="techStackImg" src={photo5} />
                <img className="techStackImg" src={photo6} />
                <img className="techStackImg" src={photo7} />
                <img className="techStackImg" src={photo8} />
                <img className="techStackImg" src={photo9} />
                <img className="techStackImg" src={photo10} />
            </div>

        </>
    );
};

export default Home;
