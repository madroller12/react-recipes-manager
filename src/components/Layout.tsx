import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <nav className="navbar">
        <p className="nav-brand">Ricettario</p>
        <Link to="/add" className="nav-link">
          Aggiungi Ricetta +
        </Link>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}