import React, { memo, useContext, useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import debounce from 'lodash.debounce';
import Footer from '../components/Footer';
import ToolBar from '../components/ToolsBar/ToolBar';
import OrderItem from '../components/Orders/OrderItem';
import { fetchOrders } from '../resources/orders';
import { CircularProgress } from '@material-ui/core';
import { ResourcesContext } from '../routes/Layout';
import { Pagination } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loadingStatus: {
    alignSelf: 'center',
    margin: 'auto',
  },
  orders: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  paginator: {
    alignSelf: 'end',
  },
});

const OrdersPage = () => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const { products } = useContext(ResourcesContext);
  const [sortValue, setSortValue] = useState(null);
  const [statusValue, setStatusValue] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading, isError } = useQuery(
    ['orders', page, statusValue, sortValue, searchValue],
    () => fetchOrders(page, 5, statusValue, sortValue, searchValue)
  );

  const handleChangeSearchValue = debounce((value) => {
    setSearchValue(value);
  }, 1000);

  const handleSelectSortValue = (value) => {
    setSortValue(value);
  };

  const handleSelectStatusValue = (value) => {
    setStatusValue(value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  if (isError) {
    return <div className={classes.loadingStatus}>Something went wrong :(</div>;
  }

  return (
    <>
      <div className={classes.orders}>
        <div>
          <ToolBar
            onChangeSearch={handleChangeSearchValue}
            onChangeStatus={handleSelectStatusValue}
            onChangeSort={handleSelectSortValue}
          />
          {isLoading ? (
            <CircularProgress className={classes.loadingStatus} />
          ) : (
            data.data.map((item) => (
              <OrderItem key={item.id} status={'in-progress'} productList={products} {...item} />
            ))
          )}
        </div>
        <Pagination
          onChange={handleChangePage}
          page={page}
          className={classes.paginator}
          count={data?.totalPages}
          shape='rounded'
        />
      </div>
      <Footer />
    </>
  );
};

export default memo(OrdersPage);
