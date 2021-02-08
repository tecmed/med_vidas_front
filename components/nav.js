import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/tableStyle.js';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core'; 
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(styles);
const img = <img style={{maxWidth: '180px', alignItems:"left"}} src="/logo_b.png"/>

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navigation = ({ menus, submenus, props }) => {

  const classes = useStyles();

  return (
    [<React.Fragment>
        <CssBaseline />
          <HideOnScroll {...props}>
          <AppBar className="navbar-top" >
            <Toolbar>
              {img}
              {menus.map((menu) => {
                return (
                      <Typography variant="h6" key={menu.id} >
                          <Link as={`/menu/${menu.name}`} href="/menu/[id]">
                              <a style={{ color: '#fff', textTransform: 'none', marginLeft: '30px'}} >{menu.name}</a>
                          </Link>
                      </Typography>
                    );
                  })}
            </Toolbar>
          </AppBar>
          </HideOnScroll>
        <Toolbar />
      </React.Fragment>
  ]);
};

export default Navigation;