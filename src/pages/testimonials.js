import * as React from "react"
import Header from '../components/header';
import '../sass/styles.scss';
import ApplyNow from "../components/applynow";
import Footer from "../components/footer";
import Newsletter from '../components/newsletter';
import { addBackToTop } from 'vanilla-back-to-top';
import TestimonialsHook from "../hooks/testimonials";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';



const Testimonials = () => {
    addBackToTop();
    const testimonialHook = TestimonialsHook();
    console.log(testimonialHook);
    
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
    <div> 
        <main>
          <Header />
          <div className="container">
            <h2>Testimonials</h2>
          </div>
          
          <section id='apply' className="applynow">
            <ApplyNow />
          </section>
          <section className="testimonials">
            <div className="container">
                <div className="row">
                {testimonialHook.map((item, index)  => {
                  return (
                      <div className="testimonial--wrapper" id={index}>
                        <div className="testimonial-grid">
                                <div className="testimonial__image">
                                  <GatsbyImage image={getImage(item.image.gatsbyImageData)} alt={''} />
                                </div>
                                <div className="teaser-grid__description">{renderRichText(item.testimonial, options)}</div>
                                <div className="teaser-grid__title">{item.name}</div>
                        </div>
                      </div>
                  );
                })
              }
                </div>
            </div>
          
          </section>
          <section className="subscribe">
            <Newsletter />
          </section>
        </main>
        <Footer />
    </div>
   
  )
}

export default Testimonials

