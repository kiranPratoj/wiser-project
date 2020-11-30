import { makeStyles } from '@material-ui/styles';
import Avatar from "@material-ui/core/Avatar";

import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent : "left",
   }, 
   avatar: {
   algin: 'right',
   justifyContent : "right",    
  },
  drawer : {
    paddingTop : "20px",
    width: "200px",
    backgroundImage:'linear-gradient(#6cbc0a, #307d15)',
    fontWeight:"fontWeightBold",
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    border: '25 px'
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight:"fontWeightBold",
    fontSize: '1rem',
   
  },
  btnRoot : {
    paddingLeft : "25px",
    justifyContent : "left !important"
  },
  subMenu : {
    paddingLeft : "50px !important",
    fontSize:'.8rem'
  }
}));
export default useStyles;