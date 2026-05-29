import axios from "axios";

const calendarApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

calendarApi.interceptors.request.use((config) => {
  const userJwtToken = localStorage.getItem("token");

  if (userJwtToken) {
    config.headers.set("x.token", userJwtToken);
  }

  return config;
});

export default calendarApi;
