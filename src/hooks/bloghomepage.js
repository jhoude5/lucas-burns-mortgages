
// import { graphql, useStaticQuery } from 'gatsby';

// const BlogHomepageHook = () => {
//   const {
//     allContentfulBlogs: { nodes }
//     } = useStaticQuery(graphql`
//         query BlogQuery {
//             allContentfulBlogs(limit: 1) {
//                 nodes {
//                   path
//                   mainImage {
//                     gatsbyImageData
//                   }
//                   blogTitle
//                   shortDescription {
//                     raw
//                   }
//                   date
//                 }
//               }
//         }
//     `);
//   return nodes;
// };

// export default BlogHomepageHook;