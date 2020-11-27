import React from 'react';
import { Paper, TextField, Grid } from "@material-ui/core";
import './homebody.css'; 
import { Divider } from '@material-ui/core';


const Homebody = () => (
  <div className='homepage'>
  <h1> This is a Home Page </h1>
  <hr></hr>
    <h2> Favourites </h2>
  
    <Divider style={{width:'20px'}} />

  </div>
)
export default Homebody