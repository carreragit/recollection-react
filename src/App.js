import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/logoREcollection.png';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Perfil from './perfil';
import Albumes from './albumes';
import Login from './login';
import Contacto from './contacto'


const App = () => {
  return (
    <div>
       <header className="app-header border-bottom">
        <div className="container d-flex align-items-center justify-content-between app-nav flex-wrap">
          <Link to="/" className="brand d-flex align-items-center gap-2 fw-black mb-2 mb-md-0" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="Logo RE:collection" className="logo-img me-2" width="100" height="100" />
            <span>RE:collection</span>
          </Link>

          <nav className="menu d-flex flex-wrap gap-2">
            <Link to="/" className="tab active">Inicio</Link>
            <Link to="/perfil" className="tab">Perfil</Link>
            <Link to="/albumes" className="tab">Albumes</Link>
            <Link to="/login" className="tab">Inicio sesión</Link>
            <Link to="/contacto" className="tab">Contáctanos</Link>
          </nav>
        </div>
      </header>

            <Routes>

        <Route path="/perfil" element={<Perfil />} />
        <Route path="/albumes" element={<Albumes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>


    </div>
  );
};


export default App;


