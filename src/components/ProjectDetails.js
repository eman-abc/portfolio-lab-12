import { useParams } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === parseInt(projectId, 10)); // Find the project by ID

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <p>{project.details}</p>
        </div>
    );
};

export default ProjectDetails;
