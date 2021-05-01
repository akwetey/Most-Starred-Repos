/* eslint-disable */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const instance: AxiosInstance = axios.create();

instance.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "https://api.github.com"
    : "https://api.github.com";

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default instance;
