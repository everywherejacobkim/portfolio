import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Pomodee from '../../img/project/pomodee.png';
import HandyChef from '../../img/project/handyChef.png';
import MyDailyNote from '../../img/project/myDailyNote.png';
import './projects.css';

const Projects = ({ projectRef, projectIsVisible }) => {

  const projects = [
    {
      title: "Handy Chef",
      image: HandyChef,
      stack: "React Native | Node.js | Express.js | MongoDB",
      desc: "HandyChef is a cross-platform mobile app which connects independent chefs with clients to bring a private restaurant experience to the clients’ homes at an affordable rate.",
      url: "https://www.handychef.ca"
    },
    {
      title: "Pomodee",
      image: Pomodee,
      stack: "React | Node.js | Express.js | MongoDB",
      desc: "Pomodee is a fun-and-network-driven timer app based on pomodoro technique which connects with others to collaborate in real-time study & work sessions.",
      url: "https://63c9adbfe71a072600c4d8af--charming-chebakia-f3ec0c.netlify.app/home"
    },
    {
      title: "My Daily Note",
      image: MyDailyNote,
      stack: "React | PWA",
      desc: "My Daily Note offers a daily to-do section, memo recording, and motivational quotes, with a user-friendly interface to help users track their activities, capture notes, and stay motivated.",
      url: "https://eloquent-begonia-351848.netlify.app"
    },
  ]

  return (
    <section id="projects" ref={projectRef}>
      <h4>Explore</h4>
      <h2>Web & Mobile Projects</h2>
      <div className={projectIsVisible ? "animateContainer" : ''}>
        <div className="container projects__container">
          {projects.map((project) => (
            <div className="project__card">
              <a
                key={project.title}
                href= {project.url}
                target="_blank"
                rel="noreferrer">
                <Card elevation={5}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image= {project.image}
                    alt="my projects"
                  />
                  <CardContent className='content-wrapper'>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div" color="#013a63">
                      {project.stack}
                    </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <div className='desc-wrapper'>
                          {project.desc}
                        </div>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Card>
              </a>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Projects
