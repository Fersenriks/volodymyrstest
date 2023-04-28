import axios from 'axios';

export const fetchAllResources = async () => {
  // const orders = (await axios.get('http://localhost:3000/orders')).data;
  const products = (await axios.get('http://localhost:3000/products')).data;
  const clients = (await axios.get('http://localhost:3000/clients')).data;
  const workers = (await axios.get('http://localhost:3000/workers')).data;

  return { products, clients, workers };
};
