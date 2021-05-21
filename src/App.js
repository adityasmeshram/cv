import './App.css';
import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Accounts from "./components/accounts/Accounts";
import { homePath, workPath, educationPath, skillsPath, projectsPath, contactPath } from "./constants/Routes";
import Home from "./view/home/Home";
import Work from "./view/work/Work";
import Education from "./view/education/Education";
import Projects from "./view/projects/Projects";
import Skills from "./view/skills/Skills";
import Contact from "./view/contact/Contact";
import { createMuiTheme, Grid, makeStyles, Paper } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  navbarClass: () => {
    return {
      backgroundColor: "#282c34",
      width: "50px",
      float: "right",
      position: "fixed",
      marginLeft: "10px"
    }
  },
  accountsClass: () => {
    return {
      backgroundColor: "#282c34",
      padding: "0% 10%",
      marginLeft: "35px"
    }
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#ffa64d"
    }
  }
})

function App() {
  const classes = useStyle();
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <br />
        <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={1} sm={1}>
            <Paper className={classes.navbarClass}  square elevation={10}>
              <NavBar theme={theme}/>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={10}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <Paper className={classes.accountsClass}  square elevation={10}>
                  <Accounts theme={theme}/>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={7}>
                <div className="route">
                <Switch>
                  <Route path={homePath} exact component={Home} />
                  <Route path={workPath} component={Work} />
                  <Route path={educationPath} component={Education} />
                  <Route path={skillsPath} component={Skills} />
                  <Route path={projectsPath} component={Projects} />
                  <Route path={contactPath} render={() => <Contact theme={theme}/>} />
                </Switch>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
