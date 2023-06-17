import { createContext } from 'react';
import { getUserAuth, userLogIn, userLogOut } from '../storage/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const login = () => {
    userLogIn();
  };

  const logout = () => {
    userLogOut();
  };

  const user = getUserAuth();

  const value = { user, logout, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
