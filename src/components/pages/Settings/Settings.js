import React from 'react';
import {Paper, Typography, Divider, Grid} from '@material-ui/core';
import '../../homebody.css';
import StarsIcon from '@material-ui/icons/Stars';
import EqualizerTwoToneIcon from '@material-ui/icons/EqualizerTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

function Settings() {
    return (
        <div  className='homepage' >
            <Grid item xs={8} >
  <Grid item xs={12} >
<Paper elevation={10}  align='fullwidth' space={2} style={{backgroundColor:'#424242', color:'white' }} gutterBottom='true' >
  <Typography variant='h4'  > Settings Page of Wiser Application </Typography>
 
   </Paper>
   <Button
       variant="contained"
        style={{padding: "25px", backgroundColor:'#424242', color: 'white' }}
        padding='25px'
       startIcon={<StarsIcon  />}
       component={Link}
       to='/Functions/Function1'

      >
        Favorites
      </Button>
  </Grid>
  </Grid>
        </div>
    )
}

export default Settings
