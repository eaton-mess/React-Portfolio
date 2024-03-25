import Card from "react-bootstrap/Card";
import projects from '../../projects.json';
import { Row, Col } from 'react-bootstrap';
import { Button } from "react-bootstrap";

const Projects = () => {
    return (
        <>
            <h1 className="text-center">Projects Gallery</h1>
            <div className="text-center m-3">
                <h5>
                    Discover my portfolio!
                </h5>
            </div>
            <Row xs={1} sm={1} md={2} className="g-4">
                {projects.map((project) => (
                    <Col key={project.id}>
                        <Card
                            className="h-100 projectCard"
                            style={{ 
                            minWidth: "150px", 
                            margin: "2em",
                            border: "1px solid black" }}
                        >
                            <Card.Body style={{ paddingBottom: "0.5em", marginBottom: "-4em" }}>
                                <Card.Title style={{ marginBottom: "0.5em", color: "black" }}>
                                    {project.title}
                                </Card.Title>
                                <Card.Text style={{ marginBottom: "-1em" }}>
                                    {project.description}
                                </Card.Text>
                            </Card.Body>

                            <Card.Img
                                variant="top"
                                src={project.image}
                                style={{
                                    height: "300px",
                                    objectFit: "cover",
                                    marginTop: "-1em", // Adjust this value as needed
                                }}
                            />


                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    variant="success"
                                    href={project.deployed}
                                    target="_blank"
                                    style={{
                                        border: "none",
                                        margin: "10px",
                                        backgroundColor: "black",
                                    }}
                                >
                                    Deployed app
                                </Button>
                                <Button
                                    variant="success"
                                    href={project.github}
                                    target="_blank"
                                    style={{
                                        border: "none",
                                        margin: "10px",
                                        backgroundColor: "black",
                                    }}
                                >
                                    GitHub repo
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Projects;
