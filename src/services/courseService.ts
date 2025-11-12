import { CourseInterface } from '../types/interfaces/';
import api from './api';

export const fetchCourses = async (): Promise<Partial<CourseInterface>[]> => {
  const response = await api.get<CourseInterface[]>('/course');
  return response.data;
};

export const fetchCourseById = async (id: string): Promise<CourseInterface> => {
  const response = await api.get<CourseInterface>(`/course/${id}`);
  return response.data;
};

export const createCourse = async (
  courseData: Partial<CourseInterface>
): Promise<CourseInterface> => {
  const response = await api.post<CourseInterface>('/course', courseData);
  return response.data;
};

export const updateCourse = async (
  id: string,
  courseData: Partial<CourseInterface>
): Promise<CourseInterface> => {
  const response = await api.put<CourseInterface>(`/course/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id: string): Promise<void> => {
  await api.delete(`/course/${id}`);
};
