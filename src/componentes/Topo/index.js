import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao secao-header">
        <img src="../assets/logo.png"/>
        
        <nav>
          <Link className='navegacao' to='/'>Home</Link>
          <Link className='navegacao' to='/sabores'>Sabores</Link>
          <Link className='navegacao' to='/sobre'>Sobre</Link>
        </nav>
      </div>
    </header>
  )
}
