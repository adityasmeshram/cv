import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import SkillWrapper from './SkillWrapper';

const useStyle = makeStyles(theme => ({
  cardClass: () => {
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
  },
  skillCard: () => {
    return {
      width: "75%",
      margin: "auto",
      textAlign: "left",
      padding: "15px"
    }
  }
}))

const Skills = () => {
  const classes = useStyle();
  return (
    <div className="skills">
      <Card className={classes.cardClass} square elevation={10}>
        <Typography className={classes.headClass} variant="h4">
          Skills
        </Typography>
        <br />
        <div>
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>Programming Languages</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="Java" />
            <SkillWrapper skill="JavaScript" />
            <SkillWrapper skill="Python" />
            <SkillWrapper skill="C++" />
            <SkillWrapper skill="C" />
            <SkillWrapper skill="Bash" />
          </Card>
          <br />
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>Java Development</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="Java" />
            <SkillWrapper skill="Dagger" />
            <SkillWrapper skill="Spring core" />
            <SkillWrapper skill="Guice" />
            <SkillWrapper skill="JUnit5" />
            <SkillWrapper skill="Mockito" />
          </Card>
          <br />
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>Web Development</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="HTML" />
            <SkillWrapper skill="CSS" />
            <SkillWrapper skill="JavaScript" /> 
            <SkillWrapper skill="React.js" />
            <SkillWrapper skill="Node.js" />
            <SkillWrapper skill="Express.js" />
            <SkillWrapper skill="MaterialUI" />
            <SkillWrapper skill="Redux" />
            <SkillWrapper skill="Jest" />
          </Card>
          <br />
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>AWS Development</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="Lambda" />
            <SkillWrapper skill="DynamoDB" /> 
            <SkillWrapper skill="APIGateway" />
            <SkillWrapper skill="S3" />
            <SkillWrapper skill="IAM" />
            <SkillWrapper skill="SAM" />
          </Card>
          <br />
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>Data Science</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="Numpy" />
            <SkillWrapper skill="Pandas" />
            <SkillWrapper skill="Scikit-Learn" />
            <SkillWrapper skill="Keras" />
            <SkillWrapper skill="TensorFlow" />
            <SkillWrapper skill="OpenCV" />
            <SkillWrapper skill="NLTK" />
            <SkillWrapper skill="Matplotlib" />
            <SkillWrapper skill="Flask" />
          </Card>
          <br />
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>Database</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="MySQL" />
            <SkillWrapper skill="MongoDB" />
          </Card>
          <br />
          <Card className={classes.skillCard} square elevation={5}>
            <Typography><b>Tools</b></Typography>
            <hr style={{color: "#ffa64d"}} />
            <SkillWrapper skill="Git" />
            <SkillWrapper skill="Docker" />
          </Card>
        </div>
        <br />
      </Card>
    </div>
  );
}

export default Skills;
