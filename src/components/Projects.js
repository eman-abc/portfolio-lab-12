// src/components/Projects.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import projects from "../projects";

const Projects = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-4">Projects</h1>
            <div className="list-group">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="list-group-item list-group-item-action"
                    >
                        {project.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
