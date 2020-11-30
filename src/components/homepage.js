import React from 'react'
import MenuBar from '../src1/menuBar.js';
import { Grid, Container, } from "@material-ui/core";
import HomeBody from './homebody.js';
import './homebody.css';


export default function HomePage(){
  return (
 <Grid style={{ backgroundColor:'#424242'}} 
 item
  direction="row"
  justify="left"
  alignItems="left"
 spacing={0}  >
      <Grid item xs={12}>        
        <Grid container >       
        <Grid item xs={4}>
            <MenuBar />
          </Grid>  
            <Grid item xs={8} fullwidth >
            <HomeBody />
          </Grid>         
        </Grid>
      </Grid>
    </Grid> 
 )
}
