import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from "expo-secure-store";

// const API_URL = "https://codehive12.zapto.org/backend/api/v1";
const API_URL = "http://localhost:8080/api/v1";

const authClient = axios.create({
  baseURL: API_URL,
});

authClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken = await SecureStore.getItemAsync("accessToken");
    if (config.headers && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return authClient(originalRequest);
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  const response = await authClient.post("/auth/tokens/refresh", {
    refresh: refreshToken,
  });
  const { access_token: accessToken } = response.data.data;
  await SecureStore.setItemAsync("accessToken", accessToken);
  return accessToken;
};

export { authClient };
