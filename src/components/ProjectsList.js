// src/components/ProjectsList.js
import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects"; // Import the projects data

const ProjectsList = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
