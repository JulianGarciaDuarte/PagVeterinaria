import React from 'react'
import logo4 from './imgs/Logo4.png'
import 'bootstrap'
export default function NavBar_M(){
    return(

<nav className="navbar navbar-expand-sm navbar-light bg-lignt" id="nav_m">

    <a className="navbar-brand" href="#">
     <img src={logo4}  className="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       <li className="nav-item">
      <a  className="nav-link" href="../index.html">INICIO</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">PERFIL</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">CONTACTO</a>
    </li>

    <li className="nav-item dropdown ">
      <a className="nav-link" href="#" >
        NOSOTROS
      </a>
      <div className="dropdown-menu ms-auto">
        <a className="dropdown-item" href="#">ESTERILIZACIÓN</a>
        <a className="dropdown-item" href="#">VACUNACIÓN</a>
        <a className="dropdown-item" href="#">CONSULTA</a>
      </div>
    </li>

 <li className="nav-item">
    <a className="nav-link" href="#">SERVICIOS</a>
      <div className="dropdown-menu ms-auto">
        <a className="dropdown-item" href="#">ESTERILIZACIÓN</a>
        <a className="dropdown-item" href="#">VACUNACIÓN</a>
        <a className="dropdown-item" href="#">CONSULTA</a>
      </div>
    </li>
      </ul>
    </div>

</nav>








    )   
}