import SearchBar from '../../components/search/SearchBar';
import TestimonialSlider from '../../components/testimonial/TestimonialSlider';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { CourseCard } from '../../components/course-card/CourseCard';
import { useCourses } from '../../hooks/use-courses.hook';

const CourseCatalog = () => {
  const { filteredCourses, setSearchFilter, getCourses } = useCourses();

  return (
    <div className="bg-white shadow-md overflow-hidden">
      <Header />
      <div className="bg-white flex w-full px-20 py-14 flex-col items-center font-normal justify-center">
        <div className="flex w-[800px] max-w-full flex-col items-stretch">
          <h1 className="transform rotate-0 text-black text-2xl font-archivo self-center">
            Course Catalog
          </h1>
          <SearchBar onChange={setSearchFilter} />
        </div>
      </div>
      <div className="bg-white flex w-full px-20 py-14 flex-col items-center justify-center">
        <div className="flex w-full max-w-[1176px] flex-col items-stretch">
          <h2 className="transform rotate-0 text-black text-2xl font-archivo font-normal self-center">
            Available Courses
          </h2>
          <div className="mt-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredCourses &&
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onChange={getCourses}
                />
              ))}
          </div>
        </div>
      </div>
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default CourseCatalog;
