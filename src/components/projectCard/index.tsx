import React from "react";
import ProjectCard from "./projectCard";
import { Project } from "../../data/projects";

export interface ProjectCardProps {
  project: Project;
}

const ProjectCardContainer = ({ project }: ProjectCardProps) => {
  return <ProjectCard project={project} />;
};

export default ProjectCardContainer;
