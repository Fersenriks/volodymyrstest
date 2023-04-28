export const userLogIn = () => {
  localStorage.setItem('user_auth', 'true');
};

export const userLogOut = () => {
  localStorage.removeItem('user_auth');
};

export const getUserAuth = () => {
  return localStorage.getItem('user_auth');
};
