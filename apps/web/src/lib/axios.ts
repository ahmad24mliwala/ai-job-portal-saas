import axios from "axios";

const api = axios.create({

  baseURL:
    "http://3.84.185.169:5000/api",

  withCredentials: true

});

export default api;
