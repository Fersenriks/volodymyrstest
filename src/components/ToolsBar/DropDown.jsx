import { useState } from 'react';

import { Menu, MenuItem, Typography, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    height: '40px',
  },
});

const DropDown = ({ label, icon, options, onChange }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    onChange(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className={classes.button} variant={'outlined'} onClick={handleClick}>
        <Typography variant='button'>{label}</Typography>
        {icon}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {options?.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClose(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropDown;
