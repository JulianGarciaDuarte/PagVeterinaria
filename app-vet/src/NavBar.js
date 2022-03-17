import React from 'react'
import logo4 from './imgs/Logo4.png'
import 'bootstrap'
import {Link} from 'react-router-dom'
export default function NavBar(){
    return(

   

        <nav className="navbar navbar-expand-sm  sticky-top justify-content-center" id="nav_pc">
        <Link className="navbar-brand" to="/">
            <img src={logo4}  className="logo" />
        </Link>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link  className="nav-link" to="/HistoriaClinica">INICIO</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/">PERFIL</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/">CONTACTO</Link>
            </li>

            <li className="nav-item dropdown ">
            <Link className="nav-link" to="#" >
                NOSOTROS
            </Link>
            <div className="dropdown-menu ms-auto">
                <Link className="dropdown-item" to="#">ESTERILIZACIÓN</Link>
                <Link className="dropdown-item" to="#">VACUNACIÓN</Link>
                <Link className="dropdown-item" to="#">CONSULTA</Link>
            </div>
            </li>

        <li className="nav-item">
            <Link className="nav-link" to="#">SERVICIOS</Link>
            <div className="dropdown-menu ms-auto">
                <Link className="dropdown-item" to="#">ESTERILIZACIÓN</Link>
                <Link className="dropdown-item" to="#">VACUNACIÓN</Link>
                <Link className="dropdown-item" to="#">CONSULTA</Link>
            </div>
            </li>

        </ul>

        </nav>



    

    )   
}