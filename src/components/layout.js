// layout.js
import * as React from 'react';
import { Link} from 'gatsby';
import './layout.css';

export default function Layout({ children, showAside = false }) {

  return (
    <main className='layout'>
      <div className='header'>
        <div className='logo'>Logo</div>
        
        <nav className='topnav'>
          <Link to='/'> Início</Link>
          <Link to='/recipes'> Página de Receitas</Link>
          <Link to='/recipesClients'> Página de Cadastro de Receitas</Link>
        </nav>
      </div>
      <div className='main'>
        {children}
        {showAside && <aside>AQUI VAI UMA LISTA</aside>}
      </div>
      <div className='footer'>
        <p>&copy; Projeto Jamstack com gatsby. Todos os direitos reservados.</p>
      </div>
    </main>
  );
}
