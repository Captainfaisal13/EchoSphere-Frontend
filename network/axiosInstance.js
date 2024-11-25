import axios from "axios";

const url = "http://localhost:5000/api/v1";

const axiosInstance = axios.create({
  baseURL: `${url}`, // Base URL for all API requests
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  function (result) {
    return result.data.response;
  },
  function (error) {
    let res = error.response;
    console.log({ error });
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export default axiosInstance;
