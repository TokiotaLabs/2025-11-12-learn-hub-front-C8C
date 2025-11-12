# Instalación y configuración de React Router en un proyecto con React 19, Vite y TypeScript

1. **Instalar React Router:**

   Ejecuta el siguiente comando para instalar React Router en tu proyecto:

   ```bash
   npm install react-router-dom@latest
   ```

2. **Modificar el archivo `main.tsx` (o `index.tsx`) para añadir el proveedor `BrowserRouter`:**

   Busca el archivo `main.tsx` o `index.tsx` en tu proyecto y modifica el código para envolver tu aplicación en el proveedor `BrowserRouter` de React Router. El archivo debe verse de la siguiente manera:

   ```tsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import './index.css';
   import { BrowserRouter } from 'react-router-dom';

   const rootElement = document.getElementById('root') as HTMLElement;
   const root = ReactDOM.createRoot(rootElement);

   root.render(
     <BrowserRouter>
       <App />
     </BrowserRouter>
   );
   ```

3. **Crear un nuevo archivo para las rutas (`Routes.tsx`):**

   Crea un archivo llamado `Routes.tsx` en tu carpeta `src/routes` donde definirás las rutas. Este archivo debe contener lo siguiente:

   ```tsx
   import React from 'react';
   import { Routes, Route } from 'react-router-dom';

   import Home from './pages/Home';
   import CourseDetail from './pages/CourseDetail';
   import Profile from './pages/Profile';

   const AppRoutes: React.FC = () => {
     return (
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/course-detail" element={<CourseDetail />} />
         <Route path="/profile" element={<Profile />} />
       </Routes>
     );
   };

   export default AppRoutes;
   ```

4. **Actualizar `App.tsx` para usar las rutas:**

   Ahora, en el archivo `App.tsx`, importa el componente `AppRoutes` y utilízalo para renderizar las rutas:

   ```tsx
   import React from 'react';
   import AppRoutes from './Routes';

   const App: React.FC = () => {
     return (
       <div className="App">
         <AppRoutes />
       </div>
     );
   };

   export default App;
   ```
