import React from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import BlogHook from "../hooks/bloghomepage";
import rightarrow from '../files/rightarrow.png';

const Blog = () => {
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
        <div className="container center">
        <div className="row">
          <h2>Check out my Blog</h2>
          {blogHook.map((item, index)  => {
                  return (
                      <div className="teaser-grid--wrapper card" id={index}>
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
              <a href='/blogs' className="see-all-link">See all blogs
                <img src={rightarrow} alt="" />
              </a>
        </div>
      </div>
    );
};
export default Blog;

