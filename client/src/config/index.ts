import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.1.241:8080/api/',
});

export default API;
