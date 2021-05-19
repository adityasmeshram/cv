import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(theme => ({
  schoolCardClass: () => {
    return {
      padding: "15px",
      textAlign: "left",
      color: "#282c34",
      fontSize: "0.7em"
    }
  }
}))

const School = ({name, location, qualification, time, grades}) => {
  const classes = useStyle();
  return (
    <div className="school">
      <Card className={classes.schoolCardClass} square elevation={10}>
        <Typography>
          <b>{name}</b>, {location}
          <br />
          <hr style={{color: "#ffa64d"}} />
          <i>{qualification}</i>
        </Typography>
        <div style={{"fontSize": "0.8em", "display": "inline-block"}}>{time}</div>
        <div style={{"float": "right"}}><b>{grades}</b></div>
      </Card>
    </div>
  );
}

export default School;
