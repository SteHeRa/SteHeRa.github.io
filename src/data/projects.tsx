type ProjectPageContentObject =
  | { type: "Heading"; content: string }
  | { type: "Text"; content: string }
  | { type: "Image"; content: string[] };

interface ProjectLink {
  type: "app" | "repo" | "website";
  url: string;
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
    imageSrc: "Fika-thumbnail.png",
    links: [
      { type: "website", url: "https://www.fika.community/" },
      { type: "app", url: "https://app.fika.community/welcome" },
    ],
    content: [
      {
        type: "Text",
        content:
          "During my time at Fika I worked as a full stack engineer and owned the end-to-end development of both front-end and back-end features.",
      },
      {
        type: "Text",
        content:
          "I collaborated closely with designers and product team members to define feature scopes. I would then create detailed developer notes for those features which would allow tasks to be delegated between myself and fellow engineers.",
      },
      {
        type: "Text",
        content:
          "I consistently garnered positive feedback from our multidisciplinary team for my exceptional communication skills, particularly my ability to communicate complex technical concepts to non-technical team members.",
      },
      { type: "Heading", content: "What I worked on" },
      {
        type: "Text",
        content:
          "I worked on several different features while at Fika but some of the features I'm most proud of are the Fika Slack Integration and 'Content Assignment'.", // TODO: add stuff about team profiles once it's launched
      },
      {
        type: "Text",
        content:
          "I worked on the slack integration along with our junior engineer. While going through the process of setting up a development environment I was not satisfied with how long it was taking and recognised that other developers would need to go through this process in the future. In response I decided to write up some documentation for setting up a development environment for the slack integration in notion. I received positive feedback from colleagues when they came around to setting up their environments.",
      },
      {
        type: "Text",
        content:
          "Another feature I worked on that I was proud of was part of an endeavour to improve our user engagement by allowing users to share courses and team training exercises. The broad spec of the feature was that we needed a form where users could search for other users in their organisation, write a message and upon submitting the form we would send out emails with calls to action to try the course that had just been shared with them. Additionally, courses that had been shared with users would appear at the top of their home page.",
      },
      {
        type: "Image",
        content: ["Fika-screenshot-6.png", "Fika-screenshot-8.png"],
      },
      {
        type: "Text",
        content:
          "I took charge of the front-end development of this feature. In the interest of trying to get the form component out quickly we decided to use the MUI autocomplete component for the email search field and adapt it to our needs as it appeared to do almost everything we needed out of the box. However, after a considerable amount of development it became clear that it would be tricky to get the component to work with some of the more complicated form validation that we had specified. Nonetheless I managed to get the component and the rest of the feature out in time at the expense of leaving the component in a state that would be difficult to maintain, with lots of complicated react state interactions.",
      },
      {
        type: "Text",
        content:
          "The feature received a lot of positive feedback, and as a result we started planning a new feature that would be re-using the autocomplete email field. The front-end development of this new feature was being assigned to another developer, so I flagged that the component in its current state would be difficult to re-purpose and suggested some time should be planned into the feature to refactor the component. I offered to help the other developer with refactoring the component as I was already familiar with it, and it would likely speed up the process. We had a look at some packages that might be able to help simplify the component and spent a couple of sessions pair-programming to improve the component and successfully made it more maintainable and modular.",
      },
    ],
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
    imageSrc: "Synanetics-thumbnail.png",
    links: [{ type: "website", url: "https://synanetics.com/" }],
    content: [
      {
        type: "Text",
        content:
          "I spent two years working a Synanetics and it is were I cut my teeth as a professional software developer. Synanetics is a digital agency, so during my time there I worked on several different projects.",
      },
      {
        type: "Text",
        content:
          "I joined Synanetics as a member of the “applications team”. The applications team at Synanetics were responsible for creating applications that interacted with the integration engine and related services that had been developed by the integrations team. I already had experience developing user interfaces and RESTful API’s, but this is where I was first exposed to microservice architecture and cloud services.",
      },
      { type: "Heading", content: "What I worked on" },
      {
        type: "Text",
        content:
          "The main client project that I worked on consistently throughout my entire time at Synanetics was called the “Interweave Portal”. The portal was essentially a GUI and a series of microservices that would take aggregated patient data from our integrations engine and display it to healthcare professionals in a meaningful format. One of the most interesting features of the portal was its “Canvas and Panel” architecture which would allow developers to write their own “Panels” that would be able to read data from the “Canvas” by following our documentation and manipulate it however they wished.",
      },
      {
        type: "Text",
        content:
          "In my last month at Synanetics I had been tasked with taking the lead on a client project to create a portal that would users to enter patient demographics to find collections of patients whose data could then be used for research. The interesting part of this project was the requirement for a microservice that would pseudonymise patient data as it came in, so that none of the data would be traceable back to any individual. The pseudonymisation was achieved using the Google Cloud data loss prevention service.",
      },
      {
        type: "Text",
        content:
          "I faced challenges getting a proof of concept completed within the tight time frame largely due to bureaucracy around getting the correct authorisation to set up the application in GCP but through direct communication with stakeholders was able to get the project delivered on time with very positive feedback.",
      },
    ],
  },
  oudinvest: {
    projectId: "oudinvest",
    title: "OudInvest",
    period: "2022",
    description:
      "OudInvest was a concept a friend of mine had for a sharia compliant investing platform. I was asked to build a website to enable him to build a mailing list.",
    techStack: ["TypeScript", "React", "Next.js", "React Query", "MailChimp"],
    imageSrc: "OudInvest-thumbnail.png",
    links: [{ type: "repo", url: "https://github.com/SteHeRa/OudInvest" }],
    content: [
      {
        type: "Text",
        content:
          "A friend of mine who works in credit sales with a lot of clients in the middle east had approached me about a business idea he had for a sharia compliant investing platform. He wanted to initially launch something to try and get a gauge on potential interest that he could then present to investors. I had been looking for an excuse to build a project using Next.js so I offered to build him a website that would enable him to build a mailing list with MailChimp and would also show users their position in a queue to gain access to the app when it launched.",
      },
      {
        type: "Text",
        content:
          "We went through several different iterations of design for the landing page and general style of the website and landed on something that we were both very happy with. I had finished the project and had it in a state that I was happy to go live with but at this point my friend had lost interest and we never ended up deploying it anywhere. It’s a bit of a shame but as my aim from the project was to get some exposure to Next.js I didn’t really mind.",
      },
    ],
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
    imageSrc: "Zapp-thumbnail.png",
    links: [{ type: "repo", url: "https://github.com/ilyadusoleil/zapp" }],
    content: [
      {
        type: "Text",
        content:
          "This was my final project for the software development bootcamp that I attended in 2020. I worked on this project with two other developers, and it was the first time I had collaborated with other developers on a larger project. We built the app over the course of two weeks and followed agile development practices and rituals over the two-week development window.",
      },
      {
        type: "Text",
        content:
          "We had decided to build a bug-tracking app, because we thought it would give us the opportunity to build something useful and we would have a lot of control over the scope of the project, being able to get an MVP out quickly and then add/drop more features as we went.",
      },
      {
        type: "Text",
        content:
          "I lead the back-end development of the project setting up RESTful API endpoints and a PostgreSQL database. I learned a lot about collaborating with other developers and scoping projects to successfully launch in tight timeframes.",
      },
    ],
  },
  deepsee: {
    projectId: "deepsee",
    title: "DEEPSEE",
    period: "2020",
    description:
      "DEEPSEE is a photo sharing website for scuba divers that uses geographical metadata to link images to popular dives sites.",
    techStack: ["React", "Mapbox", "Mongoose", "Express", "Cloudinary"],
    imageSrc: "DEEPSEE-thumbnail.png",
    links: [{ type: "repo", url: "https://github.com/SteHeRa/DEEPSEE" }],
    content: [
      {
        type: "Text",
        content:
          "This was my solo project for the software development bootcamp that I attended in 2020. I’m a keen scuba diver and had some negative experiences with digital divers’ logbooks in the past. I had also recognised that when visiting dive shops to see what guided dives they would be doing on a given day, it was difficult to get accurate information about what a dive would be like. So, I thought a photo sharing website that also acted as a divers log book would be fun to build and something I might actually use.",
      },
    ],
  },
  "sorting-algorithm": {
    projectId: "sorting-algorithm",
    title: "Sorting Algorithm Visualiser",
    period: "2020",
    description:
      "This is a program that animates and visualises the process of various sorting algorithm's sorting a randomly generated set of bars in a bar chart.",
    techStack: ["JavaScript", "HTML/CSS", "Bootstrap"],

    imageSrc: "Sorting-thumbnail.png",
    links: [],
    content: [
      {
        type: "Text",
        content:
          "At the beginning of 2020 I had just gotten back from backpacking around South East Asia and was teaching myself how to code. This is one of the first projects that I worked on. I built this to try and give myself a bit of exposure to some sorting algorithms because I thought it would help me get a job.",
      },
      {
        type: "Text",
        content:
          "Even now I’m actually still really proud of how this looks when it’s doing the quick sort. The code is messy and I’m sure I could do a much better job of it now, it’s kind of surprising it works as reliably as it does. It’s a pretty nice reminder of how hard I was working to get myself a job in software.",
      },
    ],
  },
  "pathfinding-algorithm": {
    projectId: "pathfinding-algorithm",
    title: "Pathfinding Algorithm Visualiser",
    period: "2020",
    description:
      "This is a program that animates and visualises the process of 'Djikstra's Algorithm' finding a shortest path between two points.",
    techStack: ["JavaScript", "JQuery", "HTML/CSS", "Bootstrap"],
    imageSrc: "Pathfinder-thumbnail.png",
    links: [],
    content: [
      {
        type: "Text",
        content:
          "At the beginning of 2020 I had just gotten back from backpacking around South East Asia and was teaching myself how to code. This is one of the first projects that I worked on. I built this to try and give myself a bit of exposure to some pathfinding algorithms because I thought it would help me get a job.",
      },
      {
        type: "Text",
        content:
          "Even now I’m actually still really proud of this. The code is messy and I’m sure I could do a much better job of it now, it’s kind of surprising it works as reliably as it does. It’s a pretty nice reminder of how hard I was working to get myself a job in software.",
      },
    ],
  },
};

export default projectPages;
