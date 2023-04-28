import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as JollyLogo } from '../assets/jolly-logo.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 70,
    background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.07)',
  },
  logo: {
    marginLeft: 34,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link>
        <JollyLogo className={classes.logo} />
      </Link>
    </div>
  );
};

export default Header;
