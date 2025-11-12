import React, { useEffect, useState } from 'react';
import { CourseInterface } from '../../types/interfaces/course.interface';
import { useGlobalState } from '../../store/GlobalStateContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { createCourse, updateCourse } from '../../services/courseService';


const CourseForm: React.FC = () => {

  const [formData, setFormData] = useState<CourseInterface>({
    id: 0,
    title: '',
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
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
    // Validaciones
    if (
      !formData.title ||
      !formData.description ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.price ||
      !formData.instructor ||
      !formData.seats ||
      !formData.category
    ) {
      setErrorMessage('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (isEditing) {
      
      //await updateCourse(formData.id, formData);
      const updatedCourses = state?.courses && state.courses.map(course => (course.id === formData.id ? formData : course));
      dispatch({ type: 'SET_COURSES', payload: updatedCourses as CourseInterface[] });
      setSuccessMessage('Curso editado exitosamente.');
    } else {
      dispatch({ type: 'SET_COURSES', payload: [...state.courses as CourseInterface[] , { ...formData, id: Date.now() }] });
      //await createCourse(formData);
      setSuccessMessage('Curso creado exitosamente.');
      
    }

    setIsModalOpen(true);

    setFormData({
      id: 0,
      title: '',
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

    setErrorMessage('');
  };


  useEffect(() => {
    if (getLocationState) {
      setIsEditing(true)
      setFormData(getLocationState);
    }
  }, [getLocationState]);

  return (
    <div className="max-w-[768px] mx-auto w-full p-16 mt-6 mb-6 bg-white rounded-lg shadow-md">
        <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false); navigate('/courses');}} title="My Modal">
        <p className='text-indigo-500 text-center font-medium text-lg'>
          {
            isEditing ? 'El curso se ha editado correctamente.' : 'El curso se ha creado correctamente.'
          }
          </p>
      </Modal>
      <h2 className="text-2xl text-indigo-500 font-bold mb-4">
        {isEditing ? 'Editar Curso' : 'Crear Nuevo Curso'}
      </h2>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Título del curso
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fecha de inicio
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fecha de fin
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Duración
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Requisitos previos
          </label>
          <textarea
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Instructor
          </label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Modalidad
          </label>
          <select
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
          <label className="block text-sm font-medium text-gray-700">
            Horario
          </label>
          <input
            type="text"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Materiales incluidos
          </label>
          <textarea
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            <input
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
          <label className="block text-sm font-medium text-gray-700">
            Número de plazas
          </label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
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
