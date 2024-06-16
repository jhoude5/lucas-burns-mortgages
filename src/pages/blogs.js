import * as React from "react"
import Header from '../components/header';
import '../sass/styles.scss';
import ApplyNow from "../components/applynow";
import Footer from "../components/footer";
import Newsletter from '../components/newsletter';
import { addBackToTop } from 'vanilla-back-to-top';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import BlogHook from "../hooks/blogs";


const Blogs = () => {
    addBackToTop();
    const blogHook = BlogHook();
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
            <h2>Blogs</h2>
          </div>
          
          <section id='apply' className="applynow">
            <ApplyNow />
          </section>
          {blogHook.map((item, index)  => {
                  return (
                      <div className="teaser-grid--wrapper col-lg-4" id={index}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(item.mainImage.gatsbyImageData)} aria-label={item.blogTitle} alt={''} />
                                </div>
                                <div className="teaser-grid__title">{item.blogTitle}</div>
                                <div className="teaser-grid__description">{renderRichText(item.shortDescription, options)}</div>
                                <a href={item.path}>Read full story </a>
                            
                            </div>
                        </div>
                      </div>
                  );
                })
              }
          
          <section className="subscribe">
            <Newsletter />
          </section>
        </main>
        <Footer />
    </div>
   
  )
}

export default Blogs


