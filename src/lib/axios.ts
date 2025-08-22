import axios, { type AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "url",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  async (error) => {
    console.log("Request failure", error);
    const originalRequest = error.config as AxiosRequestConfig;
    if (error.response.status === 401 || error.response.status === 403) {
      console.log("Forbidden access");
    }
    if (error.response.data.message === "jwt expired") {
      console.log("Your token expired");
    }
    try {
      const res = await axiosInstance.post("/auth/refresh-token");
      console.log(res);
      return axiosInstance(originalRequest);
    } catch (error) {
      console.error(error);
    }
    return Promise.reject(error);
  }
);
