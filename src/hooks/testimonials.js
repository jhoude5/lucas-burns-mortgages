import { graphql, useStaticQuery } from 'gatsby';

const TestimonialsHook = () => {
  const {
    allContentfulTestimonials: { nodes }
    } = useStaticQuery(graphql`
        query StaticQuery {
            allContentfulTestimonials {
                nodes {
                    image {
                        gatsbyImageData
                        
                        
                    }
                    name
                    testimonial {
                        raw
                    }
                    shortDescription {
                        raw
                    }
                }
              }
        }
    `);
  return nodes;
};

export default TestimonialsHook;