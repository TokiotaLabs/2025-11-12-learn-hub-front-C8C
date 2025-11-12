import { StudentInterface } from '../types/interfaces/student.interface';
import api from './api';

export const getStudents = async (): Promise<Partial<StudentInterface>[]> => {
  const response = await api.get<StudentInterface[]>('/student');
  return response.data;
};

export const createStudent = async (
  data: Partial<StudentInterface>
): Promise<StudentInterface> => {
  const response = await api.post<StudentInterface>('/student', data);
  return response.data;
};
