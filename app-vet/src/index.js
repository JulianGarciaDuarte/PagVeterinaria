import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
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


