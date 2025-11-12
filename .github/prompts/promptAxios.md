# 📌 GitHub Copilot Prompt: Instalación y Configuración de Axios en React con TypeScript y Vite para una API de Cursos en Línea

## 🚀 Objetivo

Guía para instalar y configurar Axios en un proyecto React con TypeScript y Vite. Además, se establecerán interceptores y se consumirá una API gratuita de cursos en línea similar a Udemy.

---

## 📝 **Prompt para GitHub Copilot**

# 🚀 Configurar Axios en un proyecto React con TypeScript y Vite

## 1️⃣ Instalar Axios

Ejecuta el siguiente comando para instalar Axios en el proyecto:

```sh
npm install axios
```

## 2️⃣ Configurar una instancia de Axios

Crea un archivo `api.ts` en la carpeta `src/services/` con la configuración base:

```typescript
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
  baseURL: '/api', // Endpoint local para evitar bloqueos
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig);

// Función para obtener el token de autenticación
const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

// Interceptor para incluir token de autenticación en cada solicitud
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

// Interceptor para manejar respuestas y errores globales
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('No autorizado. Redirigiendo a login...');
          break;
          ca;
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
```

## 3️⃣ Crear un servicio para manejar cursos

Crea un archivo `courseService.ts` en `src/services/`:

```typescript
import api from './api';

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
}

export const fetchCourses = async (): Promise<Course[]> => {
  const response = await api.get<Course[]>('/courses');
  return response.data;
};

export const fetchCourseById = async (id: number): Promise<Course> => {
  const response = await api.get<Course>(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (
  courseData: Omit<Course, 'id'>
): Promise<Course> => {
  const response = await api.post<Course>('/courses', courseData);
  return response.data;
};

export const updateCourse = async (
  id: number,
  courseData: Partial<Course>
): Promise<Course> => {
  const response = await api.put<Course>(`/courses/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id: number): Promise<void> => {
  await api.delete(`/courses/${id}`);
};
```
