import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SocialsTab = () => {
    return (
        <Nav className="ml-auto" style={{ position: 'fixed', top: '20px', right: '20px', width: '5cm', background: 'black', borderRadius: '10px' }}>
            <Nav.Link>
                <FontAwesomeIcon icon={faGithubSquare} />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faInstagramSquare} />
            </Nav.Link>
            <Nav.Link>
                <FontAwesomeIcon icon={faBars} />
            </Nav.Link>
        </Nav>
    );
}

export default SocialsTab;
