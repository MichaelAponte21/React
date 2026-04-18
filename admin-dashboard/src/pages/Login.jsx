import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogIn, AlertCircle, Loader2 } from 'lucide-react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, loading } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Por favor completa todos los campos')
      return
    }

    try {
      await login(email, password)
      navigate('/clientes')
    } catch (err) {
      setError(err.message)
    }
  }

  // Usuarios de prueba para mostrar
  const usuariosPrueba = [
    { email: 'admin@empresa.com', rol: 'Administrador' },
    { email: 'juan@empresa.com', rol: 'Editor' },
    { email: 'maria@empresa.com', rol: 'Visualizador' },
  ]

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LogIn className="h-8 w-8 text-slate-900" />
          </div>
          <h1 className="text-2xl font-bold text-white">Panel Administrativo</h1>
          <p className="text-slate-400 mt-2">Ingresa tus credenciales para continuar</p>
        </div>

        {/* Formulario */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@empresa.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password123"
                className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 bg-red-900/30 p-3 rounded-xl">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-600/50 text-slate-900 font-medium px-4 py-3 rounded-xl transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  Iniciar Sesión
                </>
              )}
            </button>
          </form>
        </div>

        {/* Usuarios de prueba */}
        <div className="mt-6 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
          <p className="text-sm text-slate-400 mb-3">Usuarios de prueba (contraseña: password123)</p>
          <div className="space-y-2">
            {usuariosPrueba.map((u) => (
              <div key={u.email} className="flex items-center justify-between text-sm">
                <span className="text-slate-300">{u.email}</span>
                <span className="px-2 py-1 bg-slate-700 text-slate-400 rounded text-xs">{u.rol}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login