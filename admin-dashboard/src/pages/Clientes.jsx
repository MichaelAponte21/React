import { useState } from 'react'
import { Plus, Trash2, Edit2, X } from 'lucide-react'

// Datos iniciales de ejemplo
const clientesIniciales = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', telefono: '3001234567', estado: 'Activo' },
  { id: 2, nombre: 'María García', email: 'maria@email.com', telefono: '3012345678', estado: 'Activo' },
  { id: 3, nombre: 'Carlos López', email: 'carlos@email.com', telefono: '3023456789', estado: 'Inactivo' },
]

function Clientes() {
  const [clientes, setClientes] = useState(clientesIniciales)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [clienteEditando, setClienteEditando] = useState(null)
  const [nuevoCliente, setNuevoCliente] = useState({ nombre: '', email: '', telefono: '', estado: 'Activo' })

  // Agregar cliente
  const agregarCliente = () => {
    if (!nuevoCliente.nombre || !nuevoCliente.email) return
    const cliente = {
      id: Date.now(),
      ...nuevoCliente
    }
    setClientes([...clientes, cliente])
    setNuevoCliente({ nombre: '', email: '', telefono: '', estado: 'Activo' })
    setMostrarFormulario(false)
  }

  // Eliminar cliente
  const eliminarCliente = (id) => {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      setClientes(clientes.filter(c => c.id !== id))
    }
  }

  // Editar cliente
  const guardarEdicion = () => {
    if (!clienteEditando.nombre || !clienteEditando.email) return
    setClientes(clientes.map(c => c.id === clienteEditando.id ? clienteEditando : c))
    setClienteEditando(null)
  }

  return (
    <section className="min-h-[calc(100vh-3rem)] rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-semibold text-slate-900">Gestión de Clientes</h2>
        <button
          onClick={() => setMostrarFormulario(true)}
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium transition-colors"
        >
          <Plus className="h-5 w-5" />
          Nuevo Cliente
        </button>
      </div>

      {/* Formulario para agregar cliente */}
      {mostrarFormulario && (
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Agregar Nuevo Cliente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              value={nuevoCliente.nombre}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={nuevoCliente.email}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, email: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={nuevoCliente.telefono}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              value={nuevoCliente.estado}
              onChange={(e) => setNuevoCliente({ ...nuevoCliente, estado: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={agregarCliente}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium"
            >
              Guardar
            </button>
            <button
              onClick={() => { setMostrarFormulario(false); setNuevoCliente({ nombre: '', email: '', telefono: '', estado: 'Activo' }) }}
              className="bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Tabla de clientes */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">ID</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Nombre</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Email</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Teléfono</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Estado</th>
              <th className="text-left py-3 px-4 text-slate-600 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-3 px-4 text-slate-600">{cliente.id}</td>
                <td className="py-3 px-4 text-slate-900 font-medium">{cliente.nombre}</td>
                <td className="py-3 px-4 text-slate-600">{cliente.email}</td>
                <td className="py-3 px-4 text-slate-600">{cliente.telefono}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cliente.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {cliente.estado}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setClienteEditando({ ...cliente })}
                      className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => eliminarCliente(cliente.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de edición */}
      {clienteEditando && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Editar Cliente</h3>
              <button onClick={() => setClienteEditando(null)} className="text-slate-500 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={clienteEditando.nombre}
                onChange={(e) => setClienteEditando({ ...clienteEditando, nombre: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                value={clienteEditando.email}
                onChange={(e) => setClienteEditando({ ...clienteEditando, email: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="tel"
                value={clienteEditando.telefono}
                onChange={(e) => setClienteEditando({ ...clienteEditando, telefono: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <select
                value={clienteEditando.estado}
                onChange={(e) => setClienteEditando({ ...clienteEditando, estado: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={guardarEdicion}
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium"
              >
                Guardar Cambios
              </button>
              <button
                onClick={() => setClienteEditando(null)}
                className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 text-slate-500 text-sm">Total de clientes: {clientes.length}</p>
    </section>
  )
}

export default Clientes
