import React, { useState } from 'react';
import { CourseInterface } from '../../types/interfaces/course.interface';
import { useGlobalState } from '../../store/GlobalStateContext';
import { useNavigate } from 'react-router-dom';



const CourseManager: React.FC = () => {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
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
  });
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { state, dispatch } = useGlobalState();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validaciones
    if (!formData.title || !formData.description || !formData.startDate || !formData.endDate || !formData.price || !formData.instructor || !formData.seats || !formData.category) {
      setErrorMessage('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (isEditing) {
      setCourses(courses.map(course => (course.id === formData.id ? formData : course)));
      setSuccessMessage('Curso editado exitosamente.');
    } else {
      dispatch({ type: 'SET_COURSES', payload: [...state.courses as CourseInterface[] , { ...formData, id: Date.now() }] });
      setCourses([...courses, { ...formData, id: Date.now() }]);
      setSuccessMessage('Curso creado exitosamente.');
      navigate('/courses');
    }

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
    });
    setIsEditing(false);
    setErrorMessage('');
  };

  const handleEdit = (course: CourseInterface) => {
    setFormData(course);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
    setSuccessMessage('Curso eliminado exitosamente.');
  };

  return (
    <div className="max-w-[768px] mx-auto w-full p-16 mt-6 mb-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Editar Curso' : 'Crear Nuevo Curso'}</h2>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Título del curso</label>
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
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fecha de inicio</label>
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
          <label className="block text-sm font-medium text-gray-700">Fecha de fin</label>
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
          <label className="block text-sm font-medium text-gray-700">Duración</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Precio</label>
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
          <label className="block text-sm font-medium text-gray-700">Requisitos previos</label>
          <textarea
            name="prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Instructor</label>
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
          <label className="block text-sm font-medium text-gray-700">Modalidad</label>
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
          <label className="block text-sm font-medium text-gray-700">Horario</label>
          <input
            type="text"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Materiales incluidos</label>
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
          <label className="block text-sm font-medium text-gray-700">Número de plazas</label>
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
          <label className="block text-sm font-medium text-gray-700">Ubicación</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
          {isEditing ? 'Guardar Cambios' : 'Crear Curso'}
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cursos</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="mb-4 p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Modalidad:</strong> {course.modality}</p>
            <p><strong>Precio:</strong> {course.price}</p>
            <button onClick={() => handleEdit(course)} className="mr-2 bg-yellow-500 text-white py-1 px-2 rounded-md">Editar</button>
            <button onClick={() => handleDelete(course.id)} className="bg-red-500 text-white py-1 px-2 rounded-md">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;