import React from "react";
import "../projects/style.css";
import ProjectCard from "../projects/projectcard";
let projectdata = [
  {
    image: "/demo.png",
    name: "EAT-DA-BURGER",
    description: `This project follows the MVC design pattern.It is a fun app
              that allows you to enter any burger you want and keep track of
              which ones you have devoured and which ones you are yet to
              eat.`,
    github_link: "https://github.com/loisaleghe/burgers",
    deployed_link: "https://loisaleghe-burger.herokuapp.com/",
  },
  {
    image: "/noteTaker.jpeg",
    name: "NOTE-TAKER",
    description: `This project uses express to create API routes to GET, POST
      and DELETE an object, which essentially follows the CRUD
      method.The purpose of this app is to write, save, retrieve and
      delete note data from a JSON file.`,
    github_link: "https://github.com/loisaleghe/Note-Taker",
    deployed_link: "https://damp-island-49467.herokuapp.com/",
  },

  {
    image: "/Taskit.jpeg",
    name: "TASK.IT",
    description: `The purpose of this project is to help users become more
    organized with their ideas, activities and tasks. The app to
    add,edit, delete, update and save tasks, such that when
    reloaded the tasks still exists.`,
    github_link: "https://github.com/loisaleghe/Project2",
    deployed_link: "https://sleepy-earth-90670.herokuapp.com/",
  },

  {
    image: "/vocabulary.jpeg",
    name: "VOCABULARY BUILDER",
    description: `The purpose of this project is to help improve an individual's
  vocabulary by providing various definitions of an inserted
  word along side at most ten synonyms for better understanding.
  The app consists of both frontend and backend with at least
  two APIs used.`,
    github_link: "https://github.com/loisaleghe/project1",
    deployed_link: "https://loisaleghe.github.io/project1/",
  },

  {
    image: "/scheduler.png",
    name: "WORK DAY SCHEDULER",
    description: `This app is a simple calendar application that allows the user to
  save events for each hour of the day. The Scheduler app will run in the
  browser and feature dynamically updated HTML and CSS powered
  by jQuery. It heps keep user organized between 9am - 9pm.`,
    github_link: "https://github.com/loisaleghe/workdayScheduler",
    deployed_link: "https://loisaleghe.github.io/workdayScheduler/",
  },
];

function Projects() {
  return (
    <div className="projectpg">
      <h1 className="projecttitle"> My Projects</h1>
      <div className="container">
        <div className="row">
          {projectdata.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
