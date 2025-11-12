import { deleteCourse } from '../services/courseService';
import { useGlobalState } from '../store/GlobalStateContext';
import { CourseInterface } from '../types/interfaces';

export const useDeleteCourse = () => {
  const { state, dispatch } = useGlobalState();

  const handleDelete = async (id: number) => {
    await deleteCourse(id);
    const updatedCourses = state.courses?.filter((course) => course.id !== id);
    dispatch({
      type: 'SET_COURSES',
      payload: updatedCourses as CourseInterface[],
    });
  };

  return { handleDelete };
};
