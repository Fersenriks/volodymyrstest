import React from 'react';

import Login from './pages/Login';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import OrdersPage from './pages/Orders';
import { AuthProvider } from './routes/AuthProvider';
import Layout from './routes/Layout';
import SettingsPage from './pages/SettingsPage';
import NotFound from './pages/NotFound';
import RequireAuth from './routes/RequireAuth';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <AuthProvider>
      <div className={classes.root}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                <RequireAuth>
                  <OrdersPage />
                </RequireAuth>
              }
            />
            <Route
              path='settings'
              element={
                <RequireAuth>
                  <SettingsPage />
                </RequireAuth>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};
export default App;
//
// <Routes>
//     <Route exact path='/' element={<OrdersPage />} />
//     <Route exact path='/settings' element={<SettingsPage />} />
//     <Route path='*' element={<NotFound />} />
// </Routes>
