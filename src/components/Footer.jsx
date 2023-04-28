import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    alignSelf: 'center',
    color: '#C4C4C4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  paginator: {
    alignSelf: 'end',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span> ©2020 Jolly Manager. All rights reserved.</span>
    </div>
  );
};

export default Footer;
