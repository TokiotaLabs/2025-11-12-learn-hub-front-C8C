import {  useState } from 'react';

import { useGlobalState } from '../store/GlobalStateContext';

export function useFilterCourses() {
  const { state, } = useGlobalState();
  const [searchFilter, setSearchFilter] = useState('');

  const filteredCourses = state.courses?.filter((course) =>
    course.title.toLowerCase().includes(searchFilter.toLowerCase())
  ) || [];



  return { courses: filteredCourses, setSearchFilter };
}
