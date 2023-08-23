import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { ProjectCardProps } from ".";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { imageSrc, title, description, techStack, projectId } = project;

  return (
    <Link to={`/project/${projectId}`}>
      <Paper>
        <Card>
          <CardMedia
            sx={{
              height: 250,
              margin: "10px",
              backgroundSize: "contain",
            }}
            image={imageSrc}
            title=""
          />
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="body1">{description}</Typography>
              <Typography variant="body2">{`Tech Stack: ${techStack.join(
                ", "
              )}`}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Link>
  );
};

export default ProjectCard;
