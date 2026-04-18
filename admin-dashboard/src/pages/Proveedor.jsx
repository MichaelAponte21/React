import { useState } from 'react'
import { Plus, Trash2, Edit2, X, Package, MapPin } from 'lucide-react'

// Datos iniciales de ejemplo
const proveedoresIniciales = [
  { id: 1, nombre: 'Suministros ABC', contacto: 'Pedro Martínez', email: 'pedro@abc.com', telefono: '3001112233', categoria: 'Materiales', estado: 'Activo' },
  { id: 2, nombre: 'Tech Solutions', contacto: 'Ana Rodríguez', email: 'ana@techsol.com', telefono: '3013344556', categoria: 'Electrónica', estado: 'Activo' },
  { id: 3, nombre: 'Distribuciones XYZ', contacto: 'Luis Gómez', email: 'luis@xyz.com', telefono: '3025566778', categoria: 'Logística', estado: 'Inactivo' },
]

function Proveedor() {
  const [proveedores, setProveedores] = useState(proveedoresIniciales)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [proveedorEditando, setProveedorEditando] = useState(null)
  const [nuevoProveedor, setNuevoProveedor] = useState({
    nombre: '', contacto: '', email: '', telefono: '', categoria: 'Materiales', estado: 'Activo'
  })
  const [filtroCategoria, setFiltroCategoria] = useState('Todos')

  const categorias = ['Todos', 'Materiales', 'Electrónica', 'Logística', 'Servicios']

  // Agregar proveedor
  const agregarProveedor = () => {
    if (!nuevoProveedor.nombre || !nuevoProveedor.contacto) return
    const proveedor = { id: Date.now(), ...nuevoProveedor }
    setProveedores([...proveedores, proveedor])
    setNuevoProveedor({ nombre: '', contacto: '', email: '', telefono: '', categoria: 'Materiales', estado: 'Activo' })
    setMostrarFormulario(false)
  }

  // Eliminar proveedor
  const eliminarProveedor = (id) => {
    if (confirm('¿Estás seguro de eliminar este proveedor?')) {
      setProveedores(proveedores.filter(p => p.id !== id))
    }
  }

  // Guardar edición
  const guardarEdicion = () => {
    if (!proveedorEditando.nombre || !proveedorEditando.contacto) return
    setProveedores(proveedores.map(p => p.id === proveedorEditando.id ? proveedorEditando : p))
    setProveedorEditando(null)
  }

  // Filtrar proveedores
  const proveedoresFiltrados = filtroCategoria === 'Todos' 
    ? proveedores 
    : proveedores.filter(p => p.categoria === filtroCategoria)

  return (
    <section className="min-h-[calc(100vh-3rem)] rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-4xl font-semibold text-slate-900">Gestión de Proveedores</h2>
        <div className="flex gap-4">
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <button
            onClick={() => setMostrarFormulario(true)}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium transition-colors"
          >
            <Plus className="h-5 w-5" />
            Nuevo Proveedor
          </button>
        </div>
      </div>

      {/* Formulario */}
      {mostrarFormulario && (
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Agregar Nuevo Proveedor</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre de empresa"
              value={nuevoProveedor.nombre}
              onChange={(e) => setNuevoProveedor({ ...nuevoProveedor, nombre: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="text"
              placeholder="Persona de contacto"
              value={nuevoProveedor.contacto}
              onChange={(e) => setNuevoProveedor({ ...nuevoProveedor, contacto: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={nuevoProveedor.email}
              onChange={(e) => setNuevoProveedor({ ...nuevoProveedor, email: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={nuevoProveedor.telefono}
              onChange={(e) => setNuevoProveedor({ ...nuevoProveedor, telefono: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <select
              value={nuevoProveedor.categoria}
              onChange={(e) => setNuevoProveedor({ ...nuevoProveedor, categoria: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="Materiales">Materiales</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Logística">Logística</option>
              <option value="Servicios">Servicios</option>
            </select>
            <select
              value={nuevoProveedor.estado}
              onChange={(e) => setNuevoProveedor({ ...nuevoProveedor, estado: e.target.value })}
              className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={agregarProveedor} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium">Guardar</button>
            <button onClick={() => { setMostrarFormulario(false); setNuevoProveedor({ nombre: '', contacto: '', email: '', telefono: '', categoria: 'Materiales', estado: 'Activo' }) }} className="bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium">Cancelar</button>
          </div>
        </div>
      )}

      {/* Tarjetas de proveedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proveedoresFiltrados.map((proveedor) => (
          <div key={proveedor.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-soft transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Package className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{proveedor.nombre}</h3>
                  <p className="text-sm text-slate-500">{proveedor.categoria}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${proveedor.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {proveedor.estado}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600"><span className="font-medium">Contacto:</span> {proveedor.contacto}</p>
              <p className="text-slate-600"><span className="font-medium">Email:</span> {proveedor.email}</p>
              <p className="text-slate-600"><span className="font-medium">Tel:</span> {proveedor.telefono}</p>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200">
              <button onClick={() => setProveedorEditando({ ...proveedor })} className="flex-1 flex items-center justify-center gap-2 text-cyan-600 hover:bg-cyan-50 py-2 rounded-lg transition-colors">
                <Edit2 className="h-4 w-4" /> Editar
              </button>
              <button onClick={() => eliminarProveedor(proveedor.id)} className="flex-1 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors">
                <Trash2 className="h-4 w-4" /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de edición */}
      {proveedorEditando && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Editar Proveedor</h3>
              <button onClick={() => setProveedorEditando(null)} className="text-slate-500 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" value={proveedorEditando.nombre} onChange={(e) => setProveedorEditando({ ...proveedorEditando, nombre: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Nombre" />
              <input type="text" value={proveedorEditando.contacto} onChange={(e) => setProveedorEditando({ ...proveedorEditando, contacto: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Contacto" />
              <input type="email" value={proveedorEditando.email} onChange={(e) => setProveedorEditando({ ...proveedorEditando, email: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" />
              <input type="tel" value={proveedorEditando.telefono} onChange={(e) => setProveedorEditando({ ...proveedorEditando, telefono: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Teléfono" />
              <select value={proveedorEditando.categoria} onChange={(e) => setProveedorEditando({ ...proveedorEditando, categoria: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="Materiales">Materiales</option>
                <option value="Electrónica">Electrónica</option>
                <option value="Logística">Logística</option>
                <option value="Servicios">Servicios</option>
              </select>
              <select value={proveedorEditando.estado} onChange={(e) => setProveedorEditando({ ...proveedorEditando, estado: e.target.value })} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <div className="flex gap-2 mt-6">
              <button onClick={guardarEdicion} className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-xl font-medium">Guardar</button>
              <button onClick={() => setProveedorEditando(null)} className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-8 text-slate-500 text-sm">Total de proveedores: {proveedoresFiltrados.length} {filtroCategoria !== 'Todos' && `(${filtroCategoria})`}</p>
    </section>
  )
}

export default Proveedor
