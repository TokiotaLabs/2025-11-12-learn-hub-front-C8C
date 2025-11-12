import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    educationLevel: '',
    occupation: '',
    experience: '',
    course: '',
    schedulePreference: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    termsAccepted: false,
    communicationPreference: '',
    additionalComments: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
          name="fullName"
          value={formData.fullName}
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

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Número de teléfono
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Dirección postal
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      {/* Datos Académicos/Profesionales */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nivel de estudios
        </label>
        <select
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Seleccione</option>
          <option value="highschool">Secundaria</option>
          <option value="bachelor">Licenciatura</option>
          <option value="master">Maestría</option>
          <option value="doctorate">Doctorado</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Ocupación actual
        </label>
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Experiencia previa relacionada con el curso
        </label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      {/* Selección de Curso */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Curso(s) en el que desea inscribirse
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Seleccione</option>
          <option value="course1">Curso 1</option>
          <option value="course2">Curso 2</option>
          <option value="course3">Curso 3</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Preferencia de horario
        </label>
        <input
          type="text"
          name="schedulePreference"
          value={formData.schedulePreference}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Método de Pago */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Método de pago
        </label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Seleccione</option>
          <option value="creditCard">Tarjeta de crédito</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Transferencia bancaria</option>
        </select>
      </div>

      {formData.paymentMethod === 'creditCard' && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Número de tarjeta
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Fecha de vencimiento
            </label>
            <input
              type="text"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              name="cardCVV"
              value={formData.cardCVV}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </>
      )}

      {/* Aceptación de Términos y Condiciones */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
            required
          />
          Acepto los términos y condiciones del curso
        </label>
      </div>

      {/* Preferencias de Comunicación */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Preferencia de comunicación
        </label>
        <input
          type="text"
          name="communicationPreference"
          value={formData.communicationPreference}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Comentarios Adicionales */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Comentarios adicionales
        </label>
        <textarea
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
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
