// filepath: src/routes/Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import CourseCatalog from '../pages/courses/CourseCatalog';
import SignUp from '../pages/sign-up/SignUp';
import CourseDetail from '../pages/course-detail/CourseDetail';
import CourseManager from '../pages/course-manager/CourseManager';
import Profile from '../pages/profile/Profile';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/courses" element={<CourseCatalog />} />
      <Route path="/courses/detail/:id" element={<CourseDetail />} />
      <Route path="/new" element={<CourseManager />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
