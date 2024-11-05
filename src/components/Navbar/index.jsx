import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nameLogo from '../../assets/images/lauren-logo.png';
import './index.css';

function MyNavbar() {
    const [activeLink, setActiveLink] = useState('');

    // Function to handle the active state
    const handleSetActiveLink = (href) => {
        setActiveLink(href);
    };

    return (
        <Navbar expand="lg" className="customNav">
            <Container>
                <Navbar.Brand id="navTitle" href="/">
                    <img id="NameLogo" className="nameLogo" src={nameLogo} alt="nav logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link
                            className={`navLink ${activeLink === '/' ? 'active' : ''}`}
                            href="/"
                            onClick={() => handleSetActiveLink('/')}
                        >
                            home
                        </Nav.Link>
                        <Nav.Link
                            className={`navLink ${activeLink === '/projects' ? 'active' : ''}`}
                            href="/projects"
                            onClick={() => handleSetActiveLink('/projects')}
                        >
                            portfolio
                        </Nav.Link>
                        <Nav.Link
                            className={`navLink ${activeLink === '/contact' ? 'active' : ''}`}
                            href="/contact"
                            onClick={() => handleSetActiveLink('/contact')}
                        >
                            contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
