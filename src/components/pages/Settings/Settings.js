import React from 'react';
import {Paper, Typography, Divider, Grid} from '@material-ui/core';
import '../../homebody.css';

function Settings() {
    return (
        <div  className='homepage' >
            <Grid item xs={8} >
  <Grid item xs={12} >
<Paper elevation={10}  align='fullwidth' space={2} style={{backgroundColor:'#424242', color:'white' }} gutterBottom='true' >
  <Typography variant='h4'  > Settings Page of Wiser Application </Typography>
  <Divider style={{width:'20px', color:'white'}} light='false' component='hr' orientation='horizontal' variant='fullwidth' />
  <Divider style={{width:'20px', color:'white'}} light='false' orientation='horizontal' variant='fullwidth' />
    <Divider style={{width:'20px', color:'white'}} light='false' orientation='horizontal' variant='fullwidth' />
   </Paper>
  </Grid>
  </Grid>
        </div>
    )
}

export default Settings
