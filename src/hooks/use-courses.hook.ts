import { useEffect, useState } from 'react';
import { fetchCourses } from '../services/courseService';
import { CourseInterface } from '../types/interfaces';

export function useCourses() {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const [searchFilter, setSearchFilter] = useState('');
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const getCourses = () => {
    fetchCourses().then((data) => {
      setCourses(data as CourseInterface[]);
    });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return {
    courses,
    filteredCourses,
    setSearchFilter,
    getCourses,
  };
}
