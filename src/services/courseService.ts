import { CourseInterface } from '../types/interfaces/';
import api from './api';

export const fetchCourses = async (): Promise<CourseInterface[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const response = await api.get<CourseInterface[]>('/facts');
  // return response.data;
  return [];
};

export const fetchCourseById = async (id: number): Promise<CourseInterface> => {
  const response = await api.get<CourseInterface>(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (
  courseData: Omit<CourseInterface, 'id'>
): Promise<CourseInterface> => {
  const response = await api.post<CourseInterface>('/courses', courseData);
  return response.data;
};

export const updateCourse = async (
  id: number,
  courseData: Partial<CourseInterface>
): Promise<CourseInterface> => {
  const response = await api.put<CourseInterface>(`/courses/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id: number): Promise<void> => {
  await api.delete(`/courses/${id}`);
};
