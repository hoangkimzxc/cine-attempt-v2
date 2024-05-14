import axios from "axios";

const axiosOphim = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosOphim.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (config.headers && token) {
    //   config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosOphim.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Error from API:", error.message);
    return Promise.reject(error);
  }
);

export default axiosOphim;
