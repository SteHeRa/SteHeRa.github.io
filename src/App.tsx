import React from "react";
import { Grid } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ProjectPage from "./pages/projectPage";
import ErrorPage from "./pages/errorPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
    { path: "/project/:projectId", element: <ProjectPage /> },
  ]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className="app-container"
    >
      <RouterProvider router={router} />
    </Grid>
  );
};

export default App;
