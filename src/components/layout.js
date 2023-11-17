import * as React from 'react';
import { Link } from 'gatsby';
import './layout.css';

export default function Layout({ children }) {
  return (
    <main className="layout">
      <div className="header">
        <div className="logo">Logo</div>
        <nav className="topnav">
          <Link to="/"> Início</Link>
          <Link to="/recipes"> Página de Receitas</Link>
        </nav>
      </div>
      <div className="main">
        {children}
        <aside>AQUI VAI UMA LISTA</aside>
      </div>
      <div className="footer">Rodapé</div>
    </main>
  );
}
