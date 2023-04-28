import React, { memo } from 'react';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ProgressStatus from './ProgressStatus';
import { IconButton } from '@mui/material';
import { Badge } from '@material-ui/core';
import { format, fromUnixTime } from 'date-fns';
import ProductsListModal from '../Modal/ProductsListModal';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 20,
    background: '#FFFFFF',
    boxShadow: '0px 7px 20px rgba(45, 46, 44, 0.05)',
    borderRadius: 6,
    justifyContent: 'space-between',
    padding: '24px 13px 24px 13px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
  amount: {},
  progress: {
    width: 119,
    height: 24,
    background: '#EAE9FF',
    borderRadius: 6,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      marginRight: 16,
    },
  },
  gray: {
    color: '#8A8B8C',
  },
});

const OrderItem = ({ status, client, price, deliveryman, deliveryDate, products, productList }) => {
  const classes = useStyles();

  const date = fromUnixTime(deliveryDate / 1000);
  const formattedDate = format(date, 'dd/MM/yyyy');

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <b>{client}</b>
        <span className={classes.gray}>{deliveryman || 'Pending...'}</span>
        <span className={classes.gray}>{formattedDate}</span>
      </div>
      <div className={classes.container}>
        <span className={classes.gray}>{price}$</span>
        <div className={classes.icon}>
          <ProductsListModal productList={productList} products={products} />
        </div>
        <div className={classes.icon}>
          <IconButton>
            <Badge badgeContent={1} color='secondary'>
              <ChatBubbleOutlineIcon />
            </Badge>
          </IconButton>
        </div>
        <ProgressStatus status={status} />
      </div>
    </div>
  );
};

export default memo(OrderItem);
