import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sabores from '../pages/Sabores';
import Sobre from '../pages/Sobre';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/sabores" element={ <Sabores /> } />
      <Route path="/sobre" element={ <Sobre /> } />
    </Routes>
  </BrowserRouter>
)

export default Rotas;