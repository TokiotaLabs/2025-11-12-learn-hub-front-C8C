import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';

const CourseDetail: React.FC = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-[#636ae8] text-white py-16">
          <div className="max-w-6xl mx-auto px-8">
            <h1 className="text-4xl font-archivo font-bold mb-4">
              {item.title}
            </h1>
            <p className="text-xl mb-6">
              {item.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-lg">★★★★☆</span>
              <span className="text-sm">4.5 (2,145 reviews)</span>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl text-indigo-500 font-archivo font-semibold mb-4">
                  Course Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Master the fundamentals of JavaScript programming through
                  hands-on exercises and real-world projects. This course is
                  designed for beginners and will teach you everything from
                  basic syntax to advanced concepts like asynchronous
                  programming and DOM manipulation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl text-indigo-500 font-archivo font-semibold mb-4">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'JavaScript fundamentals and syntax',
                    'Working with arrays and objects',
                    'Functions and scope',
                    'DOM manipulation',
                    'Event handling',
                    'Asynchronous programming',
                    'Error handling',
                    'Modern ES6+ features',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#636ae8]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-archivo font-semibold mb-4">
                  Course Content
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Introduction to JavaScript',
                      lessons: 5,
                      duration: '45 min',
                    },
                    {
                      title: 'Variables and Data Types',
                      lessons: 8,
                      duration: '1h 15min',
                    },
                    { title: 'Control Flow', lessons: 6, duration: '55 min' },
                    { title: 'Functions', lessons: 7, duration: '1h 30min' },
                  ].map((section, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-indigo-500">{section.title}</h3>
                        <div className="text-sm text-gray-500">
                          {section.lessons} lessons • {section.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="bg-white shadow-sm rounded-lg p-6 sticky top-6">
                <div className="mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c319dfc98b16e62632f59e7bcea418ad3eaf5678be48e3793b33d318f1ab09"
                    alt="Course Preview"
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="text-3xl font-bold mb-4">$49.99</div>
                  <button className="w-full bg-[#636ae8] text-white py-3 rounded-lg font-semibold mb-3 cursor-pointer">
                    Enroll Now
                  </button>
                  <button className="w-full border border-[#636ae8] text-[#636ae8] py-3 rounded-lg font-semibold cursor-pointer">
                    Add to Wishlist
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-600">4.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lessons</span>
                    <span className="font-semibold text-gray-600">26 lessons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold text-gray-600">Beginner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-semibold text-gray-600">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetail;
