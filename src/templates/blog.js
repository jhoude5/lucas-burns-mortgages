import React from 'react';
// import {graphql, useStaticQuery} from 'gatsby';
import Pagination from "../components/pagination.js";
import BlogHook from '../hooks/blogs.js';



const Blog = ({ pageContext }) => {
//   const blogs = data.blogs.edges;
    const blogHook = BlogHook();
  return (
    
      <section className='press-releases'>
        <div className='inner'>

          {blogHook.map(({ node }, index) => {
            return (
             <h2>node.blogTitle</h2>
            )
          })}
          <Pagination pageContext={pageContext} />
        </div>

      </section>
      
    
  );
};

// export const pageQuery = graphql`
//   query PageQuery {
//     blog: allContentfulBlogs {
//       edges {
//         node {
//           blogTitle
//           date
//           blogInfo {
//             raw
//           }
//         }
//       }
//     }
//   }
// `;
export default Blog;

