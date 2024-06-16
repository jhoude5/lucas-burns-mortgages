import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const BlogHook = () => {
  const {
    allContentfulBlogs: { nodes }
    } = useStaticQuery(graphql`
        query BlogQuery {
            allContentfulBlogs {
                nodes {
                  path
                  mainImage {
                    gatsbyImageData
                  }
                  blogTitle
                  blogInfo {
                    raw
                  }
                  date
                }
              }
        }
    `);
  return nodes;
};

export default BlogHook;