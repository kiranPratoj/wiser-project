import React, {  useState, forwardRef } from 'react';
import {List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
import clsx from 'clsx';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import menuItems from './sideBarItems';
import { NavLink as RouterLink } from 'react-router-dom';
import useStyles from './menuBarStyles';
import Avatar from "@material-ui/core/Avatar";
import { Divider, Typography } from '@material-ui/core';

const MenuBar = (props) => {
    const [ menu, setMenu ] = useState({});
    const { className, ...rest } = props;
    const classes  = useStyles();
    
    const handleClick = (item) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }

    const CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));

    const handleMenu = ( children, level=0 ) => {
        return children.map(({children, name, url, links }) => {
            if ( !children ) {
              return (
                <div> 
                  <Divider light='false' />
                <List component="div" disablePadding key={ name }>
                  <ListItem
                    className={classes.item}
                    disableGutters
                    style={{padding:"0px"}}
                    key={name}
                  >
                    <Button
                      className={clsx({
                        [classes.btnRoot] : true,
                        [classes.button] : true,
                        [classes.subMenu] : level
                      })}
                      component={CustomRouterLink}
                      to={url}
                    >
                      {name} 
                    </Button>
                  </ListItem>
                </List>
                </div> 
              )
            }
            return (
             <div>
              <Divider light='false' />
                           <div key={ name }>
              <ListItem
                className={classes.item}
                disableGutters
                key={name}
                onClick={() => handleClick(name)}
              >
                <Button
                className={clsx({
                  [classes.btnRoot] : true,
                  [classes.button] : true,
                  [classes.subMenu] : level
                })}>
                  { name }{ menu[ name ] ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                </ListItem>
                <Collapse
                  in={ (menu[name]) ? true : false }
                  timeout="auto"
                  unmountOnExit
                >
                  { handleMenu( children, 1) }
                </Collapse>
              </div>
              </div>
            )
        })
    }
return (
  <div>  
      <Drawer
          anchor="left"
          classes={{ paper: classes.drawer }}
          open={true}
          variant="temporary"
          
        >
         <Avatar className={classes.avatar} src='data:image/jpeg;base64,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' style={{alignSelf: 'center',height: '70px', width: '70px' }} >     
          </Avatar>
          <Typography variant='h6' align='center' > Admin </Typography>
          <List {...rest} className={clsx(classes.root, className)} >
              { handleMenu(menuItems.data) }
          </List>
      </Drawer>
      </div>
   )
}
export default MenuBar;