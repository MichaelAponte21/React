import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Clientes from './pages/Clientes.jsx'
import Proveedor from './pages/Proveedor.jsx'
import Usuarios from './pages/Usuarios.jsx'
import Logout from './pages/Logout.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="md:pl-80 p-6 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Navigate to="/clientes" replace />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
