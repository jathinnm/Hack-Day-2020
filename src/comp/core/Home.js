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
       
          margin: theme.spacing(1),
          width: '80%',
          height: '20vh',
        borderRadius:"2px",
        backgroundColor: '#F01716',
        textAlign: 'center',
        color: 'white'
        
      },
      missionStatement:{
          padding:'2%',
      }

  }));

//   window.addEventListener("scroll", noscroll);
//   function noscroll(){
//       window.scrollTo(0,0);
//   }

export default function(){
    const classes = useStyles();
    return(
        // <Typography>Philosophy</Typography>
                     
                        
        // <Typography className={classes.missionStatement}>The ET Navigation Dashboard was created to bridge the communication gap between teams in the Enterprise Technology Department. 
        //     We aim to improve internal navigation for and facilitate collaboration between employees to bring more value to State Farm. 
        //     This also serves as a platform for all individuals to stay updated on our organization’s advancement in technology as a whole.
        // </Typography>
      <div className={classes.root}>
      
      <Grid container spacing ={10} direction = "column" >
            <Grid item>
                <Header title = "ET Navigation Dashboard">
                </Header>
             </Grid>
             <Grid container item alignItems='center' direction ='column' justify ='center'>
                <Paper className ={classes.paper} >
                    <Grid item >
                        <Typography variant ='h3'>Philosophy</Typography>
                    </Grid>
                    <Grid item>
                    <Typography className={classes.missionStatement}>
                        The ET Navigation Dashboard was created to bridge the communication gap between teams in the Enterprise Technology Department. 
                        We aim to improve internal navigation for and facilitate collaboration between employees to bring more value to State Farm. 
                        This also serves as a platform for all individuals to stay updated on our organization’s advancement in technology as a whole.
                    </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
     
        </div>
    );
}