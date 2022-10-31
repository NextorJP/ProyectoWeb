import React from 'react'
import logo from '../images/logoicono.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header style={{color:"white"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink to="/menu">
                    <img src={logo} height="100" alt="No Encontrada" />
                </NavLink>

                <h1>Mixtos Restaurante</h1>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <h4><NavLink to="/menu" className="nav-item nav-link text-center" style={{color:"white"}}>Menú</NavLink></h4>
                        <h4><NavLink to="/ubicacion" className="nav-item nav-link text-center" style={{color:"white"}}>Ubicación</NavLink></h4>
                        <h4><NavLink to="/horarios" className="nav-item nav-link text-center" style={{color:"white"}}>Horarios</NavLink></h4>
                        <h4><NavLink to="/iniciarsesion" className="nav-item nav-link text-center" style={{color:"white"}}>INICIAR SESIÓN</NavLink></h4>
                        
                    </div>
                </div>

            </nav>
        </header>
    </>
  )
}
