import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import loginImage from '../utils/JakeLoginImage.png'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: '1',
    },
    loginImage:{
        width: '100%',
        height: '100%',
        objectFit: 'fill',
    }, 
    imageGridItem:{
        height: '100%'
    }
  }));

export default function(){
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={5} className={classes.imageGridItem}>
                    <img src={loginImage} alt="Logo" className = {classes.loginImage} />
                </Grid>
                <Grid sm container item >
                    <Grid item xs= {12}container direction="column" spacing={2}>
                        <Grid item >
                            <Paper>Logo Holder</Paper>
                            <Typography>ET Navigation Dashboard</Typography>
                            
                        </Grid>
                        <Grid item >
                        <TextField
                                label="Alias"
                                id="filled-size-small"
                                placeholder="Please enter your alias"
                              
                                size="small"
                            />
                        </Grid>
                        <Grid item >
                        <TextField
                                label="Password"
                                id="filled-size-small"
                                placeholder="Please enter your Password"
                              
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}