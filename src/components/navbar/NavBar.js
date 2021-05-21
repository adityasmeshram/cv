import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { IconButton, ThemeProvider, Tooltip } from '@material-ui/core';
import { homePath, workPath, educationPath, skillsPath, projectsPath, contactPath } from "../../constants/Routes";
import LinkComponent from './LinkComponent';
import resumeLink from "../../resources/Aditya_Meshram_Resume.pdf";

const NavBar = ({theme}) => {

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.setAttribute("download", "Aditya_Meshram_Resume.pdf");
    document.body.appendChild(link);
    link.click();
  }

  return (
    <div className="navbar">
      <ThemeProvider theme={theme}>
        <LinkComponent 
          hoverText="Home" 
          linkPath={homePath} 
          icon={(style) => <MenuIcon color={style.color}/>}
        />
        <LinkComponent
          hoverText="Work"
          linkPath={workPath} 
          icon={(style) => <WorkIcon color={style.color} />}
        />
        <LinkComponent
          hoverText="Education"
          linkPath={educationPath} 
          icon={(style) => <SchoolIcon color={style.color} />}
        />
        <LinkComponent
          hoverText="Skills"
          linkPath={skillsPath} 
          icon={(style) => <CodeIcon color={style.color} />}
        />
        <LinkComponent
          hoverText="Projects"
          linkPath={projectsPath} 
          icon={(style) => <LaptopMacIcon color={style.color} />}
        />
        <LinkComponent
          hoverText="Contact"
          linkPath={contactPath} 
          icon={(style) => <PhoneIcon color={style.color} />}
        />
        <Tooltip title="Resume" placement="left">
          <IconButton color="primary" onClick={handleResumeDownload}>
            <CloudDownloadIcon color="primary"/>
          </IconButton>
        </Tooltip>
      </ThemeProvider>
    </div>
  );
}

export default NavBar;
