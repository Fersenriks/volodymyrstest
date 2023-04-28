import React, { memo, createContext, Suspense } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { makeStyles } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchAllResources } from '../resources/resources';
import { CircularProgress } from '@material-ui/core';

const OrdersPage = React.lazy(() => import('../pages/Orders'));
const SettingsPage = React.lazy(() => import('../pages/SettingsPage'));

const useStyles = makeStyles({
  root: {
    height: 'calc(100% - 70px)',
  },
  main: {
    display: 'flex',
    height: '100%',
  },
  wrapper: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    paddingLeft: 40,
    paddingTop: 34,
    paddingBottom: 34,
    paddingRight: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loadingStatus: {
    alignSelf: 'center',
    margin: 'auto',
  },
});

export const ResourcesContext = createContext(null);

const PrivateRoutes = ({ setAuth }) => {
  const classes = useStyles();

  const { data, isLoading } = useQuery('resources', fetchAllResources);

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.main}>
        <Sidebar setAuth={setAuth} />
        <ResourcesContext.Provider value={data}>
          <div className={classes.wrapper}>
            <Suspense fallback={<CircularProgress className={classes.loadingStatus} />}>
              <Routes>
                <Route exact path='/' element={<OrdersPage />} />
                <Route exact path='/settings' element={<SettingsPage />} />
              </Routes>
            </Suspense>
          </div>
        </ResourcesContext.Provider>
      </div>
    </div>
  );
};

export default memo(PrivateRoutes);
