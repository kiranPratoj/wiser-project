import React from 'react';
import { Paper, TextField, Grid, Divider, Typography  } from "@material-ui/core";
import './homebody.css'; 



const Homebody = () => (
  <div className='homepage'>
  <Grid item xs={8} >
  <Grid item xs={8} >
<Paper elevation={8}  space={2} style={{padding: "25px", backgroundColor:'#424242', color:'white' }} gutterBottom='true' >
  
  <Typography variant='h4' style={{ justifyContent: "left"}} > Home Page </Typography>
  <Typography style={{justifyContent: 'right' }} >  </Typography>

  {/* <Divider style={{width:'20px', color:'white'}} light='false' component='hr' orientation='horizontal' variant='fullwidth' />
  <Divider style={{width:'20px', color:'white'}} light='false' orientation='horizontal' variant='fullwidth' /> */}
    <Divider style={{width:'20px', color:'white'}} light='false' orientation='horizontal' variant='fullwidth' />
   </Paper>
  </Grid>
   <Grid xs={8} style={{justifyContent: 'center'  }} >
   <Typography  > No Favourites. Select Widget Items to display here. </Typography>
   </Grid>
  </Grid>
  </div>
)

export default Homebody