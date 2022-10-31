import React from 'react';
import { Link } from 'react-router-dom'

export default function Topo() {
  return (
    <header>
      <div className="secao-header">
        <img src="../assets/logo.png"/>
        
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/sabores'>Sabores</Link>
          <Link to='/sobre'>Sobre</Link>
        </nav>
      </div>
    </header>
  )
}
