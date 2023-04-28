import React, { useEffect } from 'react';

import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    background: '#FFFFFF',
    borderRadius: 6,
    height: 48,
    width: '100%',
  },
}));

const Input = ({ placeholder, label, type = 'text', onChange }) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (type === 'text') {
      setShowPassword(true);
    }
  }, [type]);

  return (
    <div className={classes.root}>
      {label && <label>{label}</label>}
      <OutlinedInput
        onChange={(event) => onChange(event.target.value)}
        className={classes.input}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          type === 'password' && (
            <InputAdornment position={'end'}>
              <IconButton
                aria-label={placeholder}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </div>
  );
};

export default Input;
