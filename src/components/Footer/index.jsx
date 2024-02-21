import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';

function CustomFooter() {
    return (
        <>
        <Card className="footer">
            <Card.Body className="customFooter">
                <Button href="/" className="homeButton" variant="outline-dark">Home</Button>
                <Card.Text className="footerContent">
                        © Lauren Eaton 2024 
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default CustomFooter;
