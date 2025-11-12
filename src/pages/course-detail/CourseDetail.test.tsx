import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import '@testing-library/jest-dom';

describe('CourseDetail', () => {
  test('renders course content sections', () => {
    render(
      <BrowserRouter>
        <CourseDetail />
      </BrowserRouter>
    );

    expect(screen.getByText('What You will Learn')).toBeInTheDocument();
    expect(screen.getByText('Course Content')).toBeInTheDocument();
  });

  test('renders sidebar with course details', () => {
    render(
      <BrowserRouter>
        <CourseDetail />
      </BrowserRouter>
    );

    expect(screen.getByText('$49.99')).toBeInTheDocument();
    expect(screen.getByText('Enroll Now')).toBeInTheDocument();
    expect(screen.getByText('Add to Wishlist')).toBeInTheDocument();
  });

  test('renders course rating and reviews', () => {
    render(
      <BrowserRouter>
        <CourseDetail />
      </BrowserRouter>
    );

    expect(screen.getByText('★★★★☆')).toBeInTheDocument();
    expect(screen.getByText('4.5 (2,145 reviews)')).toBeInTheDocument();
  });
});
