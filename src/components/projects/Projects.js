import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import './projects.css';
import Pomodee from '../../img/project/pomodee.png';
import HandyChef from '../../img/project/handyChef.png';


const Projects = ({ projectRef, projectIsVisible }) => {

  const projects = [
    {
      title: "Pomodee",
      image: Pomodee,
      stack: "React.js | Node.js | Express.js | MongoDB",
      desc: "Pomodee is a fun-and-network-driven timer app based on pomodoro technique which connects with others to collaborate in real-time study & work sessions.",
      url: "https://pomodee.com"
    },
    {
      title: "Handy Chef",
      image: HandyChef,
      stack: "React Native | Node.js | Express.js | MongoDB",
      desc: "HandyChef is a cross-platform mobile app which connects independent chefs with clients to bring a private restaurant experience to the clients’ homes at an affordable rate.",
      url: "https://www.handychef.ca"
    },
  ]

  return (
    <section id="projects" ref={projectRef}>
      <h4>Explore</h4>
      <h2>Web & Mobile Projects</h2>
      <div className={projectIsVisible ? "animateContainer" : ''}>
        <div className="container projects__container">
          <div className="project__card">
            {projects.map((project) => (
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
            ))}
          </div>
          </div>
        </div>
    </section>
  )
}

export default Projects
