import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: { 
    "Content-Type": "application/json"
  }
});

export default instanceAxios;
export  const baseURL = 'http://localhost:4000'
