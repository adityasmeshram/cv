import { Avatar, makeStyles, ThemeProvider, Tooltip, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import "./Accounts.css";
import avatar from "../../resources/aditya.jpg";
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from '../../constants/AccountLink';

const useStyle = makeStyles(theme => ({
  pictureClass: () => {
    return {
      width: "54%",
      height: "54%",
      margin: "auto"
    }
  }
}));

const Accounts = ({theme}) => {
  const classes = useStyle();
  return (
    <div className="accounts">
      <br />
      <br />
      <Avatar 
        className={classes.pictureClass}
        alt="Aditya meshram" 
        src={avatar}
      />
      <br />
      <Typography variant="h6">
        <b style={{"color": "white"}}>
          Hi, I'm <span style={{"color": "#ffa64d"}}>Aditya Meshram!</span>
        </b>
      </Typography>
      <Typography variant="h6">
        <span style={{"color": "white"}}>Software Engineer</span>
      </Typography>
      <br />
      <hr style={{"color": "#ffa64d", "margin": "0px"}}/>
      <br />
      <br />
      <ThemeProvider theme={theme}>
        <div className="anchor">
          <Tooltip title="GitHub">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <GitHubIcon color="primary"/>
            </a>
          </Tooltip>
        </div>
        <div className="anchor">
          <Tooltip title="LinkedIn">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon color="primary"/>
            </a>
          </Tooltip>
        </div>
        <div className="anchor">
          <Tooltip title="Facebook">
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
              <FacebookIcon color="primary"/>
            </a>
          </Tooltip>
        </div>
        <div className="anchor">
          <Tooltip title="Instagram">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <InstagramIcon color="primary"/>
            </a>
          </Tooltip>
        </div>
        <div className="anchor">
          <Tooltip title="Twitter">
            <a href={TWITTER} target="_blank" rel="noopener noreferrer">
              <TwitterIcon color="primary"/>
            </a>
          </Tooltip>
        </div>
      </ThemeProvider>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Accounts;
