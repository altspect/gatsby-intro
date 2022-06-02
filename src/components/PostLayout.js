import React from 'react';
import Layout from './Layout';

const PostLayout = ({ children, pageContext}) => {
  const { title, description } = pageContext.frontMatter;

  return (
    <Layout
      title={title}
      description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  )
}
