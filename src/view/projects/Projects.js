import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Project from "./Project";
import { cv, exoplanetSearch, foodInfo, ga, mis } from "../../constants/ProjectContent";

const useStyle = makeStyles(theme => ({
  projectsClass: () => {
    return {
      height: "395px",
      maxHeight: "395px",
      backgroundColor: "rgb(219, 212, 212)",
      color: "#282c34",
      padding: "20px",
      textAlign: "center",
      overflowY: "scroll"
    }
  },
  headClass: () => {
    return {
      margin: "auto",
      color: "#282c34"
    };
  }
}))

const Projects = () => {
  const classes = useStyle();
  return (
    <div className="projects">
      <Card className={classes.projectsClass} square elevation={10}>
        <Typography className={classes.headClass} variant="h4">
          Projects
        </Typography>
        <br />
        <div className="project-list">
          <Project 
            name={mis.name}
            field={mis.field}
            content={mis.content}
            link={mis.link}
          />
          <br />
          <Project 
            name={foodInfo.name}
            field={foodInfo.field}
            content={foodInfo.content}
            link={foodInfo.link}
          />
          <br />
          <Project 
            name={exoplanetSearch.name}
            field={exoplanetSearch.field}
            content={exoplanetSearch.content}
            link={exoplanetSearch.link}
          />
          <br />
          <Project 
            name={cv.name}
            field={cv.field}
            content={cv.content}
            link={cv.link}
          />
          <br />
          <Project 
            name={ga.name}
            field={ga.field}
            content={ga.content}
            link={ga.link}
          />
          <br />
        </div>
      </Card>
    </div>
  );
}

export default Projects;
