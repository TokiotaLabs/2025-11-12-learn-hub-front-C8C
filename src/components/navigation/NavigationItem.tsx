import * as React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { NavigationItemProps } from '../../types/interfaces/navigation.interface';

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'overflow-hidden rounded-md bg-opacity-0 max-md:px-5 transition-all',
          isActive
            ? 'flex flex-col px-2 pt-4 font-bold text-indigo-500'
            : 'px-2 py-4 text-gray-600 hover:text-indigo-500'
        )
      }
    >
      <div className="self-center">{label}</div>
      <div
        className={clsx('flex shrink-0 mt-3 h-1 rounded-sm', {
          'bg-indigo-500': window.location.pathname === to,
          'bg-transparent': window.location.pathname !== to,
        })}
      />
    </NavLink>
  );
};
