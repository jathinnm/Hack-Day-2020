import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import loginImage from '../utils/JakeLoginImage.png'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Logo from '../utils/StateFarmLogo.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: '1',
    },
    loginImage:{
        width: '100%',
        // height: '100vh',
        objectFit: 'fill',
    }, 
    logo:{
        // marginBotton: "50%",
        width: '60vh',
        height:"15vh",
        objectFit: 'fill'
        // marginLeft: "20vh",
    }, 
    gridContainer:{
        marginTop: '10vh'
    },
    textField:{
        // border: "solid 2px black",
        borderRadius: "10px",
        width: "35vh",
        height: '5vh'
    },
    title:{
        marginLeft: "2vh",
        
    },
    button:{
        borderRadius: "10px",
        backgroundColor: "#F01716",
        width: "10vh"
    }

  }));

export default function(){
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <Grid container spacing={10} >
                <Grid container item  xs={5} >
                    <img src={loginImage} alt="Jake" className = {classes.loginImage} />
                </Grid>
                <Grid container item xs={7} spacing={6}
                     direction="column"
                     justify= "center"
                     alignItems="center"
                     className={classes.gridContainer}
                     >
                     <Grid container 
                        direction="column"
                        alignItems="center"
                        spacing={10}
                        justify = "center"
                     >
                        <Grid item container alignItems = "center" justify ="center">
                                <img src={Logo} alt="Logo" className = {classes.logo} />
                                <Grid item alignItems = 'center' justify= 'center'>
                                    <h1 className={classes.title}>ET Navigation Dashboard</h1>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridContainer} >
                        <TextField
                            label="Employee Alias"
                            id="filled-size-small"
                            placeholder="Please enter your alias"
                            size="small"
                            variant= 'outlined'
                            className = {classes.textField}
                        />
                     </Grid>
                    <Grid item >
                        <TextField
                            label="Password"
                            id="filled-size-small"
                            placeholder="Please enter your Password"
                            size="small"
                            className = {classes.textField}
                            variant= 'outlined'
                         />
                     </Grid>
                     <Grid item >
                        <Button variant="contained"  className = {classes.button}  >
                             Login
                        </Button>
                     </Grid>
                </Grid>
            </Grid>
        
        </div>
    );
}