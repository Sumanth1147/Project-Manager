import { NavLink, Outlet, type NavLinkRenderProps } from 'react-router-dom'
import './AppLayout.css'

function navLinkClass({ isActive }: NavLinkRenderProps) {
  return isActive ? 'nav-link nav-link-active' : 'nav-link'
}

export function AppLayout() {
  return (
    <>
      <header>
        <nav className="app-nav">
          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
