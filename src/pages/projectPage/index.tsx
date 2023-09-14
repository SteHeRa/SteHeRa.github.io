import React from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  ScrollRestoration,
} from "react-router-dom";

import { Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { projects } from "../../data";
import Icon from "../../components/Icon";

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  if (!projectId) {
    return <Navigate to="/" />;
  }

  const projectContent = projects[projectId];

  if (!projectContent) {
    return <Navigate to="/" />;
  }

  const { imageSrc, title, period, description, techStack, content, links } =
    projectContent;

  return (
    <Grid
      container
      p={15}
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <ScrollRestoration />
      <Grid item xs={12}>
        <IconButton
          aria-label="go-back"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item container xs={8} spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h1">{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ fontFamily: "Poppins" }}>
            {period}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ fontFamily: "Poppins" }}>
            {techStack.join(", ")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img
            src={`/${imageSrc}`}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ fontFamily: "Poppins" }}>
            {description}
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent="flex-start" spacing={3}>
          {links.map((link) => {
            if (link.type === "app") {
              return (
                <Grid
                  item
                  container
                  xs={12}
                  md="auto"
                  alignItems="center"
                  gap={2}
                >
                  <Icon icon="Computer" />
                  <Typography variant="body1">
                    Check out the app <a href={link.url}>here</a>
                  </Typography>
                </Grid>
              );
            }
            if (link.type === "website") {
              return (
                <Grid
                  item
                  container
                  xs={12}
                  md="auto"
                  alignItems="center"
                  gap={2}
                >
                  <Icon icon="OpenInNew" />
                  <Typography variant="body1">
                    Check out the project website <a href={link.url}>here</a>
                  </Typography>
                </Grid>
              );
            }
            if (link.type === "repo") {
              return (
                <Grid
                  item
                  container
                  xs={12}
                  md="auto"
                  alignItems="center"
                  gap={2}
                >
                  <Icon icon="Code" />
                  <Typography variant="body1">
                    Check out the repo <a href={link.url}>here</a>
                  </Typography>
                </Grid>
              );
            }
          })}
        </Grid>
        <Grid item container xs={12} spacing={3}>
          {content.map((contentItem) => {
            if (contentItem.type === "Heading") {
              return (
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ fontWeight: 600 }}>
                    {contentItem.content}
                  </Typography>
                </Grid>
              );
            }
            if (contentItem.type === "Text") {
              return (
                <Grid item xs={12}>
                  <Typography variant="body1">{contentItem.content}</Typography>
                </Grid>
              );
            }
            if (contentItem.type === "Image") {
              return (
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={10}
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {contentItem.content.map((imageSrc) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          lg={Math.max(12 / contentItem.content.length, 6)}
                        >
                          <a href={`/${imageSrc}`} target="_blank">
                            <img
                              src={`/${imageSrc}`}
                              style={{
                                width: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </a>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectPage;
