import * as React from 'react';
import { CourseCardProps } from '../../types/interfaces/course-card.interface';

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="grow p-4 w-full bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-sm max-md:mt-10">
            <div className="text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">
              {title}
            </div>
            <div className="self-stretch mt-2 leading-6 rotate-[2.4492937051703357e-16rad] text-zinc-400">
              {description}
            </div>
            <a
              className="overflow-hidden px-3 py-2 mt-10 leading-loose text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid rotate-[2.4492937051703357e-16rad] max-md:mt-10"
              href="/course-detail"
            >
              <p className="text-indigo-500">Enroll Now</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`${title} course thumbnail`}
            className="object-contain grow shrink-0 w-40 max-w-full rounded aspect-[1.08] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};
