import React, { memo } from 'react';

import { ListItemButton } from '@mui/material';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GradingIcon from '@mui/icons-material/Grading';
import LogoutIcon from '@mui/icons-material/Logout';
import { userLogOut } from '../storage/auth';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: 200,
    height: '100%',
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logout: {},
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

const navOptions = [
  { label: 'Orders', link: '/', icon: <GradingIcon /> },
  { label: 'Settings', link: '/settings', icon: <BusinessCenterIcon /> },
];

const Sidebar = ({ setAuth }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleLogOut = () => {
    userLogOut();
    setAuth(null);
  };

  return (
    <div className={classes.root}>
      <List component='nav'>
        {navOptions.map((item, index) => (
          <Link className={classes.link} key={index} to={item.link}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <List className={classes.logout}>
        <ListItemButton onClick={() => handleLogOut()}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary='Log out' />
        </ListItemButton>
      </List>
    </div>
  );
};

export default memo(Sidebar);
