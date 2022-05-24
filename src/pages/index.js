import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/Seo';

const Index = () => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
   }
  `);

  const title = data?.site?.siteMetadata?.title ?? {}

  console.log(title);

  return (
    <>
      <Seo />
      Hello Gatsby, {title}
      <Link to="/about">About this page</Link>
    </>
  )
};

export default Index;
