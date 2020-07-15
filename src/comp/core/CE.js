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
      marginLeft: '10vh'
  },
  subtitle:{
    primarys: '#FFFFF'
}
  }));

  //   window.addEventListener("scroll", noscroll);
  //   function noscroll(){
  //       window.scrollTo(0,0);
  //   }
  const areas = ['Digital Experience', 'P&C (Auto & Fire) Bloomington','P&C (Auto & Fire) Dallas','P&C Claims','Life/Health/IPS, Bank','Agency/Marketing & Contact Centers','Digital Assets & Strategy','General Departments','Billing & Payments']
  const leaders = ['Vijayasri Yerraguntla','Curt Stewart','Scott E. Taubert','Ritesh Saraf','Sara Donahue','Jason Potts','Mahesh Chandrappa','Dar Hakimi','Scott E. Taubert']
  const teams = [['UX CX Digital Product Design','Digital Growth and Interaction Experiences','UX CX, P&C Auto Fire, Experience Advancement & Integration','Statefarm.com & Community Offers','Horizontal & Pgm Mgmt','Customer Communications','SF Mobile App, Ent Mobile, AI, Messaging, Chat, Chatbots, SF Connect','Data, API, & Personalization, Document Management, Electronic Acknowledgement and Signing Management (EASM) & Customer Identity Management (CIM)','UX AMCC, DXL, Ops, CX Enablement & Optimization']['P&C Portfolio & Technical Enablement', 'Policy Management - PL Auto Enablement', 'P&C Rating', 'Policy Management - Personal Lines - Auto','Data & Common Services - Bloomington', 'P&C Underwriting', 'Architecture','Fire Acquisition, Service, and PAS', 'Auto PAS','Policy Mgmt General Functionality & Data Migration','P&C Mod Delivery']['Program & Enablement', 'P&C Customer Communications','Architecture','Data & Common Services','Business Lines','P&C Planning & Strategy','P&C Telematics','Auto Acquisition Services','Customer Channel Experience']['Claim IT Operations & Support', 'Digital Claims Platform & Mobile','Claims engineering & Architecture','Claims Analytic Data Management','ILR & Express Automation','Damage Ecosystem','Fire Claims','Complex Claims','ECS Foundations','Technical Infrastructure & Architecture','Claims Communications','Financials & Bill Management']['Health & Investment Planning Services','Life Modernization', 'Life Legacy','Horizontal Enablement','Loans, Cards & Deposits','Centralized Management Office - Bank']['Customer Management','Cross Capabilities','Contact Center Strategy & Enablement','Agent Sales & Business Management','Corporate Meeting','Area Engineering','Enterprise Interactions','Customer Service & Retention','OMNI Enablement','Associate Management']['Digital Transformation & CX Strategy', 'Product Adoption','Web Content Management & Optimization','Customer Analytics','Business Insights Analytics','Analytics Experimentation & Accountability','Data & Enablement']['Sales Comp & Performance Mgmt','General Departments B','Finance Mod Program','Financial & Statistical Processing & Reporting','Enterprise Compliance, Financial and Legal Systems','PeopleSoft','Cross Capability Services','General Departments Architecture']['Payments Suite','Horizontal Services','Settlement & Data Services','Billing Suite']]
  var tmparr =[]
  export default function(){
      const classes = useStyles();
      return(
        <div className={classes.root}>
          <Grid container spacing ={10} direction = "column">
              <Grid item>
                  <Header title = "Customer Experience Division"/>
               </Grid>
               <Grid item container spacing={10} justify="center">

                  {areas.map(function (area,i) {
                    tmparr = [area, leaders[i], teams[i]]
                    if(tmparr != null){
      return (
                      <Grid item xs={6} alignItems = 'center'>
                        <Button variant="contained"  className = {classes.button}  >
                            <Grid container item alignItems='center' direction = 'column'>
                              <Grid item>
                                <Typography variant ='h5'>{tmparr[0]}</Typography>
                              </Grid>
                              <Grid item>
                              <Typography className={classes.subtitle} >
                                  {tmparr[1]}
                              </Typography>
                              </Grid>

                            </Grid>
                          </Button>
                      </Grid>
                  )
                }})

  }
              </Grid>
          </Grid>

          </div>
      );
  }
