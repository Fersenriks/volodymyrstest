import { useContext } from 'react';
import { AuthContext } from '../routes/AuthProvider';

export function useAuth() {
  return useContext(AuthContext);
}
