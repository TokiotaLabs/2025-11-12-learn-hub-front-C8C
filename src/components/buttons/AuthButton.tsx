import * as React from 'react';
import { AuthButtonProps } from '../../types/interfaces/auth-button.interface';
import { Link } from 'react-router-dom';

export const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  variant,
  iconUrl,
  url,
}) => {
  return (
    <Link
      className={`flex overflow-hidden gap-1.5 px-8 py-2 ${
        variant === 'outline'
          ? 'text-indigo-500 bg-white border-indigo-500'
          : 'text-indigo-500 bg-indigo-500 border-black border-opacity-0'
      } rounded-xl border border-solid rotate-[2.4492937051703357e-16rad] max-md:px-5`}
      to={url}
    >
      {iconUrl && (
        <img
          loading="lazy"
          src={iconUrl}
          alt="icon"
          className="object-contain shrink-0 my-auto w-4 aspect-square"
        />
      )}

      <p className={variant === 'outline' ? 'text-indigo-500' : 'text-white'}>
        {label}
      </p>
    </Link>
  );
};
