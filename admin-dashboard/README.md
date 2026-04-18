# Admin Dashboard React

Panel administrativo web moderno creado con Vite, React, Tailwind CSS y React Router DOM.

## Descripción del proyecto

Este proyecto es un Panel Administrativo Web académico que muestra una navegación fluida entre secciones, estilo moderno y componentes básicos listos para expansión.

## Tecnologías utilizadas

- Vite + React
- Tailwind CSS
- React Router DOM
- Lucide React

## Estructura recomendada

- `src/components`: componentes reutilizables como `Navbar.jsx`
- `src/pages`: vistas de cada sección como `Clientes.jsx`, `Proveedor.jsx`, `Usuarios.jsx` y `Logout.jsx`
- `src/index.css`: estilos globales con Tailwind
- `src/main.jsx`: punto de entrada de React
- `src/App.jsx`: rutas principales y layout

## Pasos para crear el proyecto

1. Crear el proyecto con Vite:
   ```bash
   npm create vite@latest admin-dashboard -- --template react
   ```
2. Acceder al proyecto:
   ```bash
   cd admin-dashboard
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Instalar Tailwind CSS, React Router DOM y la librería de íconos:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npm install react-router-dom lucide-react
   npx tailwindcss init -p
   ```
5. Actualizar `tailwind.config.js` e `index.css` con la configuración de Tailwind.

## Comandos disponibles

- `npm run dev` - inicia el servidor de desarrollo
- `npm run build` - crea la versión de producción
- `npm run preview` - vista previa de la build

## Contexto académico

Taller Panel Administrativo web con React JS

I Semestre 2025

Escuela de Ingeniería de Sistemas e Informática

Profesor: Carlos Adolfo Beltrán Castro
