// import { graphql, useStaticQuery } from 'gatsby';

// const TestimonialsHomepageHook = () => {
//   const {
//     allContentfulTestimonials: { nodes }
//     } = useStaticQuery(graphql`
//         query TestimonialQuery {
//             allContentfulTestimonials(limit: 2) {
//                 nodes {
//                     image {
//                         gatsbyImageData
//                     }
//                     name
//                     shortDescription {
//                         raw
//                     }
//                 }
//               }
//         }
//     `);
//   return nodes;
// };

// export default TestimonialsHomepageHook;