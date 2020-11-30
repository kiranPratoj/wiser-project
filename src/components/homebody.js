import React from 'react';
import { Paper, TextField, Grid, Divider, Typography  } from "@material-ui/core";
import './homebody.css'; 



const Homebody = () => (
  <div className='homepage'>
  <Grid item xs={8} >
  <Grid item xs={12} >
<Paper elevation={10} style={{ padding: "25px" }} align='fullwidth' space={2} style={{backgroundColor:'#424242', color:'#6cbc0a' }} gutterBottom='true' >
  <Typography variant='h4'  > Home Page of Wiser Application </Typography>
  <Divider style={{width:'20px', color:'white'}} light='false' component='hr' orientation='horizontal' variant='fullwidth' />
  <Divider style={{width:'20px', color:'white'}} light='false' orientation='horizontal' variant='fullwidth' />
    <Divider style={{width:'20px', color:'white'}} light='false' orientation='horizontal' variant='fullwidth' />
   </Paper>
  </Grid>
  </Grid>
  </div>
)

export default Homebody