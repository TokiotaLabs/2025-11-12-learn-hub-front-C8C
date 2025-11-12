import { useEffect } from 'react';
import { fetchCourses } from '../services/courseService';
import { CourseInterface } from '../types/interfaces';
import { useGlobalState } from '../store/GlobalStateContext';

export function useCourses() {
  const { dispatch } = useGlobalState();

  useEffect(() => {
    fetchCourses().then((data) => {
      dispatch({ type: 'SET_COURSES', payload: data as CourseInterface[] });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
