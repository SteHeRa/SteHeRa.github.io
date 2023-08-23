type ProjectPageContentObject =
  | { type: "Text"; text: string }
  | { type: "Image"; imageSrc: string };

interface ProjectLink {
  type: "app" | "github";
  link: string;
}

export interface Project {
  projectId: string;
  title: string;
  period: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  links: ProjectLink[];
  content: ProjectPageContentObject[];
}

const projectPages: { [projectId: string]: Project } = {
  fika: {
    projectId: "fika",
    title: "Fika",
    period: "2022-2023",
    description:
      "Fika is on a mission to create a better you, better team culture, and better places to work. Fika is a content platform that provides training for individuals and teams to improve mental fitness and promote a better culture within teams.",
    techStack: [
      "React",
      "React Native",
      "Redux",
      "Node.js",
      "Next.js",
      "Firebase",
    ],
    imageSrc: "Fika-logo1.png",
    links: [],
    content: [],
  },
  oudinvest: {
    projectId: "oudinvest",
    title: "OudInvest",
    period: "2022",
    description:
      "OudInvest was a concept a friend of mine had for a sharia compliant investing platform. I was asked to build a website to enable him to build a mailing list.",
    techStack: ["TypeScript", "React", "Next.js", "React Query", "MailChimp"],
    imageSrc: "OudInvest-logo.png",
    links: [],
    content: [],
  },
  synanetics: {
    projectId: "synanetics",
    title: "Synanetics",
    period: "2020-2022",
    description:
      "Synanetics provides professional IT services to NHS Trusts, CCGs, County Councils and others involved in the provision of healthcare.",
    techStack: [
      "React",
      "Redux",
      "Typescript",
      "Web Components",
      "Node.js",
      "Express",
      "PostgreSQL",
      "GCP",
      "Docker",
    ],
    imageSrc: "Synanetics-logo.png",
    links: [],
    content: [],
  },
  zapp: {
    projectId: "zapp",
    title: "Zapp Bug Tracker",
    period: "2020",
    description:
      "Zapp is an app for managing issues in the software development life cycle. Zapp is designed with small teams in mind and aims to make issue tracking simple and straightforward.",
    techStack: [
      "React",
      "Typescript",
      "React Query",
      "Tailwind CSS",
      "PostgreSQL",
      "Express",
      "Passport",
    ],
    imageSrc: "Zapp-readme-header.png",
    links: [],
    content: [],
  },
  deepsee: {
    projectId: "deepsee",
    title: "DEEPSEE",
    period: "2020",
    description:
      "DEEPSEE is an app designed to help scuba divers make informed decisions about their next dives and aims to replace the conventional divers log book. This is achieved by providing a database of user submitted images & metadata of dives that have been recently logged all packaged in a sleek and functional UI.",
    techStack: ["React", "Mapbox", "Mongoose", "Express", "Cloudinary"],
    imageSrc: "DEEPSEE-screenshot-1.png",
    links: [],
    content: [],
  },
  "sorting-algorithm": {
    projectId: "sorting-algorithm",
    title: "Sorting Algorithm Visualiser",
    period: "2020",
    description:
      "This is a program that animates and visualises the process of various sorting algorithm's sorting a randomly generated set of bars in a bar chart.",
    techStack: ["JavaScript", "HTML/CSS", "Bootstrap"],

    imageSrc: "sorting-screenshot.png",
    links: [],
    content: [],
  },
  "pathfinding-algorithm": {
    projectId: "pathfinding-algorithm",
    title: "Pathfinding Algorithm Visualiser",
    period: "2020",
    description:
      "This is a program that animates and visualises the process of 'Djikstra's Algorithm' finding a shortest path between two points.",
    techStack: ["JavaScript", "JQuery", "HTML/CSS", "Bootstrap"],
    imageSrc: "pathfinder-screenshot.png",
    links: [],
    content: [],
  },
};

export default projectPages;
