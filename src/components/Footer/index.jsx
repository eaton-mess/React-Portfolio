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
                <Card.Text className="footerContent">
                    © Lauren Eaton 2024
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CustomFooter;
