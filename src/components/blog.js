import React from "react";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import BlogHook from "../hooks/blogs";

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
                      <div className="teaser-grid--wrapper col-lg-4" id={item.id}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            <a href={item.path} title={`Link to ${item.blogTitle}'s biography page`}>
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(item.mainImage.gatsbyImageData)} aria-label={item.blogTitle} alt={''} />
                                </div>
                                <div className="teaser-grid__title">{item.blogTitle}</div>
                                <div className="teaser-grid__description">{renderRichText(item.blogInfo, options)}</div>
                                
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
export default Blog;

