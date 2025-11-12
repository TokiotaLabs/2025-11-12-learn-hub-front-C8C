import React from 'react';
import { NavigationItem } from './NavigationItem';

const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
  ];
  return (
    <nav className="flex flex-auto text-sm leading-loose text-gray-600 bg-opacity-0">
      {navItems.map((item) => (
        <NavigationItem key={item.to} {...item} />
      ))}
    </nav>
  );
};

export default Navigation;
