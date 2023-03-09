import axios from "axios";
//create an Axios instance with a config to prevent us from repeating these options in every request
const BASE_URL = "https://amala-api.azurewebsites.net/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";