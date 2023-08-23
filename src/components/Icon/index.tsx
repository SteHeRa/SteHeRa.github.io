import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface IconProps {
  icon: "GitHub" | "LinkedIn";
}

const Icons = Object.freeze({
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
});

const Icon = ({ icon }: IconProps) => {
  return <div className="icon-container">{Icons[icon]}</div>;
};

export default Icon;
