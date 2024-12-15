// src/components/ProjectsPage.js
import React, { useState } from "react";

const ProjectsPage = ({ projects, onSelectProject }) => {
    return (
        <div className="container">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-item"
                        onClick={() => onSelectProject(index)}
                        style={{ cursor: "pointer", marginBottom: "20px" }}
                    >
                        <h4>{project.title}</h4>
                        <p>{project.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
