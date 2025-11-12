import React, { FormEvent, useState } from 'react';
import { createStudent } from '../../services/student.service';
const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
};
const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState(emptyForm);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createStudent(formData).then(() => {
      setFormData(emptyForm);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[768px] mx-auto w-full p-16 mt-6 mb-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-500">
        Registro de Usuario
      </h2>

      {/* Datos Personales */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Apellido
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Dirección de correo electrónico
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        id="submit-register"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
      >
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
