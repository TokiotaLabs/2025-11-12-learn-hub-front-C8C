import React, { useEffect, useState } from 'react';
import { CourseInterface } from '../../types/interfaces/course.interface';
import { useGlobalState } from '../../store/GlobalStateContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { createCourse, updateCourse } from '../../services/courseService';

const CourseForm: React.FC = () => {
  const [formData, setFormData] = useState<CourseInterface>({
    id: 0,
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    duration: '',
    price: '',
    prerequisites: '',
    instructor: '',
    modality: 'Online',
    schedule: '',
    materials: '',
    certification: false,
    seats: '',
    location: '',
    category: '',
    imageUrl: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state, dispatch } = useGlobalState();
  const navigate = useNavigate();
  const location = useLocation();
  const getLocationState = location.state;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      await updateCourse(formData.id, formData).then(() => {
        setIsModalOpen(true);
      });
      const updatedCourses =
        state?.courses &&
        state.courses.map((course) =>
          course.id === formData.id ? formData : course
        );
      dispatch({
        type: 'SET_COURSES',
        payload: updatedCourses as CourseInterface[],
      });

    } else {
      dispatch({
        type: 'SET_COURSES',
        payload: [
          ...(state.courses as CourseInterface[]),
          { ...formData, id: Date.now() },
        ],
      });
      await createCourse(formData).then(() => {
        setIsModalOpen(true);
      });

    }

    

    setFormData({
      id: 0,
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      duration: '',
      price: '',
      prerequisites: '',
      instructor: '',
      modality: 'Online',
      schedule: '',
      materials: '',
      certification: false,
      seats: '',
      location: '',
      category: '',
      imageUrl: '',
    });

  };

  useEffect(() => {
    if (getLocationState) {
      setIsEditing(true);
      setFormData(getLocationState);
    }
  }, [getLocationState]);

  return (
    <div className="max-w-[768px] mx-auto w-full p-16 mt-6 mb-6 bg-white rounded-lg shadow-md">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        action={() => {
          setIsModalOpen(false);
          navigate('/courses');
        }}
        title="My Modal"
      >
        <p className="text-indigo-500 text-center font-medium text-lg">
          {isEditing
            ? 'El curso se ha editado correctamente.'
            : 'El curso se ha creado correctamente.'}
        </p>
      </Modal>
      <h2 className="text-2xl text-indigo-500 font-bold mb-4">
        {isEditing ? 'Editar Curso' : 'Crear Nuevo Curso'}
      </h2>


      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='name'>
            Título del curso
          </label>
          <input
            id='name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='description'>
            Descripción
          </label>
          <textarea
          id='description'
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='startDate'>
            Fecha de inicio
          </label>
          <input
          id='startDate'
            type="date"
            name="startDate"
            value={formData.startDate.split("T")[0]}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='endDate'>
            Fecha de fin
          </label>
          <input
          id='endDate'
            type="date"
            name="endDate"
            value={formData.endDate.split("T")[0]}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='duration'>
            Duración
          </label>
          <input
          id='duration'
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='price'>
            Precio
          </label>
          <input
          id='price'
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='prerequisites'>
            Requisitos previos
          </label>
          <textarea
          id='prerequisites'
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='instructor'>
            Instructor
          </label>
          <input
          id='instructor'
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='modality'>
            Modalidad
          </label>
          <select
          id='modality'
            name="modality"
            value={formData.modality}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="Online">Online</option>
            <option value="Presencial">Presencial</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='schedule'>
            Horario
          </label>
          <input
          id='schedule'
            type="text"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='materials'>
            Materiales incluidos
          </label>
          <textarea
          id='materials'
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='certification'>
            <input
            id='certification'
              type="checkbox"
              name="certification"
              checked={formData.certification}
              onChange={handleChange}
              className="mr-2"
            />
            Certificación
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='seats'>
            Número de plazas
          </label>
          <input
          id='seats'
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='location'>
            Ubicación
          </label>
          <input
          id='location'
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor='category'>
            Categoría
          </label>
          <input
          id='category'
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md cursor-pointer"
        >
          {isEditing ? 'Guardar Cambios' : 'Crear Curso'}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
