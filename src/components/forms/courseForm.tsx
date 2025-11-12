import React, { useEffect, useState } from 'react';
import { CourseInterface } from '../../types/interfaces/course.interface';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { createCourse, updateCourse } from '../../services/courseService';
import { useGlobalState } from '../../store/GlobalStateContext';

const CourseForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<CourseInterface>>({
    title: '',
    description: 'des',
    startDate: '2025-03-21T09:59:35.314Z',
    endDate: '2025-04-21T09:59:35.314Z',
    duration: 10,
    price: 100,
    prerequisites: 'prerequisites',
    instructorId: 'c7d42d4c-9ac4-49b0-8ea4-9644c045c94c',
    modality: 'modality',
    includedMaterials: 'includedMaterials',
    certification: 'certification',
    availableSeats: 100,
    location: 'location',
    category: 'category',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useGlobalState();
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

  const handleSetFormData = () => {
    setFormData({
      title: '',
      description: 'des',
      startDate: '2025-03-21T09:59:35.314Z',
      endDate: '2025-04-21T09:59:35.314Z',
      duration: 10,
      price: 100,
      prerequisites: 'prerequisites',
      instructorId: 'c7d42d4c-9ac4-49b0-8ea4-9644c045c94c',
      modality: 'modality',
      includedMaterials: 'includedMaterials',
      certification: 'certification',
      availableSeats: 100,
      location: 'location',
      category: 'category',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && formData.id) {
      updateCourse(formData.id, formData).then(() => {
        setIsModalOpen(true);
        const updatedCourses =
          state?.courses &&
          state.courses.map((course) =>
            course.id === formData.id ? formData : course
          );
        dispatch({
          type: 'SET_COURSES',
          payload: updatedCourses as CourseInterface[],
        });
        handleSetFormData();
      });
    } else {
      dispatch({
        type: 'SET_COURSES',
        payload: [
          ...(state.courses as CourseInterface[]),
          { ...formData } as CourseInterface,
        ],
      });
      createCourse(formData)
        .then(() => {
          setIsModalOpen(true);
          handleSetFormData();
        });
    }
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
          navigate(-1);
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

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Título del curso
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="startDate"
          >
            Fecha de inicio
          </label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate && formData.startDate.split('T')[0]}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="endDate"
          >
            Fecha de fin
          </label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            value={formData.endDate && formData.endDate.split('T')[0]}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="duration"
          >
            Duración
          </label>
          <input
            id="duration"
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="price"
          >
            Precio
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="prerequisites"
          >
            Requisitos previos
          </label>
          <textarea
            id="prerequisites"
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="instructorId"
          >
            Instructor
          </label>
          <input
            id="instructorId"
            type="text"
            name="instructorId"
            value={formData.instructor && formData.instructor.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="modality"
          >
            Modalidad
          </label>
          <select
            id="modality"
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
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="includedMaterials"
          >
            Materiales incluidos
          </label>
          <textarea
            id="includedMaterials"
            name="includedMaterials"
            value={formData.includedMaterials}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="certification"
          >
            Certificación
          </label>
          <textarea
            id="certification"
            name="certification"
            value={formData.certification}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="availableSeats"
          >
            Número de plazas
          </label>
          <input
            id="availableSeats"
            type="number"
            name="availableSeats"
            value={formData.availableSeats}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Ubicación
          </label>
          <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="category"
          >
            Categoría
          </label>
          <input
            id="category"
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
