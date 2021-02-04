import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/tableStyle.js';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core'; 

const useStyles = makeStyles(styles);

const Navigation = ({ menus }) => {

  const classes = useStyles();
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
    </div>
  );
};

export default Navigation;