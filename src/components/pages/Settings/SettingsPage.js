import React from 'react';
import MenuBar from '../../../src1/menuBar.js';
import Settings from './Settings';
import Grid from '@material-ui/core/Grid'

function SettingsPage() {
    return (
        <Grid style={{ justifyContent: "center"}} container spacing={0}>
      <Grid item xs={12}>        
        <Grid container spacing={0}>       
        <Grid item xs={4}>
            <MenuBar />
          </Grid>  
                    <Grid item xs={8} sm={8} xl={8} >
            <Settings />
          </Grid>
         
        </Grid>
      </Grid>
    </Grid> 
    )
}

export default SettingsPage;
