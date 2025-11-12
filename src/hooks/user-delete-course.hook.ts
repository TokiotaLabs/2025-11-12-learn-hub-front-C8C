import { deleteCourse } from '../services/courseService';

export const useDeleteCourse = () => {
  const handleDelete = async (id: string) => {
    await deleteCourse(id);
  };

  return { handleDelete };
};
