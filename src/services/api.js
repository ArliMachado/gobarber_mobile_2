import axios from 'axios';

const api = axios.create({
  baseURL: '10.168.71.63:3333',
});

export default api;
