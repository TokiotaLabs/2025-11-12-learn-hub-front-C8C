import React from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { CourseCard } from '../../components/course-card/CourseCard';
import { Testimonial } from '../../components/testimonial/Testimonial';
import { Link } from 'react-router-dom';
import { useCourses } from '../../hooks/use-courses.hook';

const testimonial = {
  quote:
    'LearnHub has transformed my career! The courses are well-structured and the community support is outstanding.',
  name: 'Emily Johnson',
  role: 'Software Developer',
  imageUrl:
    'https://cdn.builder.io/api/v1/image/assets/TEMP/e922464baea409103a49400a49011315ce9211ace6b214a6000dcd7d7c6995f6?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a',
};

const Home: React.FC = () => {
  const { courses, getCourses } = useCourses();

  return (
    <div className="flex overflow-hidden flex-col bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)]">
      <Header />
      <div className="flex overflow-hidden flex-col w-full text-white bg-neutral-800 max-md:max-w-full">
        <div className="flex relative flex-col w-full min-h-[640px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af42a541c37b1712a1396231dab07753cb7580a59bea72d76f4c768d7a2d7110?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a"
            alt="Students learning together"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col items-start px-20 pt-72 pb-32 w-full bg-opacity-40 max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="flex flex-col items-start mb-0 max-w-full w-[791px] max-md:mb-2.5">
              <h1 className="text-6xl font-bold leading-none rotate-[2.4492937051703357e-16rad] max-md:max-w-full max-md:text-4xl">
                Unlock Your Potential
              </h1>
              <p className="self-stretch mt-6 text-2xl text-gray-100 rotate-[2.4492937051703357e-16rad] max-md:max-w-full">
                Empowering you with diverse courses for every passion and skill
                level.
              </p>
              <Link
                className="overflow-hidden px-5 py-3 mt-6 text-lg leading-loose bg-indigo-500 rounded-md border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad]"
                to="/courses"
              >
                <p className="text-white">Explore Courses</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Courses section */}
      <section className="flex flex-col justify-center items-center px-20 py-14 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
          <h2 className="self-center text-2xl text-black rotate-[2.4492937051703357e-16rad]">
            Popular Courses
          </h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-5">
            {courses &&
              courses.map((course, index) => (
                <CourseCard key={index} course={course} onChange={getCourses} />
              ))}
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="flex flex-col justify-center items-center px-16 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1144px] max-md:max-w-full">
          <Testimonial {...testimonial} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
