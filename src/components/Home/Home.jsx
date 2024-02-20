import profilePicture from '../../assets/images/ProfilePicture.jpeg';
import './Home.css';

const Home = () => {
    return (
        <header>
            <div className='text-center'>
                <div className='text-white'>
                    <h1 className='mb-3 myName'>Lauren Eaton - Frontend Developer</h1>
                </div>
                <img className='profilePicture' src={profilePicture} alt="profile picture"></img>
            </div>
        </header>
    );
}

export default Home;
