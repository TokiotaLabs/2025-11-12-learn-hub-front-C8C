import { Link, NavLink } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import { useDeleteCourse } from '../../hooks/user-delete-course.hook';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { CourseInterface } from '../../types/interfaces';

interface Props {
  course: CourseInterface;
  imageUrl?: string;
  onChange: () => void;
}
export const CourseCard = (props: Props) => {
  const {
    course,
    imageUrl = 'https://picsum.photos/id/2/200/300',
    onChange,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { handleDelete } = useDeleteCourse();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        action={async () => {
          await handleDelete(course.id);
          setIsModalOpen(false);
          onChange();
        }}
        title="My Modal"
      >
        <p className="text-indigo-500 text-center font-medium text-lg">
          ¿Estas seguro que quieres eliminar el curso?
        </p>
      </Modal>
      <div
        id="course-card"
        className="grow p-4 w-full bg-white rounded-md shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:mt-6 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-sm max-md:mt-10">
              <div className="text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">
                {course.title}
              </div>
              <div className="self-stretch mt-2 leading-6 rotate-[2.4492937051703357e-16rad] text-zinc-400">
                {course.description}
              </div>
              <NavLink
                className="overflow-hidden px-3 py-2 mt-10 leading-loose text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid rotate-[2.4492937051703357e-16rad] max-md:mt-10"
                to={`/courses/detail/${course.id}`}
              >
                <p className="text-indigo-500">Enroll Now</p>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt={`${name} course thumbnail`}
              className="object-contain grow shrink-0 w-40 max-w-full rounded aspect-[1.08] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-2">
          <Link className="cursor-pointer" to="/new" state={{ ...course }}>
            <Pencil color="#e2a703" />
          </Link>
          <button
            className="cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Trash2 color="red" />
          </button>
        </div>
      </div>
    </>
  );
};
