import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

function CustomFooter() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Card className="footer">
            <Card.Body className="customFooter">
                <Button onClick={handleScrollToTop} className="scrollToTopButton" variant="outline-dark">Top</Button>
                <p className="footerText">© Lauren Eaton 2024</p>
            </Card.Body>
        </Card>
    );
}

export default CustomFooter;
