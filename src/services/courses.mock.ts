import { CourseInterface } from '../types/interfaces';

export const mockCourses: Partial<CourseInterface>[] = [
  {
    id: 1,
    title: 'Introduction to TypeScript',
    description: 'Learn the basics of TypeScript.',
    duration: '3 hours',
    imageUrl: 'https://picsum.photos/id/2/200/300',
  },
  {
    id: 2,
    title: 'Advanced React',
    description: 'Dive deep into React and its ecosystem.',
    duration: '5 hours',
    imageUrl: 'https://picsum.photos/id/1/200/300',
  },
  {
    id: 3,
    title: 'Full-Stack Development',
    description:
      'Become a full-stack developer with this comprehensive course.',
    duration: '10 hours',
    imageUrl: 'https://picsum.photos/id/3/200/300',
  },
];
