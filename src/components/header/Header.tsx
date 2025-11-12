import React from 'react';
import { AuthButton } from '../buttons/AuthButton';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-6 py-0.5 w-full bg-white shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 whitespace-nowrap">
        <Link className="flex gap-2.5 my-auto text-3xl text-black" to="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48b6d4306273d64ca054dedb3bc30ebbbbb8e97dfd3c2faffcfa1937631d151b?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
            alt="LearnHub logo"
            className="object-contain shrink-0 my-auto w-9 aspect-square"
          />
          <div className="basis-auto rotate-[2.4492937051703357e-16rad]">
            LearnHub
          </div>
        </Link>
        <Navigation />
      </div>
      <div className="flex gap-4 my-auto text-sm leading-loose">
        <AuthButton
          url={'/sign-up'}
          label="Sign Up"
          variant="outline"
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6810e255885f5b90fc97b660927de67d9e33675c6d1a6f5b377da140257fbc1b?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
        />
        <AuthButton
          url={'/sign-in'}
          label="Sign In"
          variant="solid"
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/49d4e4c88334cf38a88fd2471d65bd3852400ddfa054742c489b7e2ae99279c6?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
        />
        <AuthButton url={'/new'} label="New" variant="solid" iconUrl="" />
      </div>
    </header>
  );
};

export default Header;
