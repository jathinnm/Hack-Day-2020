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
},
title:{
  marginLeft: "10vh"
}

  }));

//   window.addEventListener("scroll", noscroll);
//   function noscroll(){
//       window.scrollTo(0,0);
//   }




const areas = ["Data Area", 'Architecture & IT Services Area', 'IT Operations Area', 'Infrastructure Area','Infrastructure Area','Resiliency Engineering']
const leaders = ['DeWayne Griffin','Jeff L Bertrand','Mike Miller','Margo Hodges','Ines Halloran','Mike Fletcher']
const teams = [['Data Discovery and Enablement',
  'Data Strategy',
  'Data Management',
  'Enterprise Content Mgmt', 
  'Data Modernization & Test Data Mgmt',
  'Portfolio and Delivery/FDW Sunset and Support'], [
    'Architecture Enablement', 
    'Discovery & Delivery Innovation' ,
    'Enterprise Technology Management Practices', 
    'THE Delivery Experience ',
    'Test Enablement & Environment Management',
    'Enterprise Digital Media & Web Content Mgmt Platforms', 
    'Telephony & Voice Platform',
    'Internal Productivity & Collaboration'],
    ['Support Services',
      'Migration & Data Center Design Services',
      'Support Operations',
      'Core Computing', 
      'COVID' ],
      ['Infrastructure as a Service - Hardware',
        'Network & Client Solutions',
        'Bloomington Web PaaS',
        'Mainframe as a Service', 
        'Architecture BLM', 
        'Infrastructure as a Service - Software'],
        ['Infrastructure Area Level Architecture', 
          'Target Web PaaS', 
          'Automation & Tooling', 
          'Big Data PaaS',
          'Public Cloud' ],
          ['Resiliency Engineering Suite 1']
  ]
var tmparr =[]
var clicked = false
export default function(props){
  const [clicked, setClicked]= React.useState(false)

  const handleClick = event =>{
    props.parentCallback(true)
    console.log('hi')
  }
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Grid container spacing ={10} direction = "column">
            <Grid item className={classes.title}>
                <Header title = "Platform Enablement Division"/>
             </Grid>
             <Grid item container spacing={10} justify="center">
            
                {areas.map(function (area,i) {
                  tmparr = [area, leaders[i], teams[i]]
                  if(tmparr != null){
      return (
                    <Grid item xs={6} alignItems = 'center' justify ='center' >
                      <Button variant="contained"  className = {classes.button} onClick ={handleClick} >
                     
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