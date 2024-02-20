import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyProjects({ project }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <a href=" "> <Button variant="primary">Repo: {project.github}</Button></a>
                <a href=" "> <Button variant="primary">Deployed Site: {project.deployed}</Button></a>
            </Card.Body>
        </Card>
    );
}

export default MyProjects;