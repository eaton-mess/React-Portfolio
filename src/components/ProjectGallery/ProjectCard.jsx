import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <a href={project.deployed}><Button variant="primary">Deployed Application</Button></a>
                <a href={project.github}><Button variant="primary">GitHub Repository</Button></a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;