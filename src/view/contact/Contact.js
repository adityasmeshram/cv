import React from 'react';
import Card from "@material-ui/core/Card";
import { Grid, makeStyles, Typography, ThemeProvider } from '@material-ui/core';
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyle = makeStyles(theme => ({
  contactClass: () => {
    return {
      height: "395px",
      maxHeight: "395px",
      backgroundColor: "rgb(219, 212, 212)",
      color: "#282c34",
      padding: "20px 0px",
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
  contactDetailsClass: () => {
    return {
      paddingLeft: "20px",
      fontSize: "0.8em"
    }
  },
  wrapperClass: () => {
    return {
      width: "210px",
      padding: "10px",
      margin: "auto",
    }
  }
}))

const Contact = ({theme}) => {
  const classes = useStyle();
  return (
    <div className="contact">
      <Card className={classes.contactClass} square elevation={10}>
        <Typography className={classes.headClass} variant="h4">
          Contact
        </Typography>
        <br />
        <div className="contacts" style={{width: "250px", textAlign: "left", margin: "auto"}}>
        <ThemeProvider theme={theme}>
          <Card className={classes.wrapperClass} square elevation={5}>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={1}>
              <EmailIcon />
            </Grid>
            <Grid item xs={11} sm={11}>
              <Typography className={classes.contactDetailsClass}>adityasm.app@gmail.com</Typography>
            </Grid>
            <Grid item xs={1}>
              <PhoneIphoneIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography className={classes.contactDetailsClass}>+91 9834616885</Typography>
            </Grid>
            <Grid item xs={1}>
              <WhatsAppIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography className={classes.contactDetailsClass}>+91 9834616885</Typography>
            </Grid>
            <Grid item xs={1}>
              <TelegramIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography className={classes.contactDetailsClass}>+91 9834616885</Typography>
            </Grid>
          </Grid>
          </Card>
        </ThemeProvider>
        </div>
      </Card>
    </div>
  );
}

export default Contact;
