import React from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import ProjectCard from "../../components/projectCard";
import Icon from "../../components/Icon";
import { projects } from "../../data";
import { ScrollRestoration, Link } from "react-router-dom";

const LandingPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      p={{ xs: 5, sm: 15 }}
      gap={6}
      alignItems="center"
      justifyContent="center"
    >
      <ScrollRestoration />
      <Grid item container xs={12} sm={10} lg={8} spacing={6}>
        <Grid
          container
          item
          xs={12}
          justifyContent={{ xs: "flex-start", lg: "space-around" }}
          alignItems="center"
          gap={{ xs: 0, lg: 1 }}
        >
          {matches ? (
            <Grid xs={6} lg={4} display={{ xs: "none", md: "block" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  borderRadius: "100%",
                }}
              >
                <img
                  src="/Me.jpg"
                  style={{
                    marginTop: "-35%",
                    marginLeft: "-30%",
                    height: "140%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Grid>
          ) : null}
          <Grid xs={12} lg={7} pt={{ xs: 0, md: 4, lg: 0 }}>
            <Typography variant="h2">
              Hi, I'm Ste. Full-stack developer and maker
            </Typography>
          </Grid>
          {matches ? null : (
            <Grid
              container
              item
              justifyContent="center"
              alignItems="center"
              xs={12}
              pt={4}
            >
              <Grid xs={9}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    overflow: "hidden",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="/Me.jpg"
                    style={{
                      marginTop: "-35%",
                      marginLeft: "-30%",
                      height: "140%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ fontFamily: "Poppins" }}>
            Welcome to my portfolio
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="body1">
            <b>I'm a sociable, hard working, full-stack developer</b> with a
            wealth of experience in JavaScript technologies who arguably has too
            many hobbies. I am a natural born problem solver with a burning
            desire to make things and keep learning new skills.
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent="flex-start" spacing={3}>
          <Grid item container xs="auto" alignItems="center" gap={2}>
            <Icon icon="GitHub" />
            <Typography variant="body1">
              Check out my{" "}
              <a href="https://github.com/SteHeRa" target="_blank">
                Github
              </a>
            </Typography>
          </Grid>
          <Grid item container xs="auto" alignItems="center" gap={2}>
            <Icon icon="LinkedIn" />
            <Typography variant="body1">
              Check out my{" "}
              <a
                href="https://www.linkedin.com/in/stephen-head-rapson/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={10}
        lg={8}
        spacing={6}
        alignItems="stretch"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5" style={{ fontFamily: "Poppins" }}>
            Check out what I've been working on
          </Typography>
        </Grid>
        {Object.values(projects).map((project) => (
          <Grid item xs={12} lg={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={10} lg={8} spacing={6} pt={8}>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ fontFamily: "Poppins" }}>
            Let's build something together
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            Feel free to reach out if you're looking for a developer, have a
            question or just want to connect.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            <Link to="mailto: stephenheadrapson@gmail.com">
              stephenheadrapson@gmail.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
