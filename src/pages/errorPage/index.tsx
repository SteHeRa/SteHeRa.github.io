import React from "react";
import { useRouteError } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

interface RouteError {
  status: number;
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <Typography variant="h1" textAlign="center">
          😱
        </Typography>
        <Typography variant="h1" textAlign="center">
          Oops!
        </Typography>
        <Typography variant="h3" textAlign="center">
          Sorry, an unexpected error has occured.
        </Typography>
        <Typography variant="h3" textAlign="center">
          {`${error.status}: ${error.statusText || error.message}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
