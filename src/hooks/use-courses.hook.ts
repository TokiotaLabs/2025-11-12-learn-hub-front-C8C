import { useEffect } from 'react';
import { fetchCourses } from '../services/courseService';
import { useState } from 'react';
import { CourseInterface } from '../types/interfaces';

export function useCourses() {
  const [courses, setCourses] = useState<CourseInterface[]>();

  useEffect(() => {
    fetchCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return { courses };
}
