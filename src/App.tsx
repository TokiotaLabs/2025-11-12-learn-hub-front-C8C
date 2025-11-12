import React from 'react';
import AppRoutes from './routes/Routes';
import { useCourses } from './hooks/use-courses.hook';
import './App.css';

const App: React.FC = () => {
  useCourses();

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
