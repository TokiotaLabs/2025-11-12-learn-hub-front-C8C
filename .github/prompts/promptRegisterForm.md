## Prompt para GitHub Copilot

### Objetivo

Generar un formulario de registro de usuarios en React con TypeScript y Tailwind CSS. El formulario debe contener los siguientes campos:

#### Datos Personales:

- Nombre completo
- Dirección de correo electrónico
- Contraseña
- Número de teléfono
- Dirección postal

#### Datos Académicos/Profesionales:

- Nivel de estudios (selección desplegable)
- Ocupación actual
- Experiencia previa relacionada con el curso (campo de texto)

#### Selección de Curso:

- Curso(s) en el que desea inscribirse (selección desplegable)
- Preferencia de horario (si aplica)

#### Método de Pago:

- Selección de método de pago (tarjeta de crédito, PayPal, transferencia bancaria)
- Información de pago (número de tarjeta, fecha de vencimiento, CVV) solo si se selecciona "Tarjeta de crédito"

#### Aceptación de Términos y Condiciones:

- Casilla para aceptar los términos y condiciones del curso

#### Preferencias de Comunicación:

- Preferencia de recibir notificaciones por correo electrónico, SMS, etc.

#### Comentarios Adicionales:

- Campo de texto para comentarios o solicitudes especiales

### Requisitos técnicos:

- Utilizar React con TypeScript.
- Aplicar Tailwind CSS para los estilos.
- Manejar el estado del formulario con `useState`.
- Implementar validaciones básicas (campos obligatorios y tipos de datos correctos).
- Manejar el envío del formulario con una función `handleSubmit` que registre los datos en la consola.

### Ejemplo de estructura esperada:

```tsx
const RegisterForm = () => {
  // Implementación aquí
};

export default RegisterForm;
```

### Notas adicionales:

- Si se selecciona "Tarjeta de crédito" como método de pago, mostrar campos adicionales para ingresar los datos de la tarjeta.
- Utilizar componentes reutilizables si es posible para los inputs y selects.
- Asegurar que el formulario sea accesible y responsivo.
