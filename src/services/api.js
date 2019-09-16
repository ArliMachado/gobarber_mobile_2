import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.168.71.63:3333',
  // baseURL: 'http://localhost:3333',
});

export default api;
