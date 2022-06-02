import React from 'react';
import Layout from "../components/Layout";
import {graphql, Link, useStaticQuery} from "gatsby";

const Index = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            title
            date(fromNow: false)
          }
          id
          slug
        }
      }
    }
  `);

  const posts = data?.allMdx.nodes;
  return (
    <Layout
      title="About this course"
      description="This is a course about gatsby"
    >
      <h2>Check out my recent blog posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={post.slug}>
                {post.frontmatter.title}
              </Link>
              <small>{post.frontmatter.date}</small>
            </li>
            );
        })}
      </ul>
    </Layout>
  )
};

export default Index;
