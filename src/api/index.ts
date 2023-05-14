import axios, { AxiosInstance } from "axios";

const params = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const httpClient = axios.create(params);

const api = (httpClient: AxiosInstance) => {
  return {
    get: <Type>(url: string) => httpClient.get<Type>(url),
  };
};

export default api(httpClient);
