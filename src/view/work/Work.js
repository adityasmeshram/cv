import { Card, makeStyles, Typography } from '@material-ui/core';
import { amazon } from "../../constants/JobExp";
import React from 'react';
import Job from './Job';

const useStyle = makeStyles(theme => ({
  workClass: () => {
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
}));

const Work = () => {
  const classes = useStyle();
  return (
    <div className="work">
      <Card className={classes.workClass} square elevation={10}>
        <Typography className={classes.headClass} variant="h4">
          Work Experience
        </Typography>
        <br />
        <Job 
          company={amazon.company} 
          location={amazon.location} 
          position={amazon.position}
          time={amazon.time}
          content={amazon.content}
        />
        <br />
      </Card>
    </div>
  );
}

export default Work;
