import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SocialsTab = () => {
    return (
        <Nav className="ml-auto" style={{ position: 'fixed', top: '0', right: '20px', maxWidth: '15em', background: 'black' }}>
            <Nav.Link>
                <FontAwesomeIcon icon={faGithubSquare}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent'
                    }}
                    size="2x" />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faLinkedin}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent'
                    }}
                    size="2x" />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faInstagramSquare}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent'
                    }}
                    size="2x" />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faBars}
                    style={{
                        color: 'white',
                        backgroundColor: 'transparent',
                    }}
                    size="2x" />
            </Nav.Link>
        </Nav>
    );
}

export default SocialsTab;
