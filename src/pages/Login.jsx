import React, { useState } from 'react';

import Input from '../components/Input';
import { userLogIn } from '../storage/auth';
import { Button } from '@material-ui/core';

import { ReactComponent as JollyLogo } from '../assets/jolly-logo.svg';
import { ReactComponent as JollyImg } from '../assets/OBJECTS.svg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  sidebar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formSide: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    alignItems: 'center',
  },
  form: {
    padding: 8,
    width: '70%',
  },
  logo: {
    padding: 45,
    height: 30,
    alignSelf: 'start',
  },
  img: {
    alignSelf: 'center',
    flex: '1',
    top: '100%',
    bottom: '100%',
  },
  label: {
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#1FC074',
    borderRadius: '6px',
    fontFamily: 'Abel',
    width: '100%',
    fontWeight: '400',
    color: 'white',
    '&:hover': {
      backgroundColor: '#0D9F5E',
    },
  },
});

const Login = ({ setAuth }) => {
  const classes = useStyles();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogInBtn = () => {
    if (login === process.env.REACT_APP_LOGIN && password === process.env.REACT_APP_PASSWORD) {
      userLogIn();
      setAuth('true');
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <JollyLogo className={classes.logo} />
        <JollyImg className={classes.img} />
      </div>
      <div className={classes.formSide}>
        <div className={classes.form}>
          <span>SIGN IN TO JollyManager </span>
          <Input onChange={setLogin} label={'Email'} placeholder={'Enter your email'} />
          <Input
            onChange={setPassword}
            label={'Password'}
            placeholder={'Enter your password'}
            type={'password'}
          />
          <Button onClick={() => onClickLogInBtn()} className={classes.button}>
            Sign in
          </Button>
        </div>
        <span className={classes.label}>©2020 Jolly Manager. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Login;
