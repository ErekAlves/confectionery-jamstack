
import * as React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

const Recipes = () => {
 
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
 
  return (
    
    <Layout showAside={true}>
      <h1>{data.site.siteMetadata.title}</h1>
      <p></p>
    </Layout>
  );
};

export default Recipes; 

export const Head = () => <title>Receitas Page</title>;
