import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "dotenv/config";
import "@fontsource/roboto";
import "@fontsource/poppins";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
