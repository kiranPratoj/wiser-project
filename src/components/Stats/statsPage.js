import React from 'react'
import {Grid} from '@material-ui/core '
import MenuBar from '../../../src1/menuBar.js';
// import './homebody.css';
import Demo from './Charts/pie-chart';




function statsPage() {
    return (
    <Grid style={{ justifyContent: "left"}}  Container spacing={0}>
    <Grid item xs={12}>        
      <Grid container spacing={0}>       
      <Grid item xs={4}>
          <MenuBar />
        </Grid>  
          <Grid item xs={8} style={{width:'100%'}} >
          <Demo />
        </Grid>
       
      </Grid>
    </Grid>
  </Grid> 
    )
}

export default statsPage
