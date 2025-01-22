import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map(({ id, name, description, technologies }) => (
      <ProjectItem
        key={id} 
        name={name}
        description={description}
        technologies={technologies}
      />
    ))}
</div>
    </div>
  );
}

export default ProjectList;