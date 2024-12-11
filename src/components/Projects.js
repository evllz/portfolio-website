import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/skillSet";

export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow:'column',
        justifyContent: "center",
        width: "80%",
        paddingLeft: "10%",
      }}>
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            key={project.id}
          />
        );
      })}
    </div>
  );
}
