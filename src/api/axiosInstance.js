import axios from "axios";

import {
  getToken,
  logout,
} from "../utils/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});


// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(

  (config) => {

    const token = getToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);


// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(

  (response) => response,

  (error) => {

    if (error.response?.status === 401) {

      logout();

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;