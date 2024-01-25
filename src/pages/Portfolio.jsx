import { Anchor, SimpleGrid } from "@mantine/core";
import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      name: "Executive Airways",
      img: "/assets/Screenshot 2023-12-07 154309.png",
      deployed: "https://executive-airways-670193b59853.herokuapp.com/",
      repo: "https://github.com/nathanphan21/Executive-Airway-Homepage",
      description: "A mock homepage for a fictional airline.",
    },

    {
      name: "Just Another Text Editor",
      img: "/assets/UPDATED-JATE.png",
      deployed: "https://just-another-text-editor-client.onrender.com/",
      repo: "https://github.com/ThirstyWombat/Just-Another-Text-Editor",
      description:
        "A PWA text editor which can be installed and functions offline.",
    },

    {
      name: "Coding Quiz",
      img: "/assets/CODING-QUIZ.png",
      deployed: "https://thirstywombat.github.io/Coding-Quiz/index.html",
      repo: "https://github.com/ThirstyWombat/Coding-Quiz",
      description: "A coding quiz webpage where you can test your knowledge.",
    },

    {
      name: "Note Taker",
      img: "/assets/Screenshot 2023-11-06 152805.png",
      deployed: "https://vb-note-taker-b760620412ce.herokuapp.com/",
      repo: "https://github.com/ThirstyWombat/Note-Taker",
      description:
        " A note taker app which stores user created notes onto a server created with express.",
    },

    {
      name: "Password Generator",
      img: "/assets/password-generator.png",
      deployed: "https://thirstywombat.github.io/Password-Generator/",
      repo: "https://github.com/ThirstyWombat/Password-Generator",
      description:
        " A password generator that uses user specified criteria to generate a random password.",
    },

    {
      name: "Workday Scheduler",
      img: "/assets/Screenshot 2023-09-25 174523.png",
      deployed: "https://thirstywombat.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/ThirstyWombat/Work-Day-Scheduler",
      description:
        " A simple calender app for scheduling every hour of your workday.",
    },
  ];

  const items = projects.map((project, index) => {
    return (
      <div key={index}>
        <Project
          name={project.name}
          deployed={project.deployed}
          img={project.img}
          description={project.description}
        />
        <Anchor href={project.repo} underline="hover">
          Click Here to view the project repo.
        </Anchor>
      </div>
    );
  });
  return <SimpleGrid cols={3}>{items}</SimpleGrid>;
}
