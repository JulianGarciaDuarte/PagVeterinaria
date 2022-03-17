import React from 'react'
import logo4 from './imgs/Logo4.png'
import 'bootstrap'
export default function NavBar_M(){
    return(

<nav class="navbar navbar-expand-sm navbar-light bg-lignt" id="nav_m">

    <a class="navbar-brand" href="#">
     <img src={logo4}  class="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
       <li class="nav-item">
      <a  class="nav-link" href="../index.html">INICIO</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">PERFIL</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">CONTACTO</a>
    </li>

    <li class="nav-item dropdown ">
      <a class="nav-link" href="#" >
        NOSOTROS
      </a>
      <div class="dropdown-menu ms-auto">
        <a class="dropdown-item" href="#">ESTERILIZACIÓN</a>
        <a class="dropdown-item" href="#">VACUNACIÓN</a>
        <a class="dropdown-item" href="#">CONSULTA</a>
      </div>
    </li>

 <li class="nav-item">
    <a class="nav-link" href="#">SERVICIOS</a>
      <div class="dropdown-menu ms-auto">
        <a class="dropdown-item" href="#">ESTERILIZACIÓN</a>
        <a class="dropdown-item" href="#">VACUNACIÓN</a>
        <a class="dropdown-item" href="#">CONSULTA</a>
      </div>
    </li>
      </ul>
    </div>

</nav>








    )   
}