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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
   spacing:{
       padding:"3vh",

   },
   accordion:{
       backgroundColor:"#F01716",
       color: 'white',
       borderRadius: "10px"

   },
   arrow:{
       color:'white'
   },
   titleSpacing:{
      marginLeft:"3vh"
   },
   title:{
       marginTop:'1.6vh',
   },
   spaceText:{
    color:'white'
  },
  accordionDetails: {
      backgroundColor:"#E8F0F8"
  },
  infoTitles:{
      color: "black"
  }


  }));

//   window.addEventListener("scroll", noscroll);
//   function noscroll(){
//       window.scrollTo(0,0);
//   }
const areas = ["Data Area", 'Architecture & IT Services Area', 'IT Operations Area', 'Infrastructure Area','Infrastructure Area','Resiliency Engineering']
const leaders = ['DeWayne Griffin','Jeff L Bertrand','Mike Miller','Margo Hodges','Ines Halloran','Mike Fletcher']
const teams = ['Daas Ingestion','Daas Consumption','TDM-Capture/Scrub/Provision','Daas Conformance & TDM-Data Anonymization']
var tmparr =[]
export default function(){
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Grid container  spacing={2.5} direction = "column">
            <Grid item container spacing ={2}>
                <Grid item className={classes.titleSpacing}>
                    <h1>Data Area</h1>

                </Grid>
                <Grid item  justify = 'center' alignItems ='center'>
                    <li className={classes.spaceText}>sadhbckjsbdc</li>
                    <h4 className={classes.title}>Data Discovery and Enablement</h4>
                </Grid>
            </Grid>
            <Grid item container>

            </Grid>
             <Grid item container spacing={10} justify="center">


                        <Grid item container xs={12} >
                                {teams.map(function(team){
                                  return (
                                    <Grid item xs={3} className = {classes.spacing}>
                                    <Accordion className = {classes.accordion}>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon style={{ fill: 'white' }}/>}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"

                                    >
                                      <h2 className={classes.heading}> {team}</h2>
                                    </AccordionSummary>
                                    <AccordionDetails className = {classes.accordionDetails}>
                                     <Grid container direction ="column" className={classes.infoTitles}>
                                         <Grid item >
                                            <h3>Product/Project</h3>
                                            <p>CSP-INFO</p>
                                         </Grid>
                                         <Grid item>
                                            <h3>Languages and Tools</h3>
                                            <p>Reactjs User Interface, SpringBoot Microservices</p>
                                         </Grid>
                                         <Grid item>
                                             <h3>Point of Contact</h3>
                                             <p>Brandon Fifer(HUH9)</p>
                                             <p>Team: DL-ET-TDM-ThunderBorg</p>
                                         </Grid>

                                         <Grid item>
                                             <h3>Projected PI Date(s)</h3>
                                             <p>PI 3 Ends: September 2020</p>
                                         </Grid>
                                         <Grid item>
                                             <h3>Additional Information</h3>
                                         </Grid>

                                     </Grid>
                                    </AccordionDetails>
                                  </Accordion>
                                  </Grid>
                                  );
                                })}
                        </Grid>




            </Grid>
        </Grid>

        </div>
    );
}
