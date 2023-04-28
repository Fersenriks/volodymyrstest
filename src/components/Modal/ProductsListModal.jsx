import React, { memo, useState } from 'react';

import Modal from '@mui/material/Modal';
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 24,
    padding: 16,
  },
  products: {
    '& > *:not(:last-child)': {
      marginBottom: 2,
    },
  },
  product: {
    display: 'flex',
    backgroundColor: '#e1e1e1',
    borderRadius: 4,
    padding: '4px 8px 4px 8px',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      marginRight: 4,
    },
  },
  productItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price: {
    display: 'flex',
    '& > *:not(:last-child)': {
      marginRight: 16,
    },
  },
});

const ProductsListModal = ({ products, productList }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const countNumbers = (arr) => {
    const counts = {};
    for (const num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }

    return Object.entries(counts).map(([id, amount]) => ({ id: Number(id), amount }));
  };

  const test = countNumbers(products).map(({ id, amount }) => {
    const { name, price } = productList.find((obj) => obj.id === id);
    return { id, amount, name, price: price * amount };
  });

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={products?.length || null} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={classes.modal}>
          <div className={classes.products}>
            {test.map((item) => (
              <div className={classes.productItem} key={item.id}>
                <div>{item.name}</div>
                <div className={classes.price}>
                  <div>x{item.amount}</div>
                  <div>price: {item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default memo(ProductsListModal);
