import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HistoriaClinica from './HistoriaClinica';
import AnunciosBar from './AnunciosBar';
import NavBar from './NavBar';
import NavBar_M from './NavBar_M';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AnunciosBar/>
    <NavBar/>
    <NavBar_M/>
    <Routes>
    <Route path='/HistoriaClinica' element={<HistoriaClinica/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


