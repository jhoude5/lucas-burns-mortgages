import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import rightarrow from '../files/rightarrow.png';

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query TestimonialQuery {
        allContentfulTestimonials(limit: 2) {
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
  console.log(data);
  const testimonials = data.allContentfulTestimonials.nodes;
    
    
     const options = {
       
       renderMark: {
         [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
       },
       renderNode: {
         [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
         [INLINES.HYPERLINK]: (node, children) => {
           const { uri } = node.data
           return (
             <a href={uri} className="underline">
               {children}
             </a>
           )
         },
       }
    }
    
    return (

        <div className="container">
        <div className="row g-2">
            <h2 className="center">Testimonials</h2>
            {testimonials.map((item, index)  => {
                  return (
                      <div className="testimonial--wrapper col card" id={index}>
                        <div className="testimonial-grid">
                            
                                <div className="teaser-grid__image">
                                  {/* <GatsbyImage image={getImage(item.image.gatsbyImageData)} alt={''} /> */}
                                </div>
                                <div className="testimonial-grid__description">{renderRichText(item.shortDescription, options)}</div>
                                <div className="testimonial-grid__title">{item.name}</div>
                                <a className="testimonial_link" href='/testimonials'> Read full testimonial </a>
                            
                        </div>
                      </div>
                  );
                })
              }
              <a href='/testimonials' className="see-all-link">See all testimonials
                <img src={rightarrow} alt="" />
              </a>
        </div>
      </div>
    );
};


export default Testimonials;

