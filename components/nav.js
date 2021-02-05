import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/tableStyle.js';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core'; 
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  {console.log(index)}
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Navigation = ({ menus, submenus }) => {

  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    [<div>
      <AppBar className="navbar-top" position="static">
        <Toolbar>
        {menus.map((menu) => {
          return (
                <Typography variant="h6" key={menu.id} as="li">
                    <Link as={`/menu/${menu.name}`} href="/menu/[id]">
                        <a style={{ color: '#fff' }} >{menu.name}</a>
                    </Link>
                </Typography>
              );
            })}
        </Toolbar>
      </AppBar>
    </div>,
    <div>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
        >
          {
            submenus.map((submenu) => {
              return (
                <Tab key={submenu.id} value={submenu.id} label={submenu.name} {...a11yProps(value)}></Tab>                  
                );            
            })
          }            
        </Tabs>
      </Paper>
    </div>
  ]);
};

export default Navigation;