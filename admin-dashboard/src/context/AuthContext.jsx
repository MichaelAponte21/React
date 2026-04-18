import { createContext, useContext, useState } from 'react'

// Usuarios con contraseña (misma contraseña para todos: "password123")
const usuariosValidos = [
  { id: 1, nombre: 'Admin Principal', email: 'admin@empresa.com', rol: 'Administrador', password: 'password123' },
  { id: 2, nombre: 'Juan Pérez', email: 'juan@empresa.com', rol: 'Editor', password: 'password123' },
  { id: 3, nombre: 'María López', email: 'maria@empresa.com', rol: 'Visualizador', password: 'password123' },
  { id: 4, nombre: 'Carlos García', email: 'carlos@empresa.com', rol: 'Editor', password: 'password123' },
]

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [loading, setLoading] = useState(false)

  // Función de login
  const login = (email, password) => {
    setLoading(true)
    
    // Simular delay de red
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuarioEncontrado = usuariosValidos.find(
          u => u.email === email && u.password === password
        )
        
        if (usuarioEncontrado) {
          const { password: _, ...usuarioSinPassword } = usuarioEncontrado
          setUsuario(usuarioSinPassword)
          setLoading(false)
          resolve(usuarioSinPassword)
        } else {
          setLoading(false)
          reject(new Error('Email o contraseña incorrectos'))
        }
      }, 500)
    })
  }

  // Función de logout
  const logout = () => {
    setUsuario(null)
  }

  // Verificar si está autenticado
  const isAuthenticated = () => {
    return usuario !== null
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook para usar el contexto
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}