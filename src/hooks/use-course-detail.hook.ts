import { useEffect, useState } from 'react';
import { fetchCourseById } from '../services/courseService';
import { CourseInterface } from '../types/interfaces';

export function useCoursesDetail(id?: string) {
  const [course, setCourse] = useState<CourseInterface>();

  useEffect(() => {
    fetchCourseById(id || '').then((data) => {
      setCourse(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { course };
}
