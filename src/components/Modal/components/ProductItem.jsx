import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#e1e1e1',
    borderRadius: 4,
    padding: '4px 8px 4px 8px',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      marginRight: 4,
    },
  },
  price: {
    '& > *:not(:last-child)': {
      marginRight: 4,
    },
  },
});

const ProductItem = ({ item, onRemove, onAdd }) => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);

  const handleIncAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
    onAdd(item.id);
  };

  const handleDecAmount = () => {
    if (amount === 0) {
      return;
    }

    setAmount((prevAmount) => prevAmount - 1);
    onRemove(item.id);
  };

  return (
    <div className={classes.root}>
      <div>
        <label>{item.name}</label>
        <IconButton onClick={() => handleDecAmount()}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <span>{amount}</span>
        <IconButton onClick={() => handleIncAmount()}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      <div className={classes.price}>
        <span>Price:</span>
        <label>{Number((item.price * amount).toFixed(2))}$</label>
      </div>
    </div>
  );
};

export default ProductItem;
