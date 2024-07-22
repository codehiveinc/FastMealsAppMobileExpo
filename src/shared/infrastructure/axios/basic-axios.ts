import axios from "axios";

const API_URL = "https://codehive12.zapto.org/backend/api/v1";

export const axiosClient = axios.create({
  baseURL: API_URL,
});
