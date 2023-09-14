import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { ProjectCardProps } from ".";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { imageSrc, title, period, description, techStack, projectId } =
    project;

  return (
    <Link to={`/project/${projectId}`} className="project-card-link">
      <Card
        sx={{
          height: "100%",
        }}
      >
        <CardMedia
          sx={{
            aspectRatio: "16/9",
            backgroundSize: "contain",
          }}
          image={imageSrc}
          title={`${projectId}-project-card-image`}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="h6">{period}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography variant="body2">{`Tech Stack: ${techStack.join(
              ", "
            )}`}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
