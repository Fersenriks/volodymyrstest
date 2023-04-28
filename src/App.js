import React, { useEffect, useState } from 'react';

import Login from './pages/Login';

import { getUserAuth } from './storage/auth';
import { makeStyles } from '@material-ui/core/styles';
import PrivateRoutes from './routes/PrivateRoutes';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

const App = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(getUserAuth());
  }, []);

  return (
    <div className={classes.root}>
      {auth ? <PrivateRoutes setAuth={setAuth} /> : <Login setAuth={setAuth} />}
    </div>
  );
};
export default App;
