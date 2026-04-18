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

## 1. Comandos de terminal exactos

```bash
# Crear proyecto con Vite
npm create vite@latest admin-dashboard -- --template react
cd admin-dashboard

# Instalar dependencias base
npm install

# Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Instalar React Router DOM y Lucide React
npm install react-router-dom lucide-react
```

---

## 2. Configuración de Tailwind

**tailwind.config.js:**
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
```

**postcss.config.js:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: #f1f5f9;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

---

## 3. Estructura de carpetas

```
admin-dashboard/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Clientes.jsx
│   │   ├── Proveedor.jsx
│   │   ├── Usuarios.jsx
│   │   └── Logout.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 4. Características implementadas

- ✅ Layout con navbar lateral (escritorio) y superior (móvil)
- ✅ Navegación con `BrowserRouter`, `Routes` y `Route`
- ✅ Enlaces activos con `NavLink` (resalta la ruta actual)
- ✅ Logo con ícono + texto en el navbar
- ✅ 4 secciones: Clientes, Proveedor, Usuarios, Logout
- ✅ Títulos grandes y centrados en cada página
- ✅ Diseño profesional con Tailwind CSS
- ✅ Código limpio y comentado

---

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Crea la versión de producción |
| `npm run preview` | Vista previa de la build |

---

## Usuarios de prueba (Login)

Para probar el sistema de autenticación, usa los siguientes usuarios. **La contraseña para todos es: `password123`**

| Email | Nombre | Rol |
|-------|--------|-----|
| admin@empresa.com | Admin Principal | Administrador |
| juan@empresa.com | Juan Pérez | Editor |
| maria@empresa.com | María López | Visualizador |
| carlos@empresa.com | Carlos García | Editor |

### Roles de usuario:

- **Administrador**: Acceso completo a todas las secciones
- **Editor**: Puede editar registros pero con limitaciones
- **Visualizador**: Solo puede visualizar información

---

## Resumen del proyecto 
