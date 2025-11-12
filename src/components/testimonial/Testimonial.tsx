import * as React from 'react';
import { TestimonialProps } from '../../types/interfaces/testimonial.interface';

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${name}'s testimonial`}
          className="object-contain grow shrink-0 max-w-full rounded-2xl aspect-[0.9] w-[280px] max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/819d2af2f70dfbf12acc40e8c8af2786870ec6ed5a7c57b171a94c84796cdbb0?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
            alt=""
            className="object-contain max-w-full aspect-[5] w-[180px]"
          />
          <div className="mt-8 mr-8 text-xl leading-8 rotate-[2.4492937051703357e-16rad] text-zinc-900 max-md:mr-2.5 max-md:max-w-full">
            {quote}
          </div>
          <div className="flex flex-wrap gap-10 mt-20 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div className="self-start text-xl font-bold rotate-[2.4492937051703357e-16rad] text-zinc-900">
                {name}
              </div>
              <div className="text-lg leading-loose rotate-[2.4492937051703357e-16rad] text-zinc-400">
                {role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
