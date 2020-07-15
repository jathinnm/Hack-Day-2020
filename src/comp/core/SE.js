import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Header from '../generic/Header.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  button:{
    borderRadius: "10px",
    backgroundColor: "#F01716",
    width: "60%",
    marginLeft: '10vh',
    marginBotton:"5vh",
   
   
  },
  areas:{
  color: 'white',
  marginBottom:"0px"
  },
  directors:{
  color: 'white',

  },
  teams:{
  listStyle: 'none',
  marginLeft: "6vh",
  },
  spaceText:{
  color:'white'
  }

  }));

  //   window.addEventListener("scroll", noscroll);
  //   function noscroll(){
  //       window.scrollTo(0,0);
  //   }
  const areas = ['IT Risk and Compliance', 'Planning & Management']
  const leaders = ['Brett Weber','Randy McBeath']
  const teams = [['IT Control Mgmt, IT R&C Data & Tech','IT R&C Strategic Services','Technology Vendor Mgmt Office','IT Bus Cont, IT Asset Mgmt','IT GRC Practicioner Svcs'],['Enablement','Monitoring & Control','Workforce']]
  var tmparr =[]
  export default function(){
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Grid container spacing ={10} direction = "column">
            <Grid item>
                <Header title = "Platform Enablement Division"/>
             </Grid>
             <Grid item container spacing={10} justify="center">
            
                {areas.map(function (area,i) {
                  tmparr = [area, leaders[i], teams[i]]
                  if(tmparr != null){
      return (
                    <Grid item xs={6} alignItems = 'center' justify ='center' >
                      <Button variant="contained"  className = {classes.button}  >
                     
                          <Grid container item alignItems='center' direction = 'column' >
                            <Grid item>
                              <h2 className={classes.areas}>{tmparr[0]}</h2>
                            </Grid>
                            <Grid item>
                            <h3 className={classes.areas}>
                                {tmparr[1]}
                            </h3>
                            </Grid>
                            
                          </Grid>  
                        </Button>
                        <li className={classes.spaceText}>sadhbckjsbdc</li>
                        <Grid item>
                                {teams[i].map(function(team){
                                  return (
                                    <ul>
                                  <li className={classes.teams}>{team}</li>
                                  </ul>
                                  );
                                })}
                        </Grid>
                                
                              
                    </Grid>
                )
        }})
                    
}
            </Grid>
        </Grid>
        
        </div>
    );
}