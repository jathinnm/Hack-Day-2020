import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { black } from '@material-ui/core/colors';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Grid from '@material-ui/core/Grid';
import Home from '../core/Home.js'
import CE from '../core/CE.js'
import PE from '../core/PE.js'
import SE from '../core/SE.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "200vh",
    backgroundColor:"#E9EAEC"

  },
  departmentTabs:{
    marginTop: "35vh"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Grid container>
        <Grid item xs ={1}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab icon = {<HomeSharpIcon/>} {...a11yProps(0)} />
            
                <Tab className={classes.departmentTabs}label="CE" {...a11yProps(1)} />
                <Tab label="PE" {...a11yProps(2)} />
                <Tab label="SE" {...a11yProps(3)} />
        
            </Tabs>
        </Grid>
        <Grid item xs={11}>

      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CE/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PE/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SE/>
      </TabPanel>
      </Grid>
      </Grid>
    </div>
  );
}