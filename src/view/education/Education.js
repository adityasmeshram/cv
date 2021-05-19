import { Card, makeStyles, Typography } from '@material-ui/core';
import { dacn, iitism, somalwar } from "../../constants/Schools";
import React from 'react';
import School from './School';

const useStyle = makeStyles(theme => ({
  eduClass: () => {
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

const Education = () => {
  const classes = useStyle();
  return (
    <div>
      <Card className={classes.eduClass} square elevation={10}>
        <Typography className={classes.headClass} variant="h4">
          Education
        </Typography>
        <br />
        <School 
          name={iitism.name}
          location={iitism.location}
          qualification={iitism.qualification}
          time={iitism.time}
          grades={iitism.grades}
        />
        <br />
        <School 
          name={dacn.name}
          location={dacn.location}
          qualification={dacn.qualification}
          time={dacn.time}
          grades={dacn.grades}
        />
        <br />
        <School 
          name={somalwar.name}
          location={somalwar.location}
          qualification={somalwar.qualification}
          time={somalwar.time}
          grades={somalwar.grades}
        />
        <br />
      </Card>
    </div>
  );
}

export default Education;
