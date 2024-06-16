import React from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import TestimonialsHook from "../hooks/testimonials";

const Testimonials = () => {
    const testimonialHook = TestimonialsHook();
    
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
        <div className="row">
            <h2>Testimonials</h2>
            {testimonialHook.map((item, index)  => {
                  return (
                      <div className="teaser-grid--wrapper col-lg-4" id={index}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            <a href='/testimonials'>
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(item.image.gatsbyImageData)} alt={''} />
                                </div>
                                <div className="teaser-grid__description">{renderRichText(item.shortDescription, options)}</div>
                                <div className="teaser-grid__title">{item.name}</div>
                                
                            </a>
                            
                            </div>
                        </div>
                      </div>
                  );
                })
              }
        </div>
      </div>
    );
};


export default Testimonials;

