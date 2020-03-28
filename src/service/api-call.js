import axios from 'axios';

const get = async (endpoint) => {
  const result = await axios.get(endpoint);
  return result;
};

export { get };
