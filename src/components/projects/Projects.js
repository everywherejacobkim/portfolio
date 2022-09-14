import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './projects.css';


const Projects = () => {

  const projects = [
    {
      title: "Pomodee",
      image: "/images/project/pomodee.png",
      stack: "React.js | Node.js | Express.js | MongoDB",
      desc: "Pomodee is a fun-and-network-driven timer app based on pomodoro technique which connects with others to collaborate in real-time study & work sessions.",
      url: "https://pomodee.com"
    },
    {
      title: "Handy Chef",
      image: "/images/project/handyChef.png",
      stack: "React Native | Node.js | Express.js | MongoDB",
      desc: "HandyChef is a cross-platform mobile app which connects independent chefs with clients to bring a private restaurant experience to the clients’ homes at an affordable rate.",
      url: "https://www.handychef.ca"
    },
  ]

  return (
    <section id="projects">
      <h5>Explore</h5>
      <h2>Web & Mobile Projects</h2>
      <div className="container projects__container">
        <div className="project__card">
          {projects.map((project) => (
            <a
              href= {project.url}
              target="_blank"
              rel="noreferrer">
              <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image= {project.image}
                  alt="my projects"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div" color="#013a63">
                    {project.stack}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              </CardActions>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
