import axios from 'axios';

export const fetchAllProducts = async () => {
  const { data } = await axios.get('http://localhost:3000/products');

  return data;
};
