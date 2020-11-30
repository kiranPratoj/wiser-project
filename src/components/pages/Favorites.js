import React from 'react';
import { Paper, TextField, Grid, Divider, Typography } from "@material-ui/core";
import '../homebody.css'; 
import StarsIcon from '@material-ui/icons/Stars';
import EqualizerTwoToneIcon from '@material-ui/icons/EqualizerTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const Favorites = () => (
  <div className='homepage'>
 <Grid item xl={8} md={8} fullwidth>
 <Paper elevation={8} spacing={4} style={{padding: "25px", backgroundColor:'#424242', color: 'white', display:'inline' }} >
    <Typography variant='h4' style={{align:'left' }} > Favorites </Typography>
        </Paper> 
    </Grid>      
  </div>
)

export default Favorites;