import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://dogapi.dog/api/v2', // Endpoint local para evitar bloqueos
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig);

const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

type RequestConfig = AxiosRequestConfig;
api.interceptors.request.use(
  (config: RequestConfig) => {
    const token = getAuthToken();
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('No autorizado. Redirigiendo a login...');
          break;
        case 403:
          console.error('Acceso prohibido.');
          break;
        default:
          console.error(
            'Error en la respuesta de la API:',
            error.response.data
          );
      }
    } else if (error.request) {
      console.error('No hubo respuesta del servidor.');
    } else {
      console.error('Error en la configuración de la solicitud.');
    }
    return Promise.reject(error);
  }
);

export default api;
