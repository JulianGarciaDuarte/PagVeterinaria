import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HistoriaClinica from './HistoriaClinica';
import AnunciosBar from './AnunciosBar';
import Home from './Home';
import NavBar from './NavBar';
import NavBar_M from './NavBar_M';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>

    <AnunciosBar/>
    <NavBar_M/>
    <NavBar/>
    <main>
      <div className="container-fluid">
      <div class="row">

      <Home/>
      <Footer/>
      
      </div>
      </div>
      </main>

  </React.StrictMode>,
  document.getElementById('root')
);


