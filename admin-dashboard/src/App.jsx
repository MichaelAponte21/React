import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Clientes from './pages/Clientes.jsx'
import Proveedor from './pages/Proveedor.jsx'
import Usuarios from './pages/Usuarios.jsx'
import Logout from './pages/Logout.jsx'

// Componente para proteger rutas
function ProtectedRoute() {
  const { usuario } = useAuth()
  
  if (!usuario) {
    return <Navigate to="/login" replace />
  }
  
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="md:pl-80 p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {/* Ruta pública - Login */}
      <Route path="/login" element={<Login />} />
      
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/clientes" replace />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  )
}

export default App
