import React from 'react'
import MenuBar from '../src1/menuBar.js';
import { Grid, Container, } from "@material-ui/core";
import HomeBody from './homebody.js';

import './homebody.css';


export default function HomePage(){
  return (
 <Grid style={{ justifyContent: "center"}} container spacing={0}>
      <Grid item xs={12}>        
        <Grid container spacing={0}>       
        <Grid item xs={4}>
            <MenuBar />
          </Grid>  
                    <Grid item xs={8} sm={8} xl={8} >
            <HomeBody />
          </Grid>
         
        </Grid>
      </Grid>
    </Grid> 
 )
}
