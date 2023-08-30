import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface IconProps {
  icon: "GitHub" | "LinkedIn" | "Code" | "Computer" | "OpenInNew";
}

const Icons = Object.freeze({
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
  Code: <CodeIcon />,
  Computer: <ComputerIcon />,
  OpenInNew: <OpenInNewIcon />,
});

const Icon = ({ icon }: IconProps) => {
  return <div className="icon-container">{Icons[icon]}</div>;
};

export default Icon;
