import axios from "axios";

const calendarApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// TODO: Configurar interceptores

export default calendarApi;
