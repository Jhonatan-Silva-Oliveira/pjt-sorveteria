import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import './style.css';

const Sobre = () => (
  <div className="Sobre">
  
    <Topo />
    
    <main>
      <section className="secao-banner-sobre">
        <div className="box-secao-banner-sobre">
          <h1>A Gelateria</h1>
        </div>
      </section>
      
      <section className="limitar-secao secao-texto-sobre">
        <div className="box-secao-texto-sobre">
          <h2>Sobre Nós</h2>
          <span>Nós simplesmente amamos sorvete!</span>
          <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
          <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimento e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
        </div>
      </section>
      
      <section className="container-imagens-sobre">
        <div className="box-image-sobre">
          <img src="./assets/sobre-image.jpg"/>
        </div>
        <div className="box-image-sobre">
          <img src="./assets/sorveteria.jpg"/>
        </div>
      </section>
    </main>
    
    <Rodape />
  </div>
)

export default Sobre;