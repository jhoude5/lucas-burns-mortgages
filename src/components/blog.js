import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlogs {
        node {
          id
          blogTitle
          mainImage {
            gatsbyImageData
            url
          }
          blogInfo {
            raw
          }
        }
    }
  }
  `);
  const blogs = data.allContentfulBlogs.nodes;
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
          <h2>Check out my Blog</h2>
          {data.map((item, index)  => {
                  return (
                      <div className="teaser-grid--wrapper col-lg-4" id={item.id}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link">
                            <a href={item.path} title={`Link to ${item.blogTitle}'s biography page`}>
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(item.mainImage.gatsbyImageData)} aria-label={item.itemName} alt={''} />
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

