import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
