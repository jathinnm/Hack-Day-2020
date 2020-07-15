import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Header from '../generic/Header.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

  }));

//   window.addEventListener("scroll", noscroll);
//   function noscroll(){
//       window.scrollTo(0,0);
//   }

export default function(){
    const classes = useStyles();
    return(
      <div className={classes.root}>
      <Grid container spacing ={10} direction = "column">
            <Grid item>
                <Header title = "Strategic Engagement Division"/>
             </Grid>
            <Grid item container spacing={10} justify="center">
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
      </Grid>
      </div>
    );
}