import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
    return (
        <Card style={{ width: "24rem" }}>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div style={{ marginBottom: "16px" }}> {/* Margin between image and buttons */}
                    <Card.Img variant="top" src={project.image} />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="success" href={project.deployed} style={{ marginRight: "15px" }}>Deployed</Button>
                    <Button variant="success" href={project.github}>GitHub</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;