import { useEffect, useState } from 'react';
import { fetchCourses } from '../services/courseService';
import { CourseInterface } from '../types/interfaces';
import { useGlobalState } from '../store/GlobalStateContext';

export function useCourses() {
  
  const [searchFilter, setSearchFilter] = useState('');
  const { state, dispatch } = useGlobalState();
  
  const filteredCourses = state.courses && state.courses.filter((course) =>
    course.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const getCourses = async () => {
    const data = await fetchCourses();

    dispatch({
      type: 'SET_COURSES',
      payload: data as CourseInterface[],
    })
  };


  useEffect(() => {
    getCourses();
  }, []);

  return { getCourses, filteredCourses, setSearchFilter };
}
