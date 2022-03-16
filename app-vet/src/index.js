import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HistoriaClinica from './HistoriaClinica';
import AnunciosBar from './AnunciosBar';
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <AnunciosBar/>
    <NavBar/>
    <HistoriaClinica/>
  </React.StrictMode>,
  document.getElementById('root')
);


