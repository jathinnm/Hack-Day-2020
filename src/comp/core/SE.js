import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Header from '../generic/Header.js'
import Grid from '@material-ui/core/Grid';

const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
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
                <Header/>
             </Grid>
            <Grid item>
                <h1>SE Page</h1>
            </Grid>
        </Grid>
        </div>
    );
}