import axios from "axios";

export default () => {
  return axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS',
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: false,
  });
}
