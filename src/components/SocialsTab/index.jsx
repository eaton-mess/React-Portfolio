import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const SocialsTab = () => {
    return (
        <Nav className="ml-auto" style={{ position: 'fixed', top: '0', right: '5.5em', maxWidth: '16em', background: 'black', zIndex: '9999' }}>
            <Nav.Link href="https://github.com/eaton-mess/" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent'
                    }}
                    size="2x" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lelizabetheaton1996/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent'
                    }}
                    size="2x" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/eaton_messs/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent'
                    }}
                    size="2x" />
            </Nav.Link>
        </Nav>
    );
}

export default SocialsTab;
