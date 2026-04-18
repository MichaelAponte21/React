# Panel Administrativo Web - React

## Descripción del proyecto

Panel administrativo web moderno creado con **Vite + React**, utilizando **Tailwind CSS** para el diseño, **React Router DOM** para la navegación entre rutas sin recargas, y **Lucide React** para los íconos.

Este proyecto académico demuestra un dashboard funcional con navegación lateral, rutas protegidas mediante `NavLink`, y una estructura limpia lista para expansión.

---

## Contexto Académico

| Campo | Valor |
|-------|-------|
| **Taller** | Panel Administrativo Web con React JS |
| **Semestre** | I Semestre 2025 |
| **Escuela** | Escuela de Ingeniería de Sistemas e Informática |
| **Profesor** | Carlos Adolfo Beltrán Castro |

---

## Tecnologías utilizadas

- **Vite** - Build tool rápido para React
- **React 18** - Biblioteca de interfaz de usuario
- **Tailwind CSS** - Framework de estilos utility-first
- **React Router DOM v6** - Enrutamiento SPA
- **Lucide React** - Librería de íconos

---

## Estructura del proyecto

```
admin-dashboard/
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Barra de navegación lateral
│   ├── pages/
│   │   ├── Clientes.jsx     # Vista de clientes
│   │   ├── Proveedor.jsx    # Vista de proveedores
│   │   ├── Usuarios.jsx     # Vista de usuarios
│   │   └── Logout.jsx       # Vista de cierre de sesión
│   ├── App.jsx              # Configuración de rutas
│   ├── main.jsx             # Punto de entrada con BrowserRouter
│   └── index.css            # Estilos globales Tailwind
├── tailwind.config.js       # Configuración de Tailwind
├── vite.config.js           # Configuración de Vite
└── package.json
```

---

## Comandos para crear el proyecto

### 1. Inicializar proyecto con Vite

```bash
npm create vite@latest admin-dashboard -- --template react
cd admin-dashboard
```

### 2. Instalar dependencias base

```bash
npm install
```

### 3. Instalar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Instalar React Router DOM y Lucide React

```bash
npm install react-router-dom lucide-react
```

### 5. Configurar Tailwind

Actualizar `tailwind.config.js`:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
```

Agregar a `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Ejecutar el proyecto

```bash
npm run dev
```

---

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Crea la versión de producción |
| `npm run preview` | Vista previa de la build |

---

## Características implementadas

- ✅ Layout con navbar lateral (escritorio) y superior (móvil)
- ✅ Navegación con `BrowserRouter`, `Routes` y `Route`
- ✅ Enlaces activos con `NavLink` (resalta la ruta actual)
- ✅ Logo con ícono + texto en el navbar
- ✅ 4 secciones: Clientes, Proveedor, Usuarios, Logout
- ✅ Títulos grandes y centrados en cada página
- ✅ Diseño profesional con Tailwind CSS
- ✅ Código limpio y comentado

## Contexto académico

Taller Panel Administrativo web con React JS

I Semestre 2025

Escuela de Ingeniería de Sistemas e Informática

Profesor: Carlos Adolfo Beltrán Castro
