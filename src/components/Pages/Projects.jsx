import ProjectCard from '../ProjectGallery/ProjectCard';
import projects from '../../projects.json';

const Projects = () => {
    return (
        <>
            <h1>portfolio</h1>

            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}

        </>
    )
}

export default Projects;