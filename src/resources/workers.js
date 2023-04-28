import axios from 'axios';

export const fetchWorkers = async () => {
  const { data } = await axios.get('http://localhost:3000/workers');

  return data;
};
