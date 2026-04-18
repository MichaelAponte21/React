import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Box, Factory, LogOut, Menu } from 'lucide-react'

const navItems = [
  { label: 'Clientes', path: '/clientes', icon: Box },
  { label: 'Proveedor', path: '/proveedor', icon: Factory },
  { label: 'Usuarios', path: '/usuarios', icon: Users },
  { label: 'Logout', path: '/logout', icon: LogOut }
]

function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between bg-slate-950 px-5 py-4 text-slate-100 md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-cyan-300">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Admin Panel</p>
            <h1 className="text-lg font-semibold">Panel Administrativo</h1>
          </div>
        </div>
        <Menu className="h-6 w-6" />
      </header>

      <aside className="hidden md:flex fixed inset-y-0 left-0 z-20 w-80 flex-col bg-slate-950 text-slate-100 shadow-xl">
        <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-cyan-300 shadow-soft">
            <LayoutDashboard className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Admin Panel</p>
            <h1 className="font-semibold text-xl text-white">Panel Administrativo</h1>
          </div>
        </div>

        <nav className="mt-8 px-4">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Navegación
          </p>
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 shadow-soft'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </NavLink>
              )
            })}
          </div>
        </nav>

        <div className="mt-auto border-t border-slate-800 px-6 py-6">
          <div className="rounded-3xl bg-slate-900 p-4 text-sm text-slate-300 shadow-soft">
            <p className="text-slate-400">Proyecto académico</p>
            <p className="mt-2 text-sm text-slate-200">Dashboard moderno con React, Tailwind y rutas.</p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
