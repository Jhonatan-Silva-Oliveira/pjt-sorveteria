import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape'
import './style.css';

const Sabores = () => (
  <div className="Sabores">
    
    <Topo />
    
    <main>
      <section className="secao-banner-sabores">
        <div className="box-secao-banner-sabores">
          <h1>Nossos Sabores</h1>
        </div>
      </section>
      
      <section className="limitar-secao secao-cards-sabores">
        <h2>Sabores de Sorvete</h2>
        
        <div className="container-cards">
        
          <div className="box-card">
            <img src="./assets/sabor-oreo.png" />
            <div>
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
          </div>
          <div className="box-card">
            <img src="./assets/sabor-pistache.png" />
            <div>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
          </div>
          <div className="box-card">
            <img src="./assets/sabor-cookies-avela.png" />
            <div>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
          </div>
          <div className="box-card">
            <img src="./assets/sorbet-kiwi.png" />
            <div>
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
          </div>
          <div className="box-card">
            <img src="./assets/sorbet-morango.png" />
            <div>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
          </div>
          <div className="box-card">
            <img src="./assets/sorbet-limao.png" />
            <div>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <Rodape />
  </div>
)

export default Sabores;