import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, AlertTriangle, CheckCircle, Clock, User } from 'lucide-react'

function Logout() {
  const { usuario, logout } = useAuth()
  const navigate = useNavigate()
  const [sesionCerrada, setSesionCerrada] = useState(false)
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false)

  const cerrarSesion = () => {
    logout()
    setSesionCerrada(true)
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  const confirmarCerrarSesion = () => {
    setMostrarConfirmacion(false)
    cerrarSesion()
  }

  return (
    <section className="min-h-[calc(100vh-3rem)] rounded-[2rem] bg-white p-8 shadow-soft">
      <h2 className="text-4xl font-semibold text-slate-900 mb-8">Cerrar Sesión</h2>

      {!sesionCerrada ? (
        <div className="max-w-lg">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <LogOut className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">¿Estás seguro de cerrar sesión?</h3>
            <p className="text-slate-600 mb-6">
              Se cerrará tu sesión actual y serás redirigido a la página de inicio de sesión.
            </p>
            
            {usuario && (
              <div className="bg-white rounded-xl p-4 mb-6 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-900" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-slate-900">{usuario.nombre}</p>
                    <p className="text-sm text-slate-500">{usuario.email}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Rol:</span>
                  <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs font-medium">{usuario.rol}</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setMostrarConfirmacion(true)}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Cerrar Sesión
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-800">Sesión segura</p>
                <p className="text-sm text-green-700">Tu conexión está protegida</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800">Recordar</p>
                <p className="text-sm text-blue-700">Cierra sesión en dispositivos públicos</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg mx-auto">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Sesión cerrada correctamente</h3>
            <p className="text-green-700 mb-6">Has cerrado sesión exitosamente.</p>
            <div className="animate-pulse text-sm text-green-600">Redirigiendo al login...</div>
          </div>
        </div>
      )}

      {mostrarConfirmacion && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">Confirmar cierre</h3>
            <p className="text-slate-600 text-center mb-6">¿Realmente deseas cerrar tu sesión?</p>
            <div className="flex gap-2">
              <button
                onClick={confirmarCerrarSesion}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium"
              >
                Sí, cerrar sesión
              </button>
              <button
                onClick={() => setMostrarConfirmacion(false)}
                className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-xl font-medium"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Logout
