import config from "@/config";
import axios, { type AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response", response.data.message);
    return response;
  },
  async (error) => {
    console.log("Request failure", error.response.data.message);

    const originalRequest = error.config as AxiosRequestConfig;
    console.log("Original request", originalRequest);
    if (
      error.response.status === 401 &&
      error.response.data.message === "jwt expired"
    ) {
      console.log("Your token expired");
      try {
        const res = await axiosInstance.post("/auth/refresh-token");
        console.log(res);
        return axiosInstance(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }
    return Promise.reject(error);
  }
);
