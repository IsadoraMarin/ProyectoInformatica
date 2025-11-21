import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/pastelera-mil-sabores-high-resolution-logo-transparent.png';
import userIcon from '../../assets/img/icons8-usuario-femenino-en-círculo-100.png';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" style={{ height: 48, marginRight: 8 }} />
        <span>Pastelería Mil Sabores</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalogo">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/extras">Extras</Link>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          <Link to="/carrito" className="btn btn-outline-secondary me-2">Carrito</Link>

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={userIcon} alt="Usuario" style={{ height: 28 }} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
              <li><Link className="dropdown-item" to="/sesion">Iniciar sesión</Link></li>
              <li><Link className="dropdown-item" to="/registro">Registrarse</Link></li>
              <li><Link className="dropdown-item" to="/seguimiento">Seguimiento</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
