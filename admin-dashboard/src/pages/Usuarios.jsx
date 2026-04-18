import { useState } from 'react'
import { Plus, Trash2, Edit2, X, User, Shield, Search } from 'lucide-react'

// Datos iniciales de ejemplo
const usuariosIniciales = [
  { id: 1, nombre: 'Admin Principal', email: 'admin@empresa.com', rol: 'Administrador', estado: 'Activo', ultimoAcceso: '2026-04-17 10:30' },
  { id: 2, nombre: 'Juan Pérez', email: 'juan@empresa.com', rol: 'Editor', estado: 'Activo', ultimoAcceso: '2026-04-16 15:45' },
  { id: 3, nombre: 'María López', email: 'maria@empresa.com', rol: 'Visualizador', estado: 'Activo', ultimoAcceso: '2026-04-15 09:20' },
  { id: 4, nombre: 'Carlos García', email: 'carlos@empresa.com', rol: 'Editor', estado: 'Inactivo', ultimoAcceso: '2026-04-10 14:00' },
]

const roles = ['Administrador', 'Editor', 'Visualizador']

function Usuarios() {
  const [usuarios, setUsuarios] = useState(usuariosIniciales)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [usuarioEditando, setUsuarioEditando] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '', email: '', rol: 'Visualizador', estado: 'Activo'
  })

  // Agregar usuario
  const agregarUsuario = () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.email) return
    const usuario = {
      id: Date.now(),
      ...nuevoUsuario,
      ultimoAcceso: 'Nunca'
    }
    setUsuarios([...usuarios, usuario])
    setNuevoUsuario({ nombre: '', email: '', rol: 'Visualizador', estado: 'Activo' })
    setMostrarFormulario(false)
  }

  // Eliminar usuario
  const eliminarUsuario = (id) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsuarios(usuarios.filter(u => u.id !== id))
    }
  }

  // Guardar edición
  const guardarEdicion = () => {
    if (!usuarioEditando.nombre || !usuarioEditando.email) return
    setUsuarios(usuarios.map(u => u.id === usuarioEditando.id ? usuarioEditando : u))
    setUsuarioEditando(null)
  }

  // Filtrar por búsqueda
  const usuariosFiltrados = usuarios.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.email.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.rol.toLowerCase().includes(busqueda.toLowerCase())
  )

  // Contador por rol
  const conteoRoles = {
    Administrador: usuarios.filter(u => u.rol === 'Administrador').length,
    Editor: usuarios.filter(u => u.rol === 'Editor').length,
    Visualizador: usuarios.filter(u => u.rol === 'Visualizador').length
  }

  return (
    <section className="min-h-[calc(100vh-3rem)] rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-4xl font-semibold text-slate-900">Gestión de Usuarios</h2>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar usuario..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
            />
          </div>
          <button
            onClick={() => setMostrarFormulario(true)}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium transition-colors"
          >
            <Plus className="h-5 w-5" />
            Nuevo Usuario
          </button>
        </div>
      </div>

      {/* Stats de roles */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{conteoRoles.Administrador}</p>
              <p className="text-sm text-slate-500">Administradores</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Edit2 className="h-5 w-5 text-cyan-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{conteoRoles.Editor}</p>
              <p className="text-sm text-slate-500">Editores</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{conteoRoles.Visualizador}</p>
              <p className="text-sm text-slate-500">Visualizadores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario */}
      {mostrarFormulario && (
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Agregar Nuevo Usuario</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre completo"
              value={nuevoUsuario.nombre}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={nuevoUsuario.email}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              value={nuevoUsuario.rol}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {roles.map(rol => <option key={rol} value={rol}>{rol}</option>)}
            </select>
            <select
              value={nuevoUsuario.estado}
              onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, estado: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={agregarUsuario} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium">Guardar</button>
            <button onClick={() => { setMostrarFormulario(false); setNuevoUsuario({ nombre: '', email: '', rol: 'Visualizador', estado: 'Activo' }) }} className="bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium">Cancelar</button>
          </div>
        </div>
      )}

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Usuario</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Email</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Rol</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Estado</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Último Acceso</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((usuario) => (
              <tr key={usuario.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-slate-600" />
                    </div>
                    <span className="font-medium text-slate-900">{usuario.nombre}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-600">{usuario.email}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    usuario.rol === 'Administrador' ? 'bg-purple-100 text-purple-700' :
                    usuario.rol === 'Editor' ? 'bg-cyan-100 text-cyan-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {usuario.rol}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    usuario.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {usuario.estado}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-500 text-sm">{usuario.ultimoAcceso}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button onClick={() => setUsuarioEditando({ ...usuario })} className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button onClick={() => eliminarUsuario(usuario.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {usuariosFiltrados.length === 0 && (
        <p className="text-center text-slate-500 mt-8">No se encontraron usuarios</p>
      )}

      {/* Modal de edición */}
      {usuarioEditando && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Editar Usuario</h3>
              <button onClick={() => setUsuarioEditando(null)} className="text-slate-500 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" value={usuarioEditando.nombre} onChange={(e) => setUsuarioEditando({ ...usuarioEditando, nombre: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Nombre" />
              <input type="email" value={usuarioEditando.email} onChange={(e) => setUsuarioEditando({ ...usuarioEditando, email: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" />
              <select value={usuarioEditando.rol} onChange={(e) => setUsuarioEditando({ ...usuarioEditando, rol: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                {roles.map(rol => <option key={rol} value={rol}>{rol}</option>)}
              </select>
              <select value={usuarioEditando.estado} onChange={(e) => setUsuarioEditando({ ...usuarioEditando, estado: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <div className="flex gap-2 mt-6">
              <button onClick={guardarEdicion} className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium">Guardar</button>
              <button onClick={() => setUsuarioEditando(null)} className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 text-slate-500 text-sm">Total de usuarios: {usuariosFiltrados.length}</p>
    </section>
  )
}

export default Usuarios
