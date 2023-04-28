import axios from 'axios';

export const fetchOrders = async (page = 1, limit = 5, filterValue, sortValue, searchValue) => {
  const response = await axios.get(
    `http://localhost:3000/orders?${filterValue ? `status=${filterValue}` : ''}${
      sortValue ? `&_sort=${sortValue}` : ''
    }${searchValue ? `&q=${searchValue}` : ''}&_limit=${limit}&_page=${page}`
  );

  return {
    data: response.data,
    totalPages: Math.ceil(response.headers['x-total-count'] / limit),
  };
};

export const createOrder = async (postData) => {
  const { data } = axios.post('http://localhost:3000/orders', postData);

  return data;
};
