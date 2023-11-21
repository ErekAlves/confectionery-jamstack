import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import './layout.css';

export default function Layout({ children, showAside = false }) {
  const data = useStaticQuery(graphql`
    query{
      allMdx(sort: { frontmatter: {date: DESC} }) {
        nodes {
          frontmatter {
            date(formatString: "DD/MMMM/YYYY")
            title
          }
          id
          excerpt
        }
      } 
    }
  `);

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
        {showAside && (
          <aside>
            AQUI VAI UMA LISTA
            <ul>
              {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>Posted: {node.frontmatter.date}</p>
                  <p>node.excerpt</p>
                </article>
              ))}
            </ul>
          </aside>
        )}
      </div>
      <div className='footer'>
        <p>&copy; Projeto Jamstack com Gatsby. Todos os direitos reservados.</p>
      </div>
    </main>
  );
}
