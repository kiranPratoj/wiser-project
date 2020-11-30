import React from 'react';
import { Paper, TextField, Grid, Divider, Typography } from "@material-ui/core";
import './homebody.css'; 
import StarsIcon from '@material-ui/icons/Stars';
import EqualizerTwoToneIcon from '@material-ui/icons/EqualizerTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FunctionsPage from './pages/FunctionsPage';
import {Link} from 'react-router-dom';



const Homebody = () => (
  <div className='homepage'>
 <Grid item xl={8} md={8} fullwidth>
 <Paper elevation={8} fullwidth spacing={4} style={{padding: "25px", backgroundColor:'#424242', color: 'white', display:'flex' }} >
    <Typography variant='h4' style={{align:'left' }} > Home </Typography>
    <Button
      size="small"
        variant="contained"
        style={{padding: "25px", backgroundColor:'#424242', color: 'white', align:'right', }}
        padding='25px'
       startIcon={<StarsIcon size='large' />}
       onClick={() => < FunctionsPage/>}
      >
        Favorites
      </Button>
      <Button
      type='submit'
        variant="contained"
        style={{padding: "25px", backgroundColor:'#424242', color: 'white' }}       
       startIcon={<EqualizerTwoToneIcon  />}
       component={Link}
       to='/Functions/Function1'
      >
        Stats
      </Button>
    </Paper> 
    </Grid>
      
    <Grid item xs={0} >
      

      
      </Grid>
  </div>
)

export default Homebody