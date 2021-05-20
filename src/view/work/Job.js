import { Card, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyle = makeStyles(theme => ({
  job: () => {
    return {
      textAlign: "left",
      padding: "15px",
      color: "#282c34"
    }
  }
}))

const Job = ({company, location, position, time, content}) => {
  const [display, setDisplay] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    let points = [];
    for(var line in content) {
      points.push(<li>{content[line]}</li>);
    }
    setDisplay(points);
  }, [content]);

  return (
    <div>
      <Card className={classes.job} square elevation={5}>
        <Typography>
          <b>{company}</b>, {location} - {position}
        </Typography>
        <span style={{"fontSize": "0.7em"}}>{time}</span>
        <br />
        <hr style={{"color": "#ffa64d"}}/>
        <ul style={{fontSize: "0.8em"}}>
          {display}
        </ul>
      </Card>
    </div>
  );
}

export default Job;
