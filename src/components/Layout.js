import React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import Seo from "./Seo";
import '../styles/global.css';
import { header, content } from '../styles/layout.module.css';

const Layout = ({
  title = '',
  description = '',
  image = false,
  url = false,
  children = null
                }) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
   }`);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        url={url}
      />
      <header className={header}>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  )
};

export default Layout;
