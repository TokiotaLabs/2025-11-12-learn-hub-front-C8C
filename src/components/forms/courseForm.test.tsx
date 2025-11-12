import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CourseForm from './courseForm';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStateProvider } from '../../store/GlobalStateContext';

describe('CourseForm', () => {
  test('renders the form with initial values', () => {
    render(
      <GlobalStateProvider>
        <BrowserRouter>
          <CourseForm />
        </BrowserRouter>
      </GlobalStateProvider>
    );

    expect(screen.getByLabelText(/Título del curso/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Descripción/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha de inicio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha de fin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Duración/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Precio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Requisitos previos/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Instructor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Modalidad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Horario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Materiales incluidos/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Certificación/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número de plazas/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ubicación/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    render(
      <GlobalStateProvider>
        <BrowserRouter>
          <CourseForm />
        </BrowserRouter>
      </GlobalStateProvider>
    );

    fireEvent.change(screen.getByLabelText(/Título del curso/i), {
      target: { value: 'Curso de React' },
    });
    fireEvent.change(screen.getByLabelText(/Descripción/i), {
      target: { value: 'Aprende React desde cero' },
    });
    fireEvent.change(screen.getByLabelText(/Fecha de inicio/i), {
      target: { value: '2023-01-01' },
    });
    fireEvent.change(screen.getByLabelText(/Fecha de fin/i), {
      target: { value: '2023-01-31' },
    });
    fireEvent.change(screen.getByLabelText(/Duración/i), {
      target: { value: '30 horas' },
    });
    fireEvent.change(screen.getByLabelText(/Precio/i), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText(/Requisitos previos/i), {
      target: { value: 'Conocimientos básicos de JavaScript' },
    });
    fireEvent.change(screen.getByLabelText(/Instructor/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Modalidad/i), {
      target: { value: 'Online' },
    });
    fireEvent.change(screen.getByLabelText(/Horario/i), {
      target: { value: 'Lunes a Viernes, 18:00 - 20:00' },
    });
    fireEvent.change(screen.getByLabelText(/Materiales incluidos/i), {
      target: { value: 'Acceso a videos y material de estudio' },
    });
    fireEvent.click(screen.getByLabelText(/Certificación/i));
    fireEvent.change(screen.getByLabelText(/Número de plazas/i), {
      target: { value: '20' },
    });
    fireEvent.change(screen.getByLabelText(/Ubicación/i), {
      target: { value: 'Online' },
    });
    fireEvent.change(screen.getByLabelText(/Categoría/i), {
      target: { value: 'Programación' },
    });

    fireEvent.click(screen.getByText(/Crear Curso/i));

    expect(
      await screen.findByText(/El curso se ha creado correctamente./i)
    ).toBeInTheDocument();
  });
});
