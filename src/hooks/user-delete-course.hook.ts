import { deleteCourse } from '../services/courseService';
import { useCourses } from './use-courses.hook';

export const useDeleteCourse = () => {
  const { getCourses } = useCourses();

  const handleDelete = async (id: string) => {
    await deleteCourse(id);
    getCourses();
  };

  return { handleDelete };
};
