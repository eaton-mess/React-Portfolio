import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nameLogo from '../../assets/images/NameLogo.png';
import './index.css'

function MyNavbar() {
    return (
        <Navbar expand="lg" className="customNav">
            <Container>
                <Navbar.Brand id="navTitle" href="/">
                    <img id="NameLogo" className="nameLogo" src={nameLogo} alt="nav logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="navLink" href="/">home</Nav.Link>
                        <Nav.Link className="navLink" href="/portfolio">portfolio</Nav.Link>
                        <Nav.Link className="navLink" href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar