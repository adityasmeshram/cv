import { Card, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyle = makeStyles(theme => ({
  contentClass: () => {
    return {
      textAlign: "left",
      padding: "20px"
    }
  }
}))

const Project = ({name, field, content, link}) => {
  const [display, setDisplay] = useState([]);
  const classes = useStyle();

  useState(() => {
   let disp = [];
   for(var line in content) {
     disp.push(<li>{content[line]}</li>);
   }
   setDisplay(disp);
  }, [content, display]);

  return (
    <div className="project">
      <Card className={classes.contentClass} sqaure elevation={5}>
        <Typography> 
          <b>{name}</b> - {field}
        </Typography>
        <hr style={{color: "#ffa64d"}} />
        <ul style={{fontSize: "0.8em"}}>
          {display}
        </ul>
        {link === "" ? null : <div>Link: <a href={link}>{link}</a></div>}
      </Card>
    </div>
  );
}

export default Project;
