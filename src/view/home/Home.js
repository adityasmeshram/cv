import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import "./Home.css";

const useSytle = makeStyles(theme => ({
  paperClass: () => {
    return {
      backgroundColor: "rgb(219, 212, 212)",
      color: "#282c34",
      height: "395px",
      padding: "20px",
      overflowY: "scroll"
    }
  }, 
  headClass: () => {
    return {
      margin: "auto",
      color: "#282c34"
    };
  },
  contentPaperClass: () => {
    return {
      padding: "15px"
    }
  }
}))

function Home() {
  const classes = useSytle();
  return (
    <div className="home">
      <Paper className={classes.paperClass} square elevation={10}>
        <Typography className={classes.headClass} variant="h4">
          About Me
        </Typography>
        <br />
        <Card className={classes.contentPaperClass} square elevation={10}>
          <Typography>
            <p className="about">
              I'm a Software Engineer skilled at Java, JavaScript, React.js, Node.js, Python, C++, 
              Backend Development, Full Stack Web Development, API Development and Data Science with a 
              strong hold on Algorithms and Data Structures. I have worked with SQL and NoSQL Databases, AWS. 
              Designing, Developing and Deploying scalable systems fascinates me.
            </p>
          </Typography>
        </Card>
        <br />
      </Paper>
    </div>
  )
}

export default Home