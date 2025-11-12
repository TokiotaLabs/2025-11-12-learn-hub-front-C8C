### Configurar pruebas unitarias en un proyecto de React con TypeScript y Tailwind

#### 📌 **Objetivo**
Quiero configurar Jest y React Testing Library en mi proyecto de React con TypeScript y Tailwind CSS para escribir y ejecutar pruebas unitarias.

#### 🛠 **Tareas a realizar**

1. **Instalar dependencias necesarias**
   Ejecuta el siguiente comando para instalar Jest y las librerías necesarias:
   
   ```sh
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest jest-environment-jsdom
   ```

2. **Configurar Jest**
   Crea un archivo `jest.config.js` en la raíz del proyecto con la siguiente configuración:
   
   ```js
   module.exports = {
     preset: 'ts-jest',
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
   };
   ```

3. **Crear un archivo de configuración para Jest**
   Crea un archivo `jest.setup.ts` en la raíz del proyecto y agrega:
   
   ```ts
   import '@testing-library/jest-dom';
   ```

4. **Agregar un script en `package.json` para ejecutar las pruebas**
   En el archivo `package.json`, añade el siguiente script dentro del objeto `scripts`:
   
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. **Crear una prueba de ejemplo**
   Si en `src/components/` existe un componente `Button.tsx`, crea un archivo `src/components/__tests__/Button.test.tsx` con la siguiente prueba:
   
   ```tsx
   import { render, screen, fireEvent } from '@testing-library/react';
   import Button from '../Button';
   
   test('renderiza el botón con el texto correcto y maneja el clic', () => {
     const handleClick = jest.fn();
     render(<Button label="Click me" onClick={handleClick} />);
   
     // Verificar si el botón se renderiza con el texto correcto
     const buttonElement = screen.getByText(/click me/i);
     expect(buttonElement).toBeInTheDocument();
   
     // Simular un clic y verificar que la función se ejecutó una vez
     fireEvent.click(buttonElement);
     expect(handleClick).toHaveBeenCalledTimes(1);
   });
   ```

6. **Ejecutar las pruebas**
   Ejecuta el siguiente comando en la terminal para correr las pruebas:
   
   ```sh
   npm test
   ```

✅ Con estos pasos, Jest y React Testing Library estarán configurados y listos para escribir pruebas en el proyecto. ¡Genera el código y aplícalo! 🚀

