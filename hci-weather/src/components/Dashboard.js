import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SimpleTable from './SimpleTable'
import Graph from './Graph'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: 'center',
    width: '1140px',
    marginLeft: '50%',
    webkitTransform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    fontWeight: '570',
    marginBottom: '1px',
    fontSize: '200%',
    wordSpacing: '1px',
    color: "#283593",
    marginTop: '40px'
  },
  textBox: {
    fontWeight: '700',
    color: '#283593',
    textAlign: 'center',
    fontSize: '180%',
    lineHeight: 1.6
  },
}));

export default function Dashboard(props) {
  
  const classes = useStyles();
  const forecasts = props.data
  console.log("RENDER DASHBOARD ")
  return (
    <div className={classes.root}>
       {/* <Grid container spacing={3}>
        <Grid item xs> 
        <Typography variant="h6" component="h2" className={classes.textBox}>Check forecast for any location <br/>up to 5 days in advance</Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={2}>
        <Grid item xs={6}> 
            {forecasts.length > 0 && <SimpleTable data={forecasts}  days={props.days} />}
        </Grid>
        <Grid item xs={6}>
            {forecasts.length > 0 && <Paper className={classes.paper}><Graph data={forecasts} days={props.days}/></Paper> }
        </Grid>
      </Grid>
    </div>
  );
}