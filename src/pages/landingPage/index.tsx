import React from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "../../components/projectCard";
import Icon from "../../components/Icon";
import { projects } from "../../data";
import { ScrollRestoration, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Grid container p={15} gap={6}>
      <ScrollRestoration />
      <Grid item container xs={12} spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h1">Stephen Head-Rapson</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ fontFamily: "Poppins" }}>
            Welcome to my portfolio
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            <b>I am a Full Stack Software Engineer</b> living in London. I am
            experienced with Javascript technologies such as Typescript, React,
            Express, Koa, and Node.js as well as SQL & NoSQL databases. I am a
            natural born problem solver with a burning desire to make things and
            keep learning new skills. When i'm not working you can find me in
            the workshop messing about with Arduinos, woodworking, metalworking,
            goldsmithing or making music with friends.
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent="flex-start" spacing={3}>
          <Grid item container xs="auto" alignItems="center" gap={2}>
            <Icon icon="GitHub" />
            <Typography variant="body1">
              Check out my <a href="https://github.com/SteHeRa">Github</a>
            </Typography>
          </Grid>
          <Grid item container xs="auto" alignItems="center" gap={2}>
            <Icon icon="LinkedIn" />
            <Typography variant="body1">
              Check out my{" "}
              <a href="https://www.linkedin.com/in/stephen-head-rapson/">
                LinkedIn
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={6}
        alignItems="center"
        justifyContent="center"
      >
        {Object.values(projects).map((project) => (
          <Grid item xs={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} spacing={6} pt={8}>
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
