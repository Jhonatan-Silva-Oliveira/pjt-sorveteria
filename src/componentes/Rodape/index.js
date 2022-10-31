import React from 'react';
import { Link } from 'react-router-dom';

export default function Rodape() {
  return (
    <footer>
      <div className="container-main-footer">
        <img src="../assets/logo.png"/>
        
        <div className="container-info">
          <h3>Endereço</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        
        <div className="container-info">
          <h3>Contato</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        
        <div className="container-info">
          <h3>Horários</h3>
          <p>Aberto Todos os Dias</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      
      <div className="container-footer">
        <p>Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p>
      </div>
    </footer>
  )
}